(ns tic-tac-toe.game
  (:require [tic-tac-toe.utils :refer [map-map-values]]))

(def valid-players
  "Valid array of players."
  ["X" "O"])

(defn create-game []
  "Creates a new game selecting a random initial player from the valid players."
  {:tiles (->> (repeat 3 {})
               (repeat 3)
               (map-indexed (fn [i r] (map-indexed (fn [j m] (assoc m :x i :y j :blocked true)) r)))
               (mapv vec))
   :game-status :not-created})

(defn other-player [player]
  (if (= player "X")
    "O"
    "X"))

(defn put-mark [mark tiles x y]
  "Puts the mark in the position (x,y)."
  (assoc-in tiles [x y :mark] mark))

(defn put-player-mark [game x y]
  "Puts a player mark in the game tiles"
  (let [mark (:player-mark game)
        tiles (:tiles game)]
    (assoc game :tiles (put-mark mark tiles x y))))

(defn wait-player-to-join [game]
  (assoc game :game-status :waiting-other-player-to-join))

(defn game-started [game player-mark]
  (-> game
      (assoc :game-status :game-started)
      (assoc :player-mark player-mark)))

(defn waiting-other-player-move [game]
  (-> game
      (assoc :game-status :waiting-other-player-to-move)
      (set-blocked true)))

(defn player-turn [game]
  (-> game
      (assoc :game-status :waiting-player-to-move)
      (set-blocked false)))

(defn set-blocked [game blocked]
  (assoc game :tiles (mapv (fn [row] (mapv (fn [tile] (assoc tile :blocked blocked)) row)) (:tiles game))))

(defn other-player-put-a-mark [game position]
  (let [mark (other-player (:player-mark game))
        tiles (:tiles game)
        x (get position "x")
        y (get position "y")]
    (assoc game :tiles (put-mark mark tiles x y))))

(defn game-won [game winner-info]
  (let [winner (get winner-info "player")]
    (-> game
        (assoc :game-status :won)
        (assoc :winner winner)
        (set-blocked true))))

(defn game-draw [game]
  (-> game
      (assoc game :game-status :draw)
      (set-blocked true)))
