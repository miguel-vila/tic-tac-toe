(ns tic-tac-toe.test
  (:require [tic-tac-toe.game :as game]
            [tic-tac-toe.utils :refer [map-map-values]]))

;;"Tests" (really just a bunch of function calls which I use in the repl to test things)"
;;To be migrated to a real testing suite.

(def g0 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "X"}],
                      [{:x 1 :y 0},{:x 1 :y 1 :mark "X"},{:x 1 :y 2 :mark "X"}],
                      [{:x 2 :y 0 :mark "X"},{:x 2 :y 1 :mark "O"},{:x 2 :y 2 :mark "O"}]]
         :plays "X"})

(def g1 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "X"}],
                      [{:x 1 :y 0 :mark "O"},{:x 1 :y 1 :mark "X"},{:x 1 :y 2 :mark "X"}],
                      [{:x 2 :y 0 :mark "X"},{:x 2 :y 1 :mark "O"},{:x 2 :y 2 :mark "O"}]]
         :plays "X"})

(def g2 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2}],
                      [{:x 1 :y 0 :mark "X"},{:x 1 :y 1 :mark "O"},{:x 1 :y 2}]
                      [{:x 2 :y 0 :mark "X"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2}]]})

(def g3 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2}],
                      [{:x 1 :y 0 :mark "X"},{:x 1 :y 1 :mark "X"},{:x 1 :y 2}]
                      [{:x 2 :y 0 :mark "O"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2 :mark "X"}]]})

(def g4 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "O"}],
                      [{:x 1 :y 0 :mark "X"},{:x 1 :y 1 :mark "O"},{:x 1 :y 2}]
                      [{:x 2 :y 0 :mark "O"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2}]]})

(def g5 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "X"},{:x 0 :y 2}],
                      [{:x 1 :y 0 :mark "X"},{:x 1 :y 1 :mark "O"},{:x 1 :y 2}]
                      [{:x 2 :y 0 :mark "O"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2}]]})

(def g6 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "X"}],
                      [{:x 1 :y 0 :mark "X"},{:x 1 :y 1 :mark "O"},{:x 1 :y 2 :mark "X"}]
                      [{:x 2 :y 0 :mark "O"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2 :mark "O"}]]})

(def g7 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "X"}],
                      [{:x 1 :y 0 :mark "X"},{:x 1 :y 1 :mark "O"},{:x 1 :y 2}]
                      [{:x 2 :y 0},{:x 2 :y 1},{:x 2 :y 2}]]})

(def g8 {:tiles [
                      [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "X"},{:x 0 :y 2 :mark "O"}],
                      [{:x 1 :y 0 :mark "O"},{:x 1 :y 1 :mark "X"},{:x 1 :y 2 :mark "O"}]
                      [{:x 2 :y 0 :mark "X"},{:x 2 :y 1},{:x 2 :y 2 :mark "O"}]]})

(def tiles (:tiles g3))
(game/same-mark? [{:x 0 :y 0 :mark "O"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "O"}])
(game/has-same-mark-in-NE-SW-diag? (:tiles g2))
(game/somebody-wins? (:tiles g2))
(game/somebody-wins? (:tiles g3))
(game/somebody-wins? (:tiles g4))

(game/there-is-marked-row? (game/put-mark "X" (:tiles g0) 1 0))

(game/there-is-marked-column? (:tiles g2))

(game/there-is-marked-row? (:tiles g2))
(game/there-is-marked-column? (:tiles g2))


(game/play "X" g0 1 0)
(def gx (game/create-game))
(get gx :tiles)

(def gx0 (game/play "X" gx 0 0))

(def gx1 (game/play "O" gx0 0 1))

(def gx2 (game/play "X" gx1 1 1))

(def gx3 (game/play "O" gx2 0 2))

(def gx4 (game/play "X" gx3 2 2))

(def t6 (:tiles g6))
(def t7 (:tiles g7))
(game/somebody-can-win-in-arr? (get t6 0))
(game/somebody-can-win-in-the-rows? t6)
(game/somebody-can-win-in-the-future? (:tiles g6))
(game/somebody-can-win-in-the-rows? (:tiles g8))

(game/somebody-can-win-in-arr? (get-in g8 [:tiles 2]))

(game/somebody-can-win-in-arr? (get t7 2))
(game/somebody-can-win-in-arr? (get-in g5 [:tiles 0]))
