package actors

import akka.actor.{Props, ActorRef, Actor}
import com.nicta.rng.Rng
import models._
import scala.collection.mutable

/**
 * Created by mglvl on 24/01/15.
 */
class GameActor(playerX: ActorRef, playerO: ActorRef, rng: Rng[Player] = Game.randomPlayer()) extends Actor {
  import context._

  def broadcast(message: Any): Unit = {
    playerX ! message
    playerO ! message
  }

  def getActor(player: Player): ActorRef = player match {
    case PlayerX => playerX
    case PlayerO => playerO
  }

  def sendTurnMessages(game: ActiveGame): Unit = {
    getActor(game.currentPlayer) ! MakeYourMove
    getActor(game.otherPlayer) ! Wait
  }

  def receive = {
    val game = Game.newWithRandomPlayer(rng)
    sendTurnMessages(game)
    playing(game)
  }

  def playing(game: ActiveGame): Receive = {
    case PlayAtPosition(position) if sender() == getActor(game.currentPlayer) =>
      val otherPlayer = game.otherPlayer
      getActor(otherPlayer) ! PlayerPutAMarkInPosition(game.currentPlayer, position)
      val newGame = game.putMark(game.currentPlayer, position)
      newGame match {
        case activeGame: ActiveGame =>
          sendTurnMessages(activeGame)
          become(playing(activeGame))
        case drawGame: DrawGame =>
          broadcast(Draw)
          context.stop(self)
        case wonGame @ WonGame(_,winner) =>
          broadcast(GameWon(winner))
          context.stop(self)
      }
  }

}

object GameActor {
  def props(playerX: ActorRef, playerO: ActorRef, rng: Rng[Player] = Game.randomPlayer()) = Props(new GameActor(playerX,playerO,rng))
}