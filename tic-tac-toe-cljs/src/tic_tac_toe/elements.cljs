(ns tic-tac-toe.elements
  (:require [tic-tac-toe.game :as gm]
            [tic-tac-toe.websocket :as ws]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [tic-tac-toe.utils :refer [centered centered-text]]
            [tic-tac-toe.messages :refer [start-a-game-msg put-a-mark-msg]]))

(defn reset-game [game]
  (om/transact! game (fn [_] (gm/create-game))))

(defn play-again-element [game]
  (let [on-click (fn [_] (ws/send start-a-game-msg)
                         (reset-game game))]
    (dom/button #js {:className "centered-text" :onClick on-click} "Play again")))

(defn game-won-element [game]
  (let [winner (:winner game)
        player-mark (:player-mark game)]
    (dom/div nil
             (if (= winner player-mark)
               (dom/h2 (centered-text) "You Won!")
               (dom/h2 (centered-text) "You Lose!"))
             (play-again-element game))))

(defn draw-element [game]
  (dom/div nil
           (dom/h2 (centered-text) "Draw!")
           (play-again-element game)))

(defn other-player-disconnected-element [game]
  (dom/div nil
           (dom/h2 (centered-text) "The other player left")
           (dom/button #js {:className "centered-text" :onClick (fn [_] (reset-game game))} "Play again")))

(defn not-created-element [game]
  (let [connecting (not (:ready-to-join game))]
    (dom/div nil
             (dom/button #js {:className "centered" :disabled connecting :onClick (fn [_] (ws/send start-a-game-msg))} "Join game")
             (when connecting
               (dom/h2 (centered-text) "Connecting...")))))
