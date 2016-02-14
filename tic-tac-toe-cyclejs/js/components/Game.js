import {Observable} from 'rx';
import {div, h1, h2, button} from '@cycle/dom';
import BoardComponent from './Board';
import Messages from './Messages';
import { Map } from 'immutable';

const { startGameMessage , putMarkMessage } = Messages;

const initialGame = { status : "notCreated", blocked: true };

function centeredH2(text) {
    return h2( { className : "centered-text" }, [text] );
}

function notCreated (game) {
    const connecting = !game.readyToJoin;
    const joinGameButton = button( { className : "join-game centered", disabled: connecting }, ["Join Game"] );
    const elems = [joinGameButton];
    if(connecting) {
        elems.push( centeredH2( "Connecting..." ) );
    }
    return div( null, elems );
}

const waitingForOtherPlayerToJoin = centeredH2( "Waiting other player to join" );
const gameStarted = centeredH2( "Game started!" );
const waitingForOtherPlayerToMove = centeredH2( "Waiting for other player's move" );
const waitingPlayerMove = centeredH2( "Make your move" );
const playAgain = button( { className : "play-again centered-text" }, ["Play again"]);

function gameWon (game) {
  return div(null,
     [  
         game.winner === game.playerMark ? centeredH2( "You Won!" ) : centeredH2( "You Lose!" ),
         playAgain
     ]);
}

const draw = div(null, [ centeredH2("Draw!") , playAgain ] );
const otherPlayerDisconnected = div(null, [ centeredH2( "The other player left" ), playAgain ] );

function gameStatusView (game) {
    const   content = [];
    const withContent = content => div( { className : "game-status" }, content) ;
    switch(game.status) {
        case "notCreated":
            return withContent( notCreated( game ) );
        case "waitingForOtherPlayerToJoin":
            return withContent( waitingForOtherPlayerToJoin );
        case "gameStarted":
            return withContent( gameStarted );
        case "waitingForOtherPlayerToMove":
            return withContent( waitingForOtherPlayerToMove );
        case "waitingPlayerMove":
            return withContent( waitingPlayerMove );
        case "GameWon":
            return withContent( gameWon( game ) );
        case "draw":
            return withContent( draw );
        case "otherPlayerDisconnected":
            return withContent( otherPlayerDisconnected );
    }
    throw new Error("fuuuck");
}

function gameView (game$, boardDOM$) {
    return Observable.combineLatest(
        game$, 
        boardDOM$, 
        (game, boardDOM) => 
            div( { className: 'game' }, [
                h1({}, "Tic Tac Toe"),
                gameStatusView( game ),
                boardDOM
            ])
    );
}

function messages (DOMSource, boardClick$) {
    const joinGameMessage$ = DOMSource.select('.join-game')
                                      .events('click')
                                      .map( _ => startGameMessage );

    const playAgainMessage$ = DOMSource.select('.play-again')
                                       .events('click')
                                       .map( _ => startGameMessage );

    const userMove$ = boardClick$.map( click => putMarkMessage( click.position ) );

    return Observable.merge(
        joinGameMessage$,
        playAgainMessage$,
        userMove$
    );
}

function setStatus (game, status) {
    return Map(game).set('status',status).toObject();
}

function setGameStarted(game, playerMark) {
    return Map(game).set('status', 'gameStarted')
                    .set('playerMark', playerMark)
                    .set('otherPlayerMark', otherPlayer(playerMark) )
                    .set('blocked', true)
                    .toObject();
}

function otherPlayer(playerMark) {
    return playerMark === 'X' ? 'O' : 'X';
}

function setStatusAndBlock (game, status) {
    return Map(game).set('status', status).set('blocked', true).toObject();
}

function setStatusAndUnblock (game, status) {
    return Map(game).set('status', status).set('blocked', false).toObject();
}

function setReadyToJoin (game) {
    return Map(game).set('readyToJoin', true).toObject();
}


function update(game, event) {
    switch(event.type) {
        case 'WebSocketConnected':
            return setReadyToJoin(game);
        case "NoPlayersAvailable":
            return setStatus(game, 'waitingForOtherPlayerToJoin');
        case "GameStarted":
            return setGameStarted(game, event.youArePlayer);
        case "MakeYourMove":
            return setStatusAndUnblock(game, 'waitingPlayerMove');
        case "Wait":
            return setStatusAndBlock(game, 'waitingForOtherPlayerToMove');
            /*
        case "PlayerPutAMarkInPosition":
            return
            */
        case "GameWon":
            return setStatusAndBlock(game, 'GameWon');
        case "Draw":
            return setStatusAndBlock(game, 'Draw');
    }
    return game;
}

function gameComponent (sources) {
    const DOMSource = sources.DOM;
    const websocket = sources.websocket;

    websocket.subscribe( msg => {
        console.log('receiving: ',msg);
    })

    const otherPlayerMove$ = websocket.filter( msg => msg.responseType === "PlayerPutAMarkInPosition" )
                               .map( msg => msg.position );

    const websocketEvent$ = websocket.filter( msg => msg.responseType !== "PlayerPutAMarkInPosition" )
                       .map( msg => {
                            msg.type = msg.responseType; // this could be avoided by renaming this field in the server
                            return msg;
                       });

    const game$ = websocketEvent$.startWith({/*Mensaje vacío. ¿Se puede hacer mejor?*/})
                          .scan(update, initialGame);

    const blocked$ = game$.map( game => game.blocked ).distinctUntilChanged();

    const gameStarted$ = websocket.filter( msg => msg.responseType === "GameStarted" )
                           .map( msg => {
                                return { playerMark: msg.youArePlayer , otherPlayerMark: otherPlayer( msg.youArePlayer ) };
                            });

    const boardComponent$ = gameStarted$.map( props =>
            BoardComponent({
                DOM: DOMSource,
                otherPlayerMove$,
                blocked$,
                props
        })
    );

    const boardDOM$ = boardComponent$.flatMapLatest( boardComponent => boardComponent.DOM ).startWith(div());
    const boardClick$ = boardComponent$.flatMapLatest( boardComponent => boardComponent.boardClick$ );

    const message$ = messages( DOMSource, boardClick$ );

    message$.subscribe(x => console.log('should send message: ',x));

    const DOM = gameView(game$, boardDOM$); 

    return {
        DOM,
        websocket: message$
    };
}

export default gameComponent;