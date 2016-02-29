import {Observable} from 'rx';

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

function events ({DOM, otherPlayerClick$, blocked$}) {
    return Observable.merge(
        clicks(DOM),
        otherPlayerClicks( otherPlayerClick$ ),
        blockUnblockEvents( blocked$ )
    ).share();
}

export default events;