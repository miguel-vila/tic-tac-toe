(ns tic-tac-toe.websocket)

(def host (.-host js/location))

(js/console.log host)

(def ws (js/WebSocket. (str "ws://" host "/websockets/user")))

(defn send [message]
  (.send ws message))

(defn set-on-message! [onmessage]
  (set! (.-onmessage ws) onmessage))

(defn set-on-open! [onopen]
  (set! (.-onopen ws) onopen))
