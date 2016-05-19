package models

import com.nicta.rng.Rng
import exceptions.IncorrectPlayerError

sealed trait Game {
  def board: Board
  def isDraw: Boolean
  def hasWinner: Boolean
  def isFinished: Boolean = isDraw || hasWinner
}

case class ActiveGame(board: Board, currentPlayer: Player) extends Game {

  def isDraw: Boolean = false

  def hasWinner: Boolean = false

  def otherPlayer = currentPlayer.other

  def putMark(position: Position): Game = {
    val mark = currentPlayer
    if(currentPlayer != mark) {
      throw IncorrectPlayerError
    } else {
      val nextBoard = board.putMark(mark, position)
      nextBoard.winner match {
        case Some(winner) => WonGame(nextBoard, winner)
        case None =>
          if(nextBoard.somebodyCanWin) {
            ActiveGame(nextBoard, otherPlayer )
          } else {
            DrawGame(nextBoard)
          }
      }
    }
  }

}

case class WonGame(board: Board, winner: Winner) extends Game {
  def isDraw: Boolean = false
  def hasWinner: Boolean = true
}

case class DrawGame(board: Board) extends Game {
  def isDraw: Boolean = true
  def hasWinner: Boolean = false
}

object Game {

  def newWithRandomPlayer(rng: Rng[Player] = randomPlayer()): ActiveGame = {
    (for {
      player <- rng.run
    } yield {
      ActiveGame(
        currentPlayer = player,
        board = createInitialBoard
      )
    }).unsafePerformIO() // Yeah!
  }


  def randomPlayer(): Rng[Player] = {
    for {
      boolean <- Rng.boolean
    } yield {
      if (boolean) {
        PlayerX
      } else {
        PlayerO
      }
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