package actors

import akka.actor.{Props, ActorRef, Actor}
import models._
import scala.collection.mutable

/**
 * Created by mglvl on 24/01/15.
 */
class GameActor(player1: ActorRef, player2: ActorRef) extends Actor {
  import context._

  val playerX = player1
  val playerO = player2
  playerX ! YouArePlayerX
  playerO ! YouArePlayerO
  
  def broadcast(message: Any): Unit = {
    playerX ! message
    playerO ! message
  }

  def getActor(player: Player): ActorRef = player match {
    case PlayerX => playerX
    case PlayerO => playerO
  }

  def receive = playing(Game())

  def playing(game: ActiveGame): Receive = {
    case PlayAtPosition(position) =>
      val otherPlayer = game.otherPlayer
      getActor(otherPlayer) ! PlayerPutAMarkInPosition(otherPlayer, position)
      val newGame = game.putMark(game.currentPlayer, position)
      newGame match {
        case activeGame: ActiveGame =>
          getActor(activeGame.currentPlayer) ! MakeYourMove
          getActor(activeGame.otherPlayer) ! Wait
          become(playing(activeGame))
        case drawGame: DrawGame =>
          broadcast(Draw)
          become(draw(drawGame))
        case wonGame @ WonGame(_,winner) =>
          broadcast(GameWon(winner))
          become(gameWon(wonGame))
      }
  }

  def draw(drawGame: DrawGame): Receive = {
    case _ =>
  }

  def gameWon(wonGame: WonGame): Receive = {
    case _ =>
  }


}

object GameActor {
  def props(player1: ActorRef, player2: ActorRef) = Props(new GameActor(player1,player2))
}