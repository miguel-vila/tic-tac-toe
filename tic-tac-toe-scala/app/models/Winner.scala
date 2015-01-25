package models

/**
 * Created by mglvl on 25/01/15.
 */
case class Winner(player: Player, winnerLine: WinnerLine)

sealed trait WinnerLine
case class RowLine(x: Int) extends WinnerLine
case class ColumnLine(y: Int) extends WinnerLine
case object NE_SW_DiagonalLine extends WinnerLine
case object NW_SE_DiagonalLine extends WinnerLine