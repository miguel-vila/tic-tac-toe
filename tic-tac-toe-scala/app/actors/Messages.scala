package actors

import akka.actor.ActorRef
import models._

/**
 * Created by mglvl on 24/01/15.
 */
sealed trait UserSentMessage
case object StartGame extends UserSentMessage
case class PlayAtPosition(position: Position) extends UserSentMessage

object UserSentMessage {
  val StartGameCommand = "StartGame"
  val PlayAtPositionCommand = "PlayAtPosition"
}

sealed trait UserReceivedMessage
case object NoPlayersAvailable extends UserReceivedMessage
case class GameStarted(gameActor: ActorRef, youArePlayer: Player) extends UserReceivedMessage
object Draw extends UserReceivedMessage
case class GameWon(winner: Winner) extends UserReceivedMessage
case object Wait extends UserReceivedMessage
case object MakeYourMove extends UserReceivedMessage
case class PlayerPutAMarkInPosition(player: Player, position: Position) extends UserReceivedMessage

object UserReceivedMessage {
  val NoPlayersAvailableResponse = "NoPlayersAvailable"
  val GameStartedResponse = "GameStarted"
  val DrawResponse = "Draw"
  val GameWonResponse = "GameWon"
  val WaitResponse = "Wait"
  val MakeYourMoveResponse = "MakeYourMove"
  val PlayerPutAMarkInPositionResponse = "PlayerPutAMarkInPosition"
}