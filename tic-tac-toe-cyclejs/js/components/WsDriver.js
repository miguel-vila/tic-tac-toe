import {Observable} from 'rx';

function createWsDriver (url) { 
    const ws = new WebSocket(url);
    return (outgoingMsg$) => {
        const incomingMsg$ = Observable.create(observer => {
            ws.onerror = observer.onError;
            ws.onmessage = msg => {
                observer.onNext( JSON.parse( msg.data ) );
            }
            ws.onopen = () => {
                observer.onNext({ responseType: 'WebSocketConnected' });
            }
        }).share();
        
        outgoingMsg$.subscribe(msg => {
            console.log('about to send: ', msg);
            ws.send( JSON.stringify( msg ) ) 
        }, err => {
            console.log('err!!!:', err);
        });

        return incomingMsg$;
    }
}

export default createWsDriver;  