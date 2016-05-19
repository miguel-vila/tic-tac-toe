package models

case class Winner(player: Player, winnerLine: WinnerLine)

sealed trait WinnerLine
case class RowLine(x: Int) extends WinnerLine
case class ColumnLine(y: Int) extends WinnerLine
case object UpperRightToBottomLeftLine extends WinnerLine
case object UpperLeftToBottomRightLine extends WinnerLine