(defproject tic-tac-toe "0.1.0-SNAPSHOT"
  :description "A simple tic-tac-toe game"
  :url "http://github.com/miguel-vila/tic-tac-toe-om"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.7.3"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [
    {
      :id "dev"
      :source-paths ["src"]
      :compiler {
        :output-to "tic_tac_toe.js"
        :output-dir "out"
        :optimizations :none
        :source-map true
      }
    }
    {
      :id "release"
      :source-paths ["src"]
      :compiler {
        :output-to "../public/tic_tac_toe.js"
        :output-dir "../public/out"
        :optimizations :advanced
        ;;:preamble ["react/react.min.js"]
        :externs ["externs/react.js"]
      }
    }]})
