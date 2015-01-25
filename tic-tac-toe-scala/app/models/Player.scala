package models

/**
 * Created by mglvl on 24/01/15.
 */
sealed trait Player
case object PlayerX extends Player
case object PlayerO extends Player

object Player {
  def allPlayers = List(PlayerO,PlayerX)
}
