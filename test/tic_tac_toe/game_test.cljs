(ns tic-tac-toe.game-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [tic-tac-toe.game :as game]))

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

(def t0 [
         [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "X"}],
         [{:x 1 :y 0 :mark "O"},{:x 1 :y 1 :mark "X"},{:x 1 :y 2}]
         [{:x 2 :y 0 :mark "X"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2 :mark "O"}]])

(def t1 [
         [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "O"}],
         [{:x 1 :y 0 :mark "O"},{:x 1 :y 1 :mark "O"},{:x 1 :y 2}]
         [{:x 2 :y 0 :mark "O"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2 :mark "O"}]])

(def t2 [
         [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "X"}],
         [{:x 1 :y 0 :mark "O"},{:x 1 :y 1 :mark "X"},{:x 1 :y 2}]
         [{:x 2 :y 0 :mark "O"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2 :mark "X"}]])

(def t3 [
         [{:x 0 :y 0 :mark "O"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "O"}],
         [{:x 1 :y 0 :mark "O"},{:x 1 :y 1 :mark "O"},{:x 1 :y 2}]
         [{:x 2 :y 0 :mark "X"},{:x 2 :y 1 :mark "X"},{:x 2 :y 2 :mark "O"}]])

(deftest base

  (testing "same-mark?"
    (is (= (game/same-mark? [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "X"},{:x 0 :y 2 :mark "X"}]) "X"))
    (is (= (game/same-mark? [{:x 0 :y 0},{:x 0 :y 1},{:x 0 :y 2}]) nil))
    (is (= (game/same-mark? [{:x 0 :y 0 :mark "X"},{:x 0 :y 1 :mark "X"},{:x 0 :y 2}]) nil))
    (is (= (game/same-mark? [{:x 0 :y 0 :mark "O"},{:x 0 :y 1 :mark "X"},{:x 0 :y 2 :mark "O"}]) nil))
    (is (= (game/same-mark? [{:x 0 :y 0 :mark "O"},{:x 0 :y 1 :mark "O"},{:x 0 :y 2 :mark "O"}]) "O")))

  (testing "has-same-mark-in-NE-SW-diag?"
    (is (= (game/has-same-mark-in-NE-SW-diag? (:tiles g2)) nil))
    (is (= (game/has-same-mark-in-NE-SW-diag? t0) {:winner "X" :position {:d :NE-SW}}))
    (is (= (game/has-same-mark-in-NE-SW-diag? t1) {:winner "O" :position {:d :NE-SW}})))

  (testing "has-same-mark-in-NW-SE-diag?"
    (is (= (game/has-same-mark-in-NW-SE-diag? (:tiles g2)) nil))
    (is (= (game/has-same-mark-in-NW-SE-diag? t2) {:winner "X" :position {:d :NW-SE}}))
    (is (= (game/has-same-mark-in-NW-SE-diag? t3) {:winner "O" :position {:d :NW-SE}}))))
