package actors

import akka.actor.ActorRef
import models.{PlayerO, PlayerX, Player}

/**
 * Created by mglvl on 24/01/15.
 */
case object StartGame
case object NoPlayersAvailable
case class AvailableGame(gameActor: ActorRef)
case class PlayAtPosition(x: Int, y: Int)
class YouArePlayer(player: Player)
case object YouArePlayerX extends YouArePlayer(PlayerX)
case object YouArePlayerO extends YouArePlayer(PlayerO)
case class GameStarted(gameActor: ActorRef)