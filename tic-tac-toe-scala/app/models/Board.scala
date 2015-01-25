package models

/**
 * Created by mglvl on 24/01/15.
 */
case class Board(cells: Vector[Vector[Cell]]) extends AnyVal{

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

  private def columnWinner: Option[Player] = {
    (for {
      column <- columns.toStream
    } yield Cell.sameMark(column)).flatten.headOption
  }

  private def NW_SE_DiagonalWinner: Option[Player] = Cell.sameMark(NW_SE_Diagonal)

  private def NE_SW_DiagonalWinner: Option[Player] = Cell.sameMark(NE_SW_Diagonal)

  def winner: Option[Player] = rowWinner orElse columnWinner orElse NW_SE_DiagonalWinner orElse NE_SW_DiagonalWinner

}
