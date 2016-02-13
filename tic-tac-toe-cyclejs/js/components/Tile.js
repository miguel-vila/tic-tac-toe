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

function clicks (DOMSource) {
    return DOMSource.select('.tile')
            .events('click')
            .filter( e => e.target.className && e.target.className.indexOf("blocked-tile") === -1 )
            .map( _ => {
                return { type: 'click' };
            } );
}

function otherPlayerClicks (otherPlayerClick$) {
    return otherPlayerClick$.map( _ => {
        return { type : 'otherPlayerClick' };
    } );
}

function blockUnblockEvents (blocked$) {
    return blocked$.map( blocked => {
            if(blocked) {
                return { type : 'block' };
            } else {
                return { type : 'unblock' };
            }
        });
}

function events (otherPlayerClick$ , blocked$, click$) {
    return Observable.merge(
        click$,
        otherPlayerClicks( otherPlayerClick$ ),
        blockUnblockEvents( blocked$ )
    );
}

function putMark (model, mark) {
    return Map(model).set('mark', mark).toObject();
}

function setBlocked(model, blocked) {
    return Map(model).set('blocked', blocked).toObject();
}

function _update (model, event, playerMark, otherPlayerMark) {
    if(model.blocked && event.type !== 'unblock') {
        return model;
    } else {
        switch(event.type) {
            case 'click':
                return putMark( model, playerMark );
            case 'otherPlayerClick':
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

    const click$ = clicks( sources.DOM );
    const event$ = events( sources.otherPlayerClick$, sources.blocked$, click$ );

    const model$ = event$.startWith({/*Evento vacío. Se puede hacer mejor?*/})
                         .scan(update, initialModel);

    const view$ = model$.map(tileView);

    return {
        DOM: view$,
        event$: click$.map( _ => {
            return { type: 'markedByPlayer', position : { x , y } } 
        })
    }
}


export default tileComponent;