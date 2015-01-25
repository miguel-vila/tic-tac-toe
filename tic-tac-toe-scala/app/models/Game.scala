package models

import scala.util.Random
import Game._

case class Game(
                 nextPlayer: Option[Player] = Some(randomPlayer()),
                 private val board: Board = createInitialBoard,
                 winner: Option[Player] = None) {

  def otherPlayer: Option[Player] = for {
    player <- nextPlayer
  } yield {
    if(player == PlayerX) {
      PlayerO
    } else {
      PlayerX
    }
  }

  private def putMark(mark: Player)(position: Position): Game = {
    val nextBoard = board.putMark(mark, position)
    val winner = nextBoard.winner
    val nextPlayer = if(winner.isDefined) None else otherPlayer
    Game(nextPlayer, nextBoard, winner)
  }

  def putX: Position => Game = putMark(PlayerX)

  def putO: Position => Game = putMark(PlayerO)

}

object Game {

  def randomPlayer(): Player = {
    if(new Random().nextBoolean()) {
      PlayerX
    } else {
      PlayerO
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