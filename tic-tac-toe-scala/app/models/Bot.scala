package models

abstract class Bot(val player: Player) {

  def makeMovement(game: ActiveGame): Position

}