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

(defn ready-to-join [game]
  (assoc game :ready-to-join true))

(defn set-blocked [game blocked]
  (assoc game :tiles (mapv (fn [row] (mapv (fn [tile] (assoc tile :blocked blocked)) row)) (:tiles game))))

(defn waiting-other-player-move [game]
  (-> game
      (assoc :game-status :waiting-other-player-to-move)
      (set-blocked true)))

(defn put-player-mark [game x y]
  "Puts a player mark in the game tiles"
  (let [mark (:player-mark game)
        tiles (:tiles game)]
    (-> game
        (assoc :tiles (put-mark mark tiles x y))
        waiting-other-player-move)))

(defn wait-player-to-join [game]
  (assoc game :game-status :waiting-other-player-to-join))

(defn player-turn [game]
  (-> game
      (assoc :game-status :waiting-player-to-move)
      (set-blocked false)))

(defn game-started [game player-mark who-starts]
  (let [updated (-> game
                    (assoc :player-mark player-mark)
                    (assoc :current-player who-starts))]
    (if (= player-mark who-starts)
      (player-turn updated)
      (waiting-other-player-move updated))))

(defn other-player-put-a-mark [game position]
  (let [mark (other-player (:player-mark game))
        tiles (:tiles game)
        x (get position "x")
        y (get position "y")]
    (-> game
        (assoc :tiles (put-mark mark tiles x y))
        player-turn)))

(defn game-won [game winner-info]
  (let [winner (get winner-info "player")]
    (-> game
        (assoc :game-status :won)
        (assoc :winner winner)
        (set-blocked true))))

(defn game-draw [game]
  (-> game
      (assoc :game-status :draw)
      (set-blocked true)))

(defn other-player-disconnected [game]
  (-> game
      (assoc :game-status :other-player-disconnected)
      (set-blocked true)))
