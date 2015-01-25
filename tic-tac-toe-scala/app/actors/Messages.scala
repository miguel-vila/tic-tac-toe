package actors

import akka.actor.ActorRef
import models._

/**
 * Created by mglvl on 24/01/15.
 */
sealed trait UserSentMessages
case object StartGame extends UserSentMessages
case class PlayAtPosition(position: Position) extends UserSentMessages

sealed trait UserReceivedMessages
case object NoPlayersAvailable extends UserReceivedMessages
class YouArePlayer(player: Player) extends UserReceivedMessages
case object YouArePlayerX extends YouArePlayer(PlayerX)
case object YouArePlayerO extends YouArePlayer(PlayerO)
case class GameStarted(gameActor: ActorRef) extends UserReceivedMessages
object Draw extends UserReceivedMessages
case class GameWon(winner: Winner) extends UserReceivedMessages
case object Wait extends UserReceivedMessages
case object MakeYourMove extends UserReceivedMessages
case class PlayerPutAMarkInPosition(player: Player, position: Position) extends UserReceivedMessages