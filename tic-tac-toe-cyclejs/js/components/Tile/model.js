import {Map} from 'immutable';

function putMark (model, mark) {
    return Map(model).set('mark', mark).toObject();
}

function setBlocked(model, blocked) {
    return Map(model).set('blocked', blocked).toObject();
}

function update (model, event, playerMark, otherPlayerMark) {
    if(model.blocked && event.type !== 'unblock' && event.type !== 'otherPlayerClick') {
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

function model (event$, props) {
    const {x, y, playerMark, otherPlayerMark} = props;
    const initialModel = {x, y, blocked: false};

    function _update(model, event) {
        return update(model, event, playerMark, otherPlayerMark);
    }

    const model$ = event$.startWith({/*Evento vacío. Se puede hacer mejor?*/})
                         .scan(_update, initialModel);
    return model$;
}

export default model;