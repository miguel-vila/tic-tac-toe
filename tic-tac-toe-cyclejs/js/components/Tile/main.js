import events from './events';
import view from './view';
import model from './model';

function tileComponent (sources) {
    const {x,y,playerMark,otherPlayerMark} = sources.props;

    const event$ = events( sources );
    const model$ = model(event$, sources.props);
    const view$ = model$.map(view);

    return {
        DOM: view$,
        event$: event$.filter( e =>  e.type === 'click' )
                      .map( _ => ({ type: 'markedByPlayer', position : { x , y } }) )
    };
}

export default tileComponent;