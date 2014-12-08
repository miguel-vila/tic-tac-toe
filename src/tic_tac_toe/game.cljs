(ns tic-tac-toe.game
  (:require [tic-tac-toe.utils :refer [map-map-values]]))

(def valid-players ["X" "O"])

(defn create-game []
  {:tiles (->> (repeat 3 {})
               (repeat 3)
               (map-indexed (fn [i r] (map-indexed (fn [j m] (assoc m :x i :y j)) r)))
               (mapv vec))
   :plays (get valid-players (rand-int 2)) })

(defn somebody-can-win-in-arr? [arr]
  (let [marks (group-by :mark arr)
      marks-size (count marks)]
  (or
   (<= marks-size 1)
   (and
    (= marks-size 2)
    (= (count (filter #(contains? marks %) valid-players)) 1)))))

(defn same-mark? [arr]
  (first (filter (fn [mark] (if (every? #(= (:mark %) mark) arr) mark false)) valid-players)))

(defn get-mark [tiles x y]
  (get-in tiles [x y :mark]))

(defn get-NW-SE-diag [tiles]
  [(get-in tiles [0 0]) (get-in tiles [1 1]) (get-in tiles [2 2])])

(defn has-same-mark-in-NW-SE-diag? [tiles]
  (let [diag (get-NW-SE-diag tiles)
        mark (same-mark? diag)]
    (when mark
      {:winner mark :position {:d :NW-SE}})))

(defn somebody-can-win-in-NW-SE-diag? [tiles]
  (somebody-can-win-in-arr? (get-NW-SE-diag tiles)))

(defn get-NE-SW-diag [tiles]
  [(get-in tiles [0 2]) (get-in tiles [1 1]) (get-in tiles [2 0])])

(defn has-same-mark-in-NE-SW-diag? [tiles]
  (let [diag (get-NE-SW-diag tiles)
        mark (same-mark? diag)]
    (when mark
      {:winner mark :position {:d :NE-SW}})))

(defn somebody-can-win-in-NE-SW-diag? [tiles]
  (somebody-can-win-in-arr? (get-NE-SW-diag tiles)))

(defn get-tiles-in-d [d tiles]
  (group-by d (apply concat tiles)))

(defn has-same-mark-in-d? [d tiles]
  (->> (get-tiles-in-d d tiles)
       (map-map-values same-mark?)
       (reduce-kv (fn [acc k v] (if v {:winner v :position {:d d :i k}} acc)) nil)))

(defn somebody-can-win-in-d? [d tiles]
  (->> (get-tiles-in-d d tiles)
       (vals)
       (map somebody-can-win-in-arr?)
       (some identity)))

(def there-is-marked-row? (partial has-same-mark-in-d? :x))
(def somebody-can-win-in-the-rows? (partial somebody-can-win-in-d? :x))

(def there-is-marked-column? (partial has-same-mark-in-d? :y))
(def somebody-can-win-in-the-columns? (partial somebody-can-win-in-d? :y))

(def somebody-wins?
  (some-fn there-is-marked-row?
           there-is-marked-column?
           has-same-mark-in-NW-SE-diag?
           has-same-mark-in-NE-SW-diag?))

(def somebody-can-win-in-the-future?
  (some-fn somebody-can-win-in-the-rows?
           somebody-can-win-in-the-columns?
           somebody-can-win-in-NW-SE-diag?
           somebody-can-win-in-NE-SW-diag?))

(defn next-player [game]
  (if (= (:plays game) "X")
    "O"
    "X"))

(defn put-mark [mark tiles x y]
  (if (get-in tiles [x y :mark])
    tiles
    (assoc-in tiles [x y :mark] mark)))

(defn play [mark game x y]
  (if (get-mark (:tiles game) x y)
    game
    (let [new-tiles (put-mark mark (get game :tiles) x y)
          {:keys [winner position]} (somebody-wins? new-tiles)]
      (cond
       winner {:winner winner :winner-position position :tiles new-tiles}
       (somebody-can-win-in-the-future? new-tiles) {:plays (next-player game) :tiles new-tiles}
       :else {:draw? true :tiles new-tiles}))))
