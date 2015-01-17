(ns tic-tac-toe.game
  (:require [tic-tac-toe.utils :refer [map-map-values]]))

(def valid-players
  "Valid array of players."
  ["X" "O"])

(defn create-game []
  "Creates a new game selecting a random initial player from the valid players."
  {:tiles (->> (repeat 3 {})
               (repeat 3)
               (map-indexed (fn [i r] (map-indexed (fn [j m] (assoc m :x i :y j)) r)))
               (mapv vec))
   :plays (get valid-players (rand-int 2)) })

(defn somebody-can-win-in-arr? [arr]
  "Returns true if the tile array can still be marked by a player and thus win.
  For example it would return true for a tile array thats marked like: [X X _] or [_ _ _] but false for [X O _]"
  (let [marks (group-by :mark arr)
      marks-size (count marks)]
  (or
   (<= marks-size 1)
   (and
    (= marks-size 2)
    (= (count (filter #(contains? marks %) valid-players)) 1)))))

(defn same-mark? [arr]
  "Returns the same mark/player all the elements in the tile array argument habe the same mark value or nil if otherwise."
  (first (filter (fn [mark] (if (every? #(= (:mark %) mark) arr) mark false)) valid-players)))

(defn get-mark [tiles x y]
  "Gets the mark/player at tile in position (x,y)"
  (get-in tiles [x y :mark]))

(defn get-NW-SE-diag [tiles]
  "Returns the NW-SE diagonal of tiles from the tiles square."
  [(get-in tiles [0 0]) (get-in tiles [1 1]) (get-in tiles [2 2])])

(defn has-same-mark-in-NW-SE-diag? [tiles]
  "Returns the position and the mark/player that fills the NW-SE diagonal of the tiles argument or nil if there is no such mark."
  (let [diag (get-NW-SE-diag tiles)
        mark (same-mark? diag)]
    (when mark
      {:winner mark :position {:d :NW-SE}})))

(defn somebody-can-win-in-NW-SE-diag? [tiles]
  "Returns the mark/player that can win by marking the whole NW-SE diagonal or nil if there is no such mark/player."
  (somebody-can-win-in-arr? (get-NW-SE-diag tiles)))

(defn get-NE-SW-diag [tiles]
  "Returns the NE-SW diagonal of tiles from the tiles square."
  [(get-in tiles [0 2]) (get-in tiles [1 1]) (get-in tiles [2 0])])

(defn has-same-mark-in-NE-SW-diag? [tiles]
  "Returns the position and the mark/player that fills the NE-SW diagonal of the tiles argument or nil if there is no such mark."
  (let [diag (get-NE-SW-diag tiles)
        mark (same-mark? diag)]
    (when mark
      {:winner mark :position {:d :NE-SW}})))

(defn somebody-can-win-in-NE-SW-diag? [tiles]
  "Returns the mark/player that can win by marking the whole NE-SW diagonal or nil if there is no such mark/player."
  (somebody-can-win-in-arr? (get-NE-SW-diag tiles)))

(defn get-tiles-in-d [d tiles]
  "Returns the tiles in the d dimension (where d can be :x or :y)."
  (group-by d (apply concat tiles)))

(defn has-same-mark-in-d? [d tiles]
  "Returns the position and the mark/player that fills some line at d dimension of nil if there is no such mark."
  (->> (get-tiles-in-d d tiles)
       (map-map-values same-mark?)
       (reduce-kv (fn [acc k v] (if v {:winner v :position {:d d :i k}} acc)) nil)))

(defn somebody-can-win-in-d? [d tiles]
  "Returns true if somebody can still make a winning move by filling some line in the d dimension or false otherwise."
  (->> (get-tiles-in-d d tiles)
       (vals)
       (map somebody-can-win-in-arr?)
       (some identity)))

(def there-is-marked-row?
  "Returns the position and the mark/player that has won by marking a whole row."
  (partial has-same-mark-in-d? :x))

(def somebody-can-win-in-the-rows?
  "Returns true if a player can still win by marking a whole row."
  (partial somebody-can-win-in-d? :x))

(def there-is-marked-column?
  "Returns the position and the mark/player that has won by marking a whole column."
  (partial has-same-mark-in-d? :y))

(def somebody-can-win-in-the-columns?
  "Returns true if a player can still win by marking a whole column."
  (partial somebody-can-win-in-d? :y))

(def somebody-wins?
  "Returns the position and the mark/player that wins the game or nil if there is no such mark/player."
  (some-fn there-is-marked-row?
           there-is-marked-column?
           has-same-mark-in-NW-SE-diag?
           has-same-mark-in-NE-SW-diag?))

(def somebody-can-win-in-the-future?
  "Returns true if some player can still win by filling a row/column/diagonal.
  This method may return false positives due to only taking into accounts dimensions independently."
  (some-fn somebody-can-win-in-the-rows?
           somebody-can-win-in-the-columns?
           somebody-can-win-in-NW-SE-diag?
           somebody-can-win-in-NE-SW-diag?))

(defn next-player [game]
  "Returns the next player of a game."
  (if (= (:plays game) "X")
    "O"
    "X"))

(defn put-mark [mark tiles x y]
  "Puts the mark in the position (x,y)."
  (if (get-in tiles [x y :mark])
    tiles
    (assoc-in tiles [x y :mark] mark)))

(defn play [mark game x y]
  "Given a game and a movement (indicated by a mark and a position (x,y)) returns the resulting game after that movement.
  It returns a map representing a game that consists of a :tile matrix, and either:
  - a :plays value indicating the next player
  - a :draw value set in true indicating that the game resulted in a draw
  - a :winner value indicating the winner player."
  (if (get-mark (:tiles game) x y)
    game
    (let [new-tiles (put-mark mark (get game :tiles) x y)
          {:keys [winner position]} (somebody-wins? new-tiles)]
      (cond
       winner {:winner winner :winner-position position :tiles new-tiles}
       (somebody-can-win-in-the-future? new-tiles) {:plays (next-player game) :tiles new-tiles}
       :else {:draw? true :tiles new-tiles}))))
