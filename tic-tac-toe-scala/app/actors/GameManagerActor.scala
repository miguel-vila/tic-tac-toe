package actors

import akka.actor.{Props, ActorRef, Actor}
import models.{PlayerO, PlayerX}
import scala.collection.mutable

/**
 * Created by mglvl on 24/01/15.
 */
class GameManagerActor extends Actor {
  import context._

  val waitingPlayers = new mutable.Queue[ActorRef]

  def receive = {
    case StartGame =>
      val originalSender = sender()
      if(waitingPlayers.size >= 1) {
        val player1 = originalSender
        val player2 = waitingPlayers.dequeue()
        val gameActor = system.actorOf(GameActor.props(player1, player2), "game")
        player1 ! GameStarted(gameActor, PlayerX)
        player2 ! GameStarted(gameActor, PlayerO)
      } else {
        if(!waitingPlayers.contains(originalSender)) {
          waitingPlayers enqueue originalSender
        }
        originalSender ! NoPlayersAvailable
      }
  }

}

object GameManagerActor{
  def props(): Props = Props(new GameManagerActor)
}