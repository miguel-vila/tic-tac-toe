package adapters

import models.Position
import play.api.libs.json._

/**
 * Created by mglvl on 25/01/15.
 */
object PositionAdapter {

  def fromJSON(json: JsValue): Position = {
    Position((json \ "x").as[Int], (json \ "y").as[Int])
  }

  def toJson(position: Position): JsValue = {
    Json.obj("x" -> position.x, "y" -> position.y)
  }

}
