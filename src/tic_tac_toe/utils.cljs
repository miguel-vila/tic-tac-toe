(ns tic-tac-toe.utils)

(defn map-map-values [f m]
  "Maps the values from a map."
  (reduce (fn [m2 [k v]] (assoc m2 k (f v))) {} m))

(defn display-if [display]
  "Returns a js object with a display attribute set to 'none' if the argument is false and an empty js object otherwise."
  (if display
    #js {}
    #js {:display "none"}))

(defn with-class [default-class-name]
  "Curried function to return a js object with a default class name and (optionally) other class name."
  (fn
    ([] #js {:className default-class-name})
    ([class-name] #js {:className (apply str class-name " " default-class-name)})))

(def centered
  "Returns a js object with a default class name of 'centered' and optionally other class name given by argument."
  (with-class "centered"))

(def centered-text
  "Returns a js object with a default class name of 'centered-text' and optionally other class name given by argument."
  (with-class "centered-text"))
