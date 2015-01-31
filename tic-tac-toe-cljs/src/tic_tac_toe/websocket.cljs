(ns tic-tac-toe.websocket)

(def ws (js/WebSocket. "ws://tic-tac-toe-scala-cljs.herokuapp.com/websockets/user"))

(defn send [message]
  (.send ws message))

(defn set-on-message! [onmessage]
  (set! (.-onmessage ws) onmessage))

(defn set-on-open! [onopen]
  (set! (.-onopen ws) onopen))
