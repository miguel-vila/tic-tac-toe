import {Observable} from 'rx';
import {div, table, tbody, tr, td} from '@cycle/dom';
import tileView from "./Tile";

function rowView( tiles ) {
	console.log('tiles:',tiles);
	console.log('tiles.map:',tiles.map);
	const tilesViews = tiles.map(tileView);
	return div({ className: "row"},
		tilesViews
	);
}

function boardView( board ) {
	console.log('board:',board);
	return div({className:'board'},
			board.map( rowView ));
}

export default boardView;