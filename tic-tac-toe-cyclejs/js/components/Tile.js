import {Observable} from 'rx';
import {div} from '@cycle/dom';
import isolate from '@cycle/isolate';
import {Map} from 'immutable';

function playerClassName (mark) {
	return mark ? `player${mark}` : "";
}

function tileClassName(tile) {
	console.log('tile:',tile);
	if(tile.mark) {
		return `tile blocked-tile ${ playerClassName( tile.mark ) }`;
	} else if(tile.blocked) {
		return 'tile blocked-tile';
	} else {
		return 'tile';
	}
}

function tileView (tile) {
	return div({ className: tileClassName( tile ) },[tile.mark]);	
}

function createTileConstructor (x,y,playerMark, otherPlayerMark) {
	return function tileComponent (sources) {
		const change$ = intent( sources.DOM );
		const initialModel = {x, y, blocked: true};
		
		function events (DOMSource, OtherPlayerMoves$) {
			return DOMSource.select('.tile')
							.events('click')
							.map( _ =>  { type: 'click'} );
		}

		function putMark (model, mark) {
			return Map(model).set('mark', mark).toObject();
		}

		function setBlocked(model, blocked) {
			return Map(model).set('blocked', blocked).toObject();
		}

		function update (model, event) {
			if(model.blocked) {
				return model;
			} else {	
				switch(event.type) {
					case 'click':
						return putMark( playerMark );
					case 'other-player-movement':
						return putMark( otherPlayerMark );
					case 'block':
						return setBlocked(model, true);
					case 'unblock':
						return setBlocked(model, false);
				}
				return model;
			}
		}

		function model (event$) {
			return event$.reduce(update, initialModel);
		}

		const event$ = events( sources.DOM /*, @TODO other events*/ );
		const model$ = model(event$);
		const view$ = tileView(model$);

		return {
			DOM: view$,
		}
	}
}


export default tileView;