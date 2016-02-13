import {Observable} from 'rx';
import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import App from './components/App';
import BoardComponent from './components/Board';
import TileComponent from './components/Tile';
import GameComponent from './components/Game';
import {div, table, tbody, tr, td} from '@cycle/dom';
import createWsDriver from './components/WsDriver'

run(GameComponent, {
    DOM: makeDOMDriver('#root'),
    websocket: createWsDriver('ws://tic-tac-toe-scala-cljs.herokuapp.com/websockets/user')
});
