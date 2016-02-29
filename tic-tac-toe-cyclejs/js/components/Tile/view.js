import {div} from '@cycle/dom';

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
    return div({ className: tileClassName( tile ) }, [tile.mark]);   
}

export default tileView;