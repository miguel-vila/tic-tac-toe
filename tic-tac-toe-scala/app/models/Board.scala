package models

import exceptions.CellAlreadyMarkedError

/**
 * Created by mglvl on 24/01/15.
 */
case class Board(cells: Vector[Vector[Cell]]) extends AnyVal {

  def putMark(mark: Player, position: Position): Board = {
    val Position(x,y) = position
    if(cells(x)(y).mark.isDefined) {
      throw new CellAlreadyMarkedError(position)
    } else {
      val newCell = Cell(Some(mark),position)
      copy(cells.updated(x, cells(x).updated(y, newCell)))
    }
  }

  private def upperLeftBottomRightDiagonal: Vector[Cell] = {
    Vector(
      cells(0)(0),
      cells(1)(1),
      cells(2)(2)
    )
  }

  private def upperRightBottomLeftDiagonal: Vector[Cell] = {
    Vector(
      cells(0)(2),
      cells(1)(1),
      cells(2)(0)
    )
  }

  private def columns: Vector[Vector[Cell]] = cells.transpose

  private[models] def rowWinner: Option[Winner] = {
    (for {
      (row, rowNumber) <- cells.toStream.zipWithIndex
    } yield Cell.sameMark(row).map(player => Winner(player, RowLine(rowNumber)))).flatten.headOption
  }

  private[models] def somebodyCanWinInTheRows: Boolean = {
    (for {
      row <- cells.toStream
    } yield Cell.somebodyCanWin(row)).filter(identity).headOption.getOrElse(false)
  }

  private[models] def columnWinner: Option[Winner] = {
    (for {
      (column, columnNumber) <- columns.toStream.zipWithIndex
    } yield Cell.sameMark(column).map(player => Winner(player, ColumnLine(columnNumber)))).flatten.headOption
  }

  private[models] def somebodyCanWinInTheColumns: Boolean = {
    (for {
      column <- columns.toStream
    } yield Cell.somebodyCanWin(column)).filter(identity).headOption.getOrElse(false)
  }

  private[models] def upperLeftBottomRightWinner: Option[Winner] = {
    for {
      player <- Cell.sameMark(upperLeftBottomRightDiagonal)
    } yield Winner(player, NW_SE_DiagonalLine)
  }

  private[models] def somebodyCanWinInTheUpperLeftBottomRightDiagonal: Boolean =
    Cell.somebodyCanWin(upperLeftBottomRightDiagonal)

  private[models] def upperRightBottomLeftWinner: Option[Winner] = {
    for {
      player <- Cell.sameMark(upperRightBottomLeftDiagonal)
    } yield Winner(player, NE_SW_DiagonalLine)
  }

  private[models] def somebodyCanWinInTheUpperRightBottomLeftDiagonal: Boolean =
    Cell.somebodyCanWin(upperRightBottomLeftDiagonal)

  def winner: Option[Winner] =
    rowWinner orElse
    columnWinner orElse
    upperLeftBottomRightWinner orElse
    upperRightBottomLeftWinner

  def somebodyCanWin: Boolean =
    somebodyCanWinInTheRows ||
    somebodyCanWinInTheColumns ||
    somebodyCanWinInTheUpperLeftBottomRightDiagonal ||
    somebodyCanWinInTheUpperRightBottomLeftDiagonal

  def freePositions: Vector[Position] = {
    for {
      row <- cells
      cell <- row if cell.mark == None
    } yield cell.position
  }

}