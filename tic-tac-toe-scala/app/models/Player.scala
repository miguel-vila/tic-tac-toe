package models

/**
 * Created by mglvl on 24/01/15.
 */
sealed trait Player {
  def other = this match {
    case PlayerO => PlayerX
    case PlayerX => PlayerO
  }
}
case object PlayerX extends Player {
  override def toString = "X"
}
case object PlayerO extends Player {
  override def toString = "O"
}

object Player {
  def allPlayers = List(PlayerO,PlayerX)
}
