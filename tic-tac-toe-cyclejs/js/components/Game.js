import {Observable} from 'rx';
import {div, h1, h2, button} from '@cycle/dom';

function centeredH2(text) {
    return h2( { className : "centered-text" }, text );
}

function notCreated (game) {
    const connecting = !game.readyToJoin;
    const joinGameButton = button( { className : "join-game centered", disabled: connecting }, ["Join Game"] );
    const elems = [joinGameButton];
    if(connecting) {
        const connectingElem = centeredH2( "Connecting..." );
        elems.push( connectingElem );
    }
    return div( null, elems );
}

const waitingForOtherPlayerToJoin = centeredH2( "Waiting other player to join" );
const gameStarted = centeredH2( "Game started!" );
const waitingForOtherPlayerToMove = centeredH2( "Waiting for other player's move" );
const waitingPlayerMove = centeredH2( "Make your move" );
const playAgain = button( { className : "centered-text" }, ["Play again"]);

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
     case "gameWon":
     content.push( gameWon( game ) );
     case "draw":
     content.push( draw );
     case "otherPlayerDisconnected":
     content.push( otherPlayerDisconnected );
 }
 return div( { className : "game-status" }, content);
}

function gameView (game) {
    return div( { className: 'game' }, [
        h1({}, "Tic Tac Toe"),
     [
     gameStatusView( game ),
     ]
     ])
}