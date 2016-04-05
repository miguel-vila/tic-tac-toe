package adapters

import actors._
import play.api.libs.json._

/**
 * Created by mglvl on 25/01/15.
 */
object UserReceivedMessageAdapter {

  val responseType = "responseType"

  def toJson(message: UserReceivedMessage): JsValue = {
    message match {
      case NoPlayersAvailable =>
        Json.obj(responseType -> UserReceivedMessage.NoPlayersAvailableResponse)
      case GameStarted(_, youArePlayer, currentPlayer) =>
        Json.obj(
          responseType -> UserReceivedMessage.GameStartedResponse,
          "youArePlayer" -> youArePlayer.toString,
          "currentPlayer" -> currentPlayer.toString
        )
      case Draw =>
        Json.obj(responseType -> UserReceivedMessage.DrawResponse)
      case GameWon(winner) =>
        Json.obj(
          responseType -> UserReceivedMessage.GameWonResponse,
          "winner" -> WinnerAdapter.toJson(winner))
      case PlayerPutAMarkInPosition(player, position) =>
        Json.obj(
          responseType -> UserReceivedMessage.PlayerPutAMarkInPositionResponse,
          "player" -> player.toString,
          "position" -> PositionAdapter.toJson(position)
        )
      case UserDisconnected(_) =>
        Json.obj(
          responseType -> UserReceivedMessage.UserDisconnectedResponse
        )
    }
  }

}
