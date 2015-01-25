package models

import exceptions.CellAlreadyMarkedError

/**
 * Created by mglvl on 24/01/15.
 */
case class Board(cells: Vector[Vector[Cell]]) extends AnyVal{

  def putMark(mark: Player, position: Position): Board = {
    val x = position.x
    val y = position.y
    if(cells(x)(y).mark.isDefined) {
      throw new CellAlreadyMarkedError(position)
    } else {
      val newCell = Cell(Some(mark),position)
      copy(cells.updated(x, cells(x).updated(y, newCell)))
    }
  }

  private def NW_SE_Diagonal: Vector[Cell] = {
    Vector(
      cells(0)(0),
      cells(1)(1),
      cells(2)(2)
    )
  }

  private def NE_SW_Diagonal: Vector[Cell] = {
    Vector(
      cells(0)(2),
      cells(1)(1),
      cells(2)(0)
    )
  }

  private def columns: Vector[Vector[Cell]] = cells.transpose

  private def rowWinner: Option[Player] = {
    (for {
      row <- cells.toStream
    } yield Cell.sameMark(row)).flatten.headOption
  }

  private def somebodyCanWinInTheRows: Boolean = {
    (for {
      row <- cells.toStream
    } yield Cell.somebodyCanWin(row)).filter(identity).headOption.getOrElse(false)
  }

  private def columnWinner: Option[Player] = {
    (for {
      column <- columns.toStream
    } yield Cell.sameMark(column)).flatten.headOption
  }

  private def somebodyCanWinInTheColumns: Boolean = {
    (for {
      column <- columns.toStream
    } yield Cell.somebodyCanWin(column)).filter(identity).headOption.getOrElse(false)
  }

  private def NW_SE_DiagonalWinner: Option[Player] = Cell.sameMark(NW_SE_Diagonal)

  private def somebodyCanWinInTheNW_SE_Diagonal: Boolean = Cell.somebodyCanWin(NW_SE_Diagonal)

  private def NE_SW_DiagonalWinner: Option[Player] = Cell.sameMark(NE_SW_Diagonal)

  private def somebodyCanWinInTheNE_SW_Diagonal: Boolean = Cell.somebodyCanWin(NE_SW_Diagonal)

  def winner: Option[Player] = rowWinner orElse columnWinner orElse NW_SE_DiagonalWinner orElse NE_SW_DiagonalWinner

  def somebodyCanWin: Boolean = somebodyCanWinInTheRows || somebodyCanWinInTheColumns || somebodyCanWinInTheNW_SE_Diagonal || somebodyCanWinInTheNE_SW_Diagonal

}