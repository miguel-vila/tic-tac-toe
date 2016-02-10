import {Observable} from 'rx';
import {div} from '@cycle/dom';
import {Map} from 'immutable';

function playerClassName (mark) {
    return mark ? `player${mark}` : "";
}

function tileClassName(tile) {
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

function events (DOMSource) {
    return DOMSource.select('.tile')
            .events('click')
            .map( _ => {
                return { type: 'click'}
            } );
}

function putMark (model, mark) {
    return Map(model).set('mark', mark).toObject();
}

function setBlocked(model, blocked) {
    return Map(model).set('blocked', blocked).toObject();
}

function _update (model, event, playerMark, otherPlayerMark) {
    if(model.blocked) {
        return model;
    } else {    
        switch(event.type) {
            case 'click':
                return putMark( model, playerMark );
            case 'other-player-movement':
                return putMark( model, otherPlayerMark );
            case 'block':
                return setBlocked(model, true);
            case 'unblock':
                return setBlocked(model, false);
        }
        return model;
    }
}

function tileComponent (sources) {
    const {x,y,playerMark,otherPlayerMark} = sources.props;

    const initialModel = {x, y, blocked: false};
    
    function update(model, event) {
        return _update(model, event, playerMark, otherPlayerMark);
    }

    function model (event$) {
        return event$.startWith({/*Evento vacío. Se puede hacer mejor?*/}).scan(update, initialModel);
    }

    const event$ = events( sources.DOM /*, @TODO other events*/ );
    const model$ = model(event$);
    const view$ = model$.map(tileView);

    return {
        DOM: view$,
    }
}


export default tileComponent;