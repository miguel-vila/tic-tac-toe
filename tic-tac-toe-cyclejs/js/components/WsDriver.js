import {Observable} from 'rx';

function createWsDriver (url) { 
    return function WsDriver() {
        return Observable.create(observer => {
            const connection = new WebSocket(url);
            connection.onerror = observer.onError;
            connection.onmessage = observer.onNext;
        }).share();
    }
}

export default createWsDriver;