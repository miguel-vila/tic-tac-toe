(defproject tic-tac-toe "0.1.0-SNAPSHOT"
  :description "A simple tic-tac-toe game"
  :url "http://github.com/miguel-vila/tic-tac-toe-om"

  :dependencies [[org.clojure/clojure "1.7.0-alpha4"]
                 [org.clojure/clojurescript "0.0-2496"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.7.3"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [
    {
       :id "test"
       :source-paths ["src" "test"]
       :notify-command ["phantomjs" "phantom/unit-test.js" "phantom/unit-test.html"]
                        :compiler {:optimizations :whitespace
                                   :pretty-print true
                                   :output-to "target/testable.js"}
    }
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
        :output-to "../tic-tac-toe-scala/public/tic_tac_toe.js"
        :optimizations :advanced
        ;;:preamble ["react/react.min.js"]
        :externs ["externs/React.js"]
      }
    }]
    :test-commands {"test" ["phantomjs" "phantom/unit-test.js" "phantom/unit-test.html"]}})
