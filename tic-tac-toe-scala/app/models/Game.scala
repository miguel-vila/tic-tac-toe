package models

import scala.util.Random
import Game._

case class Game(
                          nextPlayer: Option[Player] = Some(randomPlayer()),
                          private val board: Board = createInitialBoard) {

  def otherPlayer: Option[Player] = nextPlayer map Game.otherPlayer
  
  def winner: Option[Player] = board.winner

}

object Game {

  def randomPlayer(): Player = {
    if(new Random().nextBoolean()) {
      PlayerX
    } else {
      PlayerO
    }
  }

  def otherPlayer(player: Player): Player = {
    if(player == PlayerX) {
      PlayerO
    } else {
      PlayerX
    }
  }

  def createInitialBoard: Board = {
    Board((0 to 2).toVector.map { x =>
      (0 to 2).toVector.map { y =>
        Cell(None, Position(x,y))
      }
    })
  }
}