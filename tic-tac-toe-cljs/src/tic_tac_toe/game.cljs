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
   :game-started? false
   :blocked true
   :active false})

(defn next-player [game]
  "Returns the next player of a game."
  (if (= (:plays game) "X")
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

(defn to-waiting-player-join [game]
  (-> game
       (assoc :waiting-other-player-to-join true)
       (assoc :game-started? true)))

(defn to-player-joined [game player-mark]
  (-> game
      (assoc :game-started? true)
      (assoc :waiting-other-player-to-join false)
      (assoc :player-mark player-mark)
      (assoc :waiting true)))

(defn to-waiting-other-player-move [game]
  (-> game
      (assoc :waiting-other-player-to-move true)
      (assoc :waiting-player-move false)
      (set-blocked true)))

(defn to-player-turn [game]
  (-> game
      (assoc :waiting-other-player-to-move false)
      (assoc :waiting-player-move true)
      (set-blocked false)))

(defn set-blocked [game blocked]
  (assoc game :tiles (mapv (fn [row] (mapv (fn [tile] (assoc tile :blocked blocked)) row)) (:tiles game))))
