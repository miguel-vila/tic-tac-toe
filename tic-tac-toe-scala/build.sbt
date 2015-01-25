name := """tic-tac-toe-scala"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

val akkaV = "2.3.6"

libraryDependencies ++= Seq(
  cache,
  ws,
  "org.scalatest"       %%  "scalatest"                     % "2.2.1"   % "test",
  "com.typesafe.akka"   %%  "akka-testkit"                  % akkaV     % "test"
)
