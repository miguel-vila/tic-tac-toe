package actors

import akka.actor.{Props, ActorRef, Actor}
import com.nicta.rng.Rng
import models._

class PVPGameActor(playerX: ActorRef, playerO: ActorRef, rng: Rng[Player] = Game.randomPlayer()) extends Actor {
  import context._

  def broadcast(message: Any): Unit = {
    playerX ! message
    playerO ! message
  }

  def getActor(player: Player): ActorRef = player match {
    case PlayerX => playerX
    case PlayerO => playerO
  }

  def sendGameStartedMessages(game: ActiveGame): Unit = {
    playerX ! GameStarted(self, PlayerX, game.currentPlayer)
    playerO ! GameStarted(self, PlayerO, game.currentPlayer)
  }

  def receive = {
    val game = Game.newWithRandomPlayer(rng)
    sendGameStartedMessages(game)
    playing(game)
  }

  def playing(game: ActiveGame): Receive = {
    case PlayAtPosition(position) if sender() == getActor(game.currentPlayer) =>
      val otherPlayer = game.otherPlayer
      getActor(otherPlayer) ! PlayerPutAMarkInPosition(game.currentPlayer, position)
      val newGame = game.putMark(position)
      newGame match {
        case activeGame: ActiveGame =>
          become(playing(activeGame))
        case drawGame: DrawGame =>
          broadcast(Draw)
          context.stop(self)
        case wonGame @ WonGame(_,winner) =>
          broadcast(GameWon(winner))
          context.stop(self)
      }
    case userDisconnected @ UserDisconnected(disconnectedActor) =>
      val currentPlayerActor = getActor(game.currentPlayer)
      val waitingPlayerActor = getActor(game.otherPlayer)
      if(currentPlayerActor == disconnectedActor) {
        waitingPlayerActor ! userDisconnected
      }
      if (waitingPlayerActor == disconnectedActor) {
        currentPlayerActor ! userDisconnected
      }
  }

}

object PVPGameActor {
  def props(playerX: ActorRef, playerO: ActorRef, rng: Rng[Player] = Game.randomPlayer()) = Props(new PVPGameActor(playerX,playerO,rng))
}