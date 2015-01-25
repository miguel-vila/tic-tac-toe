package actors

import akka.actor.{Props, ActorRef, Actor}
import models.{PlayerX, Game$, Player}
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

  var game = Game()

  def playing(nextPlayer: ActorRef, waitingPlayer: ActorRef): Receive = {
    case _ =>
  }

  def receive = {
    val nextPlayer = if(game.nextPlayer.get == PlayerX) playerX else playerO
    val waitingPlayer = if(game.otherPlayer.get == PlayerX) playerX else playerO
    playing(nextPlayer, waitingPlayer)
  }



}

object GameActor {
  def props(player1: ActorRef, player2: ActorRef) = Props(new GameActor(player1,player2))
}