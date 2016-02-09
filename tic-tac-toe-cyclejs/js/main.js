import {Observable} from 'rx';
import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import App from './components/App';
import boardView from './components/Board';
import {div, table, tbody, tr, td} from '@cycle/dom';


const range = [0,1,2];
const board = range.map(x => 
	range.map(y => {
		return {blocked:true,x,y}
	}) 
);	
/*
const board = [
	[{mark:'X'},{blocked: true}, {}],
	[{blocked: true}, {},{mark:'O'}],
	[{mark:'O'},{mark:'O'},{mark:'X'}]
];
*/

const dom = boardView(board);

console.log('dom:',dom);

function myapp () {
	return {
		DOM: Observable.of( dom )
	};
}

run(myapp, {DOM: makeDOMDriver('#root')});
