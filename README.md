# Tic-tac-toe

![screenshot](https://raw.githubusercontent.com/miguel-vila/tic-tac-toe/master/tictactoe.gif)

[![Build Status](https://travis-ci.org/miguel-vila/tic-tac-toe.svg?branch=master)](https://travis-ci.org/miguel-vila/tic-tac-toe)

A simple multi player tic tac toe game built using ClojureScript's Om library for the frontend and Scala with Akka in the backend.

## How to build and run

### Scala backend

To run the scala server:

```bash
> cd tic-tac-toe-scala
> sbt run
```

Go to localhost:9000

### Clojurescript client

To put the compiled js file inside the public folder of the scala project:

```bash
> cd tic-tac-toe-cljs
> lein cljsbuild once release
```
