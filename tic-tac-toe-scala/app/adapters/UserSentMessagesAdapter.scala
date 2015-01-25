package adapters

import actors.{PlayAtPosition, StartGame, UserSentMessage}
import play.api.libs.json._

/**
 * Created by mglvl on 25/01/15.
 */
object UserSentMessagesAdapter {

  def fromJSON(json: JsValue): UserSentMessage = {
    (json \ "command").as[String] match {
      case UserSentMessage.StartGameCommand => StartGame
      case UserSentMessage.PlayAtPositionCommand =>
        val positionJson = (json \ "position").as[JsValue]
        PlayAtPosition(PositionAdapter.fromJSON(positionJson))
    }
  }

}
