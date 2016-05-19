package adapters

import models._
import play.api.libs.json._

/**
 * Created by mglvl on 25/01/15.
 */
object WinnerLineAdapter {

  def toJson(winnerLine: WinnerLine): JsValue = {
    winnerLine match {
      case RowLine(row) => Json.obj("dimension" -> "x", "position" -> row)
      case ColumnLine(column) => Json.obj("dimension" -> "y", "position" -> column)
      case UpperLeftToBottomRightLine => Json.obj("dimension" -> "NW_SE_Diagonal")
      case UpperRightToBottomLeftLine => Json.obj("dimension" -> "NE_SW_Diagonal")
    }
  }

}
