(ns tic-tac-toe.messages)

(def start-a-game-command
  "StartGame")

(def start-a-game-msg
  (.stringify js/JSON (clj->js {:command start-a-game-command})))

(def play-at-position-command
  "PlayAtPosition")

(defn put-a-mark-msg [x y]
  (.stringify js/JSON (clj->js {:command play-at-position-command
            :position {:x x :y y}})))
