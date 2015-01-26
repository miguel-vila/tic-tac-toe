package adapters

import models.Winner
import play.api.libs.json._

/**
 * Created by mglvl on 25/01/15.
 */
object WinnerAdapter {

  def toJson(winner: Winner): JsValue = {
    val lineJson = WinnerLineAdapter.toJson(winner.winnerLine)
    Json.obj("player" -> winner.player.toString, "winnerLine" -> lineJson)
  }
  
}
