import {Observable} from 'rx';
import {div, table, tbody, tr, td} from '@cycle/dom';
import tileComponent from "./Tile";
import isolate from '@cycle/isolate';

function rowView( tilesDom$ ) {
	return tilesDom$.map( tilesDom =>
		div({ className: 'row'},
			tilesDom
		)
	);
}

function boardView( rowsDom$ ) {
	return rowsDom$.map( rowsDom =>
		div({className:'board'}, rowsDom )
	);
}

function boardComponent( sources ) {
	const {playerMark,otherPlayerMark} = sources.props;

	function Tile(x,y) {
		return isolate(tileComponent, `${x}${y}`);
	}

	function createTile(x,y) {
		return Tile(x,y)({
			DOM: sources.DOM,
			props: {x,y,playerMark,otherPlayerMark}
		});
	}

	const rowsDom$ = Observable.combineLatest(...[0,1,2].map( x => {
		const tilesDom$ = Observable.combineLatest(...[0,1,2].map( y => createTile(x,y).DOM ));
		return rowView( tilesDom$ );
	}));

	const dom$ = boardView( rowsDom$ );
	
	return {
		DOM: dom$
	};
}

export default boardComponent;