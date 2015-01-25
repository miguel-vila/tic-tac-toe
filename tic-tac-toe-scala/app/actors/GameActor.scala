package actors

import akka.actor.{Props, ActorRef, Actor}
import models._
import scala.collection.mutable

/**
 * Created by mglvl on 24/01/15.
 */
class GameActor(playerX: ActorRef, playerO: ActorRef) extends Actor {
  import context._

  def broadcast(message: Any): Unit = {
    playerX ! message
    playerO ! message
  }

  def getActor(player: Player): ActorRef = player match {
    case PlayerX => playerX
    case PlayerO => playerO
  }

  def receive = {
    val game = Game()
    sendTurnMessages(game)
    playing(game)
  }

  def sendTurnMessages(game: ActiveGame): Unit = {
    getActor(game.currentPlayer) ! MakeYourMove
    getActor(game.otherPlayer) ! Wait
  }

  def playing(game: ActiveGame): Receive = {
    case PlayAtPosition(position) =>
      val otherPlayer = game.otherPlayer
      getActor(otherPlayer) ! PlayerPutAMarkInPosition(otherPlayer, position)
      val newGame = game.putMark(game.currentPlayer, position)
      newGame match {
        case activeGame: ActiveGame =>
          sendTurnMessages(activeGame)
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
  def props(playerX: ActorRef, playerO: ActorRef) = Props(new GameActor(playerX,playerO))
}