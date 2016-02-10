import {Observable} from 'rx';
import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import App from './components/App';
import BoardComponent from './components/Board';
import TileComponent from './components/Tile';
import {div, table, tbody, tr, td} from '@cycle/dom';

run(BoardComponent, {
	DOM: makeDOMDriver('#root'),
	props: () => {
		return {
			playerMark: "X",
			otherPlayerMark: "O"
		}
	}
});
