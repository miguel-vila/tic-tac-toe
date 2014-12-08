(ns tic-tac-toe.ui
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! >! close! timeout]]
            [tic-tac-toe.game :refer [create-game play]]
            [tic-tac-toe.utils :refer [display-if centered centered-text]]))

(enable-console-print!)

(def app-state (atom (create-game)))

(defn player-style [mark]
  (cond (not mark) nil
        (= mark "X") "playerX"
        (= mark "O") "playerO"))

(defn tile-style [tile]
  (if (get tile :mark)
    (str "marked-tile " (player-style (get tile :mark)))
    "tile"))

(defn tile-view [tile owner opts]
  (reify
    om/IRender
    (render [_]
            (dom/div #js {:className (tile-style tile)
                          :onClick (fn [_]
                                     (put! (:moves opts) {:x (:x @tile) :y (:y @tile)}))} (:mark tile)))))

(defn line-view [tiles owner opts]
  (reify
    om/IRender
    (render [_]
            (apply dom/div #js {:className "row"}
                   (mapv #(om/build tile-view % {:opts opts}) tiles)))))

(defn player-title-view [player owner opts]
  (reify
    om/IRender
    (render [_]
            (dom/div (centered-text (player-style player)) player))))

(defn plays-view [game owner opts]
  (reify
    om/IRender
    (render [_]
            (let [plays (:plays game)
                  draw? (:draw? game)]
              (if draw?
                (dom/h2 (centered-text) "Draw!")
                (dom/div #js {:style (display-if plays)}
                         (dom/h2 (centered-text) "Plays: ")
                         (om/build player-title-view (:plays game) {:opts opts})))))))

(defn winner-view [game owner opts]
  (reify
    om/IRender
    (render [_]
            (let [winner (:winner game)]
              (dom/div #js {:style (display-if winner)}
                       (dom/h2 (centered-text) "Winner: ")
                       (om/build player-title-view (:winner game) {:opts opts}))))))

(defn reset-button-view [game owner opts]
  (reify
    om/IRender
     (render [_]
             (dom/button #js {:className "centered" :onClick (fn [_] (put! (:game-state opts) :reset))} "Reset Game"))))

(defn board-view [game owner opts]
  (reify
    om/IRenderState
    (render-state [_ state]
                  (dom/div #js {:className "game"}
                           (dom/h1 nil "Tic Tac Toe")
                           (om/build plays-view game {:opts opts})
                           (om/build winner-view game {:opts opts})
                           (dom/div #js {:className "coso"}
                                    (apply dom/div (centered "board")
                                           (mapv #(om/build line-view % {:opts opts})
                                                 (first (partition 3 (:tiles game))))))
                           (om/build reset-button-view game {:opts opts})))
    om/IWillMount
      (will-mount [_]
                  (go-loop []
                           (let [_ (<! (:game-state opts))]
                             (om/transact! game (fn [_] (create-game))))
                           (recur))
                  (go-loop []
                           (let [{:keys [x y]} (<! (:moves opts))
                                 mark (:plays @game)]
                             (om/transact! game #(play mark % x y)))
                           (recur)))))

(om/root
  board-view
  app-state
  {:target (. js/document (getElementById "app"))
   :opts {:moves (chan)
          :game-state (chan)}})
