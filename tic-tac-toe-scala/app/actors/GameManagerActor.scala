package actors

import akka.actor.{Props, ActorRef, Actor}
import models.{PlayerO, PlayerX}

/**
 * Created by mglvl on 24/01/15.
 */
class GameManagerActor extends Actor {
  import context._

  var gameId = 1
  var waitingPlayer: Option[ActorRef] = None

  def receive = {
    case StartGame =>
      val originalSender = sender()
      waitingPlayer match {
        case Some(_waitingPlayer) =>
          val player1 = originalSender
          val player2 = _waitingPlayer
          val gameActor = system.actorOf(GameActor.props(player1, player2), s"game-$gameId")
          player1 ! GameStarted(gameActor, PlayerX)
          player2 ! GameStarted(gameActor, PlayerO)
          gameId += 1
          waitingPlayer = None
        case None =>
          waitingPlayer = Some(originalSender)
          originalSender ! NoPlayersAvailable
      }
    case RemovePlayerIfWasWaiting(actorRef) if waitingPlayer.exists(_ == actorRef) =>
      waitingPlayer = None
  }

}

object GameManagerActor{
  def props(): Props = Props(new GameManagerActor)
}