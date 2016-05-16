package models

import scala.util.Random

class RandomMovementBot(override val player: Player) extends Bot(player) {

  def makeMovement(game: ActiveGame): Position = {
    val freePositions = game.board.freePositions
    val rand = new Random()
    freePositions( rand.nextInt(freePositions.length) )
  }

}
