import {Observable} from 'rx';

function createWsDriver (url) { 
    return function WsDriver(msg$) {
        const connection = new WebSocket(url);
        msg$.subscribe(msg => connection.send( JSON.stringify( msg ) ) );
        return Observable.create(observer => {
            connection.onerror = observer.onError;
            connection.onmessage = observer.onNext;
        }).share();
    }
}

export default createWsDriver;