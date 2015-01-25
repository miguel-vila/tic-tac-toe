package models

import scala.util.Random

case class Game private(
                 nextPlayer: Option[Player],
                 private val board: Board,
                 winner: Option[Player],
                 draw: Boolean) {

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
    val draw = !nextBoard.somebodyCanWin
    Game(nextPlayer, nextBoard, winner, draw)
  }

  def putX: Position => Game = putMark(PlayerX)

  def putO: Position => Game = putMark(PlayerO)

}

object Game {

  def apply(): Game = {
    Game(
      nextPlayer = Some(randomPlayer()),
      board = createInitialBoard,
      winner = None,
      draw = false
    )
  }

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