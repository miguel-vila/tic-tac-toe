import {Observable} from 'rx';
import {div, table, tbody, tr, td} from '@cycle/dom';
import tileComponent from "./Tile/main";
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

function boardComponent({ props, DOM, otherPlayerMove$, blocked$ }) {
    const {playerMark,otherPlayerMark} = props;

    function Tile(x,y) {
        return isolate(tileComponent, `${x}${y}`);
    }

    function createTile(x,y) {
        const otherPlayerClick$ = otherPlayerMove$.filter( otherPlayerMove => otherPlayerMove.x === x && otherPlayerMove.y === y );
        return Tile(x,y)({
            DOM,
            otherPlayerClick$,
            blocked$,
            props: { x , y , playerMark , otherPlayerMark }
        });
    }

    const tilesComponentsMatrix = [0,1,2].map( x => 
        [0,1,2].map( y => createTile(x,y) )
    );

    const rowsDom$ = Observable.combineLatest(...tilesComponentsMatrix.map( tilesComponentsRow => {
        const tilesDom$ = Observable.combineLatest(...tilesComponentsRow.map( component => component.DOM ));
        return rowView( tilesDom$ );
    }));

    const boardClick$ = Observable.merge(...tilesComponentsMatrix.map( tilesComponentsRow => 
        Observable.merge(...tilesComponentsRow.map( component => component.event$ ))
    ));

    const dom$ = boardView( rowsDom$ );
    
    return {
        DOM: dom$,
        boardClick$
    };
}

export default boardComponent;