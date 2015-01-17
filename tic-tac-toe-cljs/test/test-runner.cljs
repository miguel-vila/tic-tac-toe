(ns test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [tic-tac-toe.game-test]))


(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
        (run-tests
          'tic-tac-toe.game-test))
    0
    1))
