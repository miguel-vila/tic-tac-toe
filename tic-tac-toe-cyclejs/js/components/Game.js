import {Observable} from 'rx';
import {div, h1, h2, button} from '@cycle/dom';
import BoardComponent from './Board';
import { startGameMessage , putMarkMessage } from '/.Messages';
import { Map } from 'immutable';

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
    var content = [];
    switch(game.status) {
        case "notCreated":
            content.push( notCreated( game ) );
        case "waitingForOtherPlayerToJoin":
            content.push( waitingForOtherPlayerToJoin );
        case "gameStarted":
            content.push( gameStarted );
        case "waitingForOtherPlayerToMove":
            content.push( waitingForOtherPlayerToMove );
        case "waitingPlayerMove":
            content.push( waitingPlayerMove );
        case "GameWon":
            content.push( gameWon( game ) );
        case "draw":
            content.push( draw );
        case "otherPlayerDisconnected":
            content.push( otherPlayerDisconnected );
    }
    return div( { className : "game-status" }, content);
}

function gameView (game, boardDOM$) {
    return boardDOM$.map( boardDOM => 
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
                    .set('otherPlayerMark', otherPlayerMark)
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

function update(game, event) {
    switch(event.type) {
        case "NoPlayersAvailable":
            return setStatus(game, 'waitingForOtherPlayerToJoin');
        case "GameStarted":
            return setStatusAndUnblock(game, event.youArePlayer);
        case "MakeYourMove":
            return setStatus(game, 'waitingPlayerMove');
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

function gameComponent ({DOM, WS}) {
    const otherPlayerMove$ = WS.filter( msg => msg.responseType === "PlayerPutAMarkInPosition" )
                               .map( msg => msg.position );

    const wsEvent$ = WS.filter( msg => msg.responseType !== "PlayerPutAMarkInPosition" )
                       .map( msg => {
                            msg.type = msg.responseType; // this could be avoided by renaming this field in the server
                            return msg;
                       });

    const initialGame = { status : "notCreated", blocked: true };

    const game$ = wsEvent$.startWith({/*Mensaje vacío. ¿Se puede hacer mejor?*/})
                          .scan(update, initialGame);

    const blocked$ = game$.map( game => game.blocked ).distinctUntilChanged();
    
    const {boardDOM, boardClick$} = BoardComponent({
        DOM,
        otherPlayerMove$,
        blocked$
    });
    
    const message$ = messages( sources.DOM, boardClick$ ); 

    return {
        WS: message$
    }
}