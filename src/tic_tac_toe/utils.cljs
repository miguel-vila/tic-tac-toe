(ns tic-tac-toe.utils)

(defn tile-to-str [tile]
  (let [mark (:mark tile)]
    (if mark
      mark
      "_")))

(defn row-to-str [row]
  (apply str (map tile-to-str row)))

(defn pretty-print-tiles [tiles]
  (apply str (interpose "\n" (map row-to-str tiles))))

(defn map-map-values [f m]
  (reduce (fn [m2 [k v]] (assoc m2 k (f v))) {} m))

(defn display-if [display]
  (if display
    #js {}
    #js {:display "none"}))

(defn with-class [default-class-name]
  "Curried function to return a js object with a default class name and (optionally) other class name"
  (fn
    ([] #js {:className default-class-name})
    ([class-name] #js {:className (apply str class-name " " default-class-name)})))

(def centered (with-class "centered"))

(def centered-text (with-class "centered-text"))
