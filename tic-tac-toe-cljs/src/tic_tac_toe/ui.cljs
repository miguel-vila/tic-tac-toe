(ns tic-tac-toe.ui
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! >! close! timeout]]
            [tic-tac-toe.game :as gm]
            [tic-tac-toe.utils :refer [centered centered-text]]
            [tic-tac-toe.messages :refer [start-a-game-msg put-a-mark-msg]]))

(enable-console-print!)

(def ws (js/WebSocket. "ws://tic-tac-toe-scala-cljs.herokuapp.com/websockets/user"))

(def app-state
  "The app state which is a game map."
  (atom (gm/create-game)))

(defn player-className [mark]
  "Returns a string with the name of the player's class name."
  (cond (not mark) nil
        :else (str "player" mark)))

(defn tile-className [tile]
  "Returns a string with the tile's class name."
  (cond
   (get tile :mark) (str "blocked-tile " (player-className (get tile :mark)))
   (get tile :blocked) "blocked-tile"
   :else "tile"))

(defn tile-view [tile owner opts]
  "Om's view for a single game's tile."
  (reify
    om/IRender
    (render [_]
            (let [blocked (:blocked opts)]
              (dom/div #js {:className (tile-className tile)
                            :onClick (fn [_]
                                       (when (not (:blocked @tile))
                                         (js/console.log (str "sending to move channel:"))
                                         (js/console.log (str "sending to move channel ->" @tile))
                                         (put! (:moves opts) {:x (:x @tile) :y (:y @tile)})))} (:mark tile))))))

(defn line-view [tiles owner opts]
  "Om's view for a line of tiles."
  (reify
    om/IRender
    (render [_]
            (apply dom/div #js {:className "row"}
                   (mapv #(om/build tile-view % {:opts opts}) tiles)))))

(defn board-view [game owner opts]
  "Om's view for the board."
  (reify
    om/IRenderState
    (render-state [_ state]
                  (dom/table #js {:className "centered"}
                    (dom/tr #js {}
                     (dom/td #js {}
                      (apply dom/div #js {:className "board"}
                             (mapv #(om/build line-view % {:opts opts})
                                   (first (partition 3 (:tiles game)))))))))))

(defn moves-channel-handling [game moves-chan]
  "Handles the moves channel"
  (go-loop []
           (let [{:keys [x y]} (<! moves-chan)
                 mark (:player-mark @game)
                 message (put-a-mark-msg x y)]
             (js/console.log (str " move -> " message))
             (.send ws message)
             (om/transact! game #(gm/put-player-mark % x y)))
           (recur)))

(defn onmessage [game msg]
  (let [message (js->clj (.parse js/JSON (.-data msg)))
        responseType (get message "responseType")]
    (js/console.log "Got message from server:" (pr-str message))
    (js/console.log "ResponseType:" (pr-str responseType))
    (case responseType
      "NoPlayersAvailable" (om/transact! game gm/wait-player-to-join)
      "GameStarted" (om/transact! game #(gm/game-started % (get message "youArePlayer")))
      "Wait" (om/transact! game gm/waiting-other-player-move)
      "MakeYourMove" (om/transact! game gm/player-turn)
      "PlayerPutAMarkInPosition" (om/transact! game #(gm/other-player-put-a-mark % (get message "position")))
      "GameWon" (om/transact! game #(gm/game-won % (get message "winner")))
      "Draw" (om/transact! game #(gm/game-draw %))
      "UserDisconnected" (om/transact! game gm/other-player-disconnected)
      )))

(defn onopen [game]
  (om/transact! game gm/ready-to-join))

(defn reset-game [game]
  (om/transact! game (fn [_] (gm/create-game))))

(defn play-again-component [game]
  (let [on-click (fn [_] (.send ws start-a-game-msg)
                         (reset-game game))]
    (dom/button #js {:className "centered-text" :onClick on-click} "Play again")))

(defn game-won-component [game]
  (let [winner (:winner game)
        player-mark (:player-mark game)]
    (dom/div nil
             (if (= winner player-mark)
               (dom/h2 (centered-text) "You Won!")
               (dom/h2 (centered-text) "You Lose!"))
             (play-again-component game))))

(defn draw-component [game]
  (dom/div nil
           (dom/h2 (centered-text) "Draw!")
           (play-again-component game)))

(defn other-player-disconnected-component [game]
  (dom/div nil
           (dom/h2 (centered-text) "The other player left")
           (dom/button #js {:className "centered-text" :onClick (fn [_] (reset-game game))} "Play again")))

(defn not-created-component [game]
  (let [connecting (not (:ready-to-join game))]
    (dom/div nil
             (dom/button #js {:className "centered" :disabled connecting :onClick (fn [_] (.send ws start-a-game-msg))} "Join game")
             (when connecting
               (dom/h2 (centered-text) "Connecting..."))
             )))

(defn game-status-view [game owner opts]
  ""
  (reify
    om/IRenderState
    (render-state [_ state]
                  (dom/div #js {:className "game-status"}
                       (let [game-status (:game-status game)]
                         (case game-status
                           :not-created (not-created-component game)
                           :waiting-other-player-to-join (dom/h2 (centered-text) "Waiting other player to join")
                           :game-started (dom/h2 (centered-text) "Game started!")
                           :waiting-other-player-to-move (dom/h2 (centered-text) "Waiting for other player's move")
                           :waiting-player-to-move (dom/h2 (centered-text) "Make your move")
                           :won (game-won-component game)
                           :draw (draw-component game)
                           :other-player-disconnected (other-player-disconnected-component game)
                           ))))))

(defn game-view [game owner opts]
  "Om's view for the whole game."
  (reify
    om/IRenderState
    (render-state [_ state]
                  (let [view-opts {:opts opts}]
                    (dom/div #js {:className "game"}
                             (dom/h1 nil "Tic Tac Toe")
                             (om/build game-status-view game view-opts)
                             (om/build board-view game view-opts))))
    om/IWillMount
      (will-mount [_]
                  (moves-channel-handling game (:moves opts))
                  (set! (.-onmessage ws) (partial onmessage game))
                  (set! (.-onopen ws) (partial onopen game)))))

(om/root
  game-view
  app-state
  {:target (. js/document (getElementById "app"))
   :opts {:moves (chan)}})
