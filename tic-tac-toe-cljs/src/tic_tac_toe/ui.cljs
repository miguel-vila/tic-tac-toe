(ns tic-tac-toe.ui
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! >! close! timeout]]
            [tic-tac-toe.game :refer [create-game
                                      put-player-mark
                                      wait-player-to-join
                                      game-started
                                      waiting-other-player-move
                                      player-turn
                                      other-player-put-a-mark
                                      game-draw
                                      game-won]]
            [tic-tac-toe.utils :refer [centered centered-text]]
            [tic-tac-toe.messages :refer [start-a-game-msg put-a-mark-msg]]))

(enable-console-print!)

(def ws (js/WebSocket. "ws://localhost:9000/websockets/user"))

(def app-state
  "The app state which is a game map."
  (atom (create-game)))

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

(defn player-title-view [player owner opts]
  "Om's view for a player, which consists of just a div with text."
  (reify
    om/IRender
    (render [_]
            (dom/div (centered-text (player-className player)) player))))

(defn plays-view [game owner opts]
  "Om's view for the player that plays next."
  (reify
    om/IRender
    (render [_]
            (let [plays (:plays game)]
              (dom/div #js {}
                       (dom/h2 (centered-text) "Plays: ")
                       (om/build player-title-view (:plays game) {:opts opts}))))))

(defn draws-view [game owner opts]
  "Om's view for draws."
  (reify
    om/IRender
    (render [_]
            (dom/h2 (centered-text) "Draw!"))))

(defn winner-view [game owner opts]
  "Om's view for the game's winner."
  (reify
    om/IRender
    (render [_]
            (let [winner (:winner game)]
              (dom/div #js {}
                       (dom/h2 (centered-text) "Winner: ")
                       (om/build player-title-view (:winner game) {:opts opts}))))))

(defn reset-button-view [game owner opts]
  "Om's view for the reset game button."
  (reify
    om/IRender
     (render [_]
             (dom/button #js {:className "centered" :onClick (fn [_] (put! (:game-state opts) :reset))} "Reset Game"))))

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

(defn game-state-channel-handling [game game-state-chan]
  "Handles the :game-state channel"
  (go-loop []
           (let [_ (<! game-state-chan)]
             (om/transact! game (fn [_] (create-game))))
           (recur)))

(defn moves-channel-handling [game moves-chan]
  "Handles the moves channel"
  (go-loop []
           (let [{:keys [x y]} (<! moves-chan)
                 mark (:player-mark @game)
                 message (put-a-mark-msg x y)]
             (js/console.log (str " move -> " message))
             (.send ws message)
             (om/transact! game #(put-player-mark % x y)))
           (recur)))

(defn onmessage [game msg]
  (let [message (js->clj (.parse js/JSON (.-data msg)))
        responseType (get message "responseType")]
    (js/console.log "Got message from server:" (pr-str message))
    (js/console.log "ResponseType:" (pr-str responseType))
    (case responseType
      "NoPlayersAvailable" (om/transact! game wait-player-to-join)
      "GameStarted" (om/transact! game #(game-started % (get message "youArePlayer")))
      "Wait" (om/transact! game waiting-other-player-move)
      "MakeYourMove" (om/transact! game player-turn)
      "PlayerPutAMarkInPosition" (om/transact! game #(other-player-put-a-mark % (get message "position")))
      "GameWon" (om/transact! game #(game-won % (get message "winner")))
      "Draw" (om/transact! game #(game-draw %))
      )))

(defn game-won-component [game]
  (let [winner (:winner game)
        player-mark (:player-mark game)]
    (if (= winner player-mark)
      (dom/h2 nil "You Won!")
      (dom/h2 nil "You Lose!"))))

(defn game-status-view [game owner opts]
  ""
  (reify
    om/IRenderState
    (render-state [_ state]
                  (let [game-status (:game-status game)]
                    (case game-status
                      :not-created (dom/button #js {:className "centered" :onClick (fn [_] (.send ws start-a-game-msg))} "Join game")
                      :waiting-other-player-to-join (dom/h2 #js {:className "centered"} "Waiting other player to join")
                      :game-started (dom/h2 nil "Game started!")
                      :waiting-other-player-to-move (dom/h2 #js {:className "centered"} "Waiting for other player's move")
                      :waiting-player-to-move (dom/h2 nil "Make your move")
                      :won (game-won-component game)
                      :draw (dom/h2 nil "Draw!")
                     )))))

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
                  (game-state-channel-handling game (:game-state opts))
                  (moves-channel-handling game (:moves opts))
                  (set! (.-onmessage ws) (partial onmessage game)))))

(om/root
  game-view
  app-state
  {:target (. js/document (getElementById "app"))
   :opts {:moves (chan)
          :game-state (chan)}})
