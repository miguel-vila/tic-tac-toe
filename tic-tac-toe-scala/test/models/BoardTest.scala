package models

import org.scalatest.{WordSpecLike, Matchers}

/**
 * Created by mglvl on 25/01/15.
 */
class BoardTest extends Matchers with WordSpecLike {

  "Board" should {
    "Identificar el ganador, si lo hay, en las filas (1)" in {
      val board = Board(
        Vector(
          Vector(
            Cell(Some(PlayerO),Position(0,0)),
            Cell(Some(PlayerX),Position(0,1)),
            Cell(Some(PlayerO),Position(0,2))
          ),
          Vector(
            Cell(None,Position(1,0)),
            Cell(None,Position(1,1)),
            Cell(None,Position(1,2))
          ),
          Vector(
            Cell(Some(PlayerO),Position(2,0)),
            Cell(None,Position(2,1)),
            Cell(Some(PlayerO),Position(2,2))
          )
        )
      )
      board.rowWinner should equal (None)
    }
    "Identificar el ganador, si lo hay, en las filas (2)" in {
      val board = Board(
        Vector(
          Vector(
            Cell(Some(PlayerO),Position(0,0)),
            Cell(Some(PlayerO),Position(0,1)),
            Cell(Some(PlayerO),Position(0,2))
          ),
          Vector(
            Cell(None,Position(1,0)),
            Cell(None,Position(1,1)),
            Cell(None,Position(1,2))
          ),
          Vector(
            Cell(Some(PlayerO),Position(2,0)),
            Cell(None,Position(2,1)),
            Cell(Some(PlayerO),Position(2,2))
          )
        )
      )
      board.rowWinner should equal (Some(Winner(PlayerO,RowLine(0))))
    }
    "Identificar el ganador, si lo hay, en las filas (3)" in {
      val board = Board(
        Vector(
          Vector(
            Cell(Some(PlayerO),Position(0,0)),
            Cell(Some(PlayerX),Position(0,1)),
            Cell(Some(PlayerO),Position(0,2))
          ),
          Vector(
            Cell(None,Position(1,0)),
            Cell(None,Position(1,1)),
            Cell(None,Position(1,2))
          ),
          Vector(
            Cell(Some(PlayerX),Position(2,0)),
            Cell(Some(PlayerX),Position(2,1)),
            Cell(Some(PlayerX),Position(2,2))
          )
        )
      )
      board.rowWinner should equal (Some(Winner(PlayerX,RowLine(2))))
    }

    "Identificar el ganador, si lo hay, en las columnas (1)" in {
      val board = Board(
        Vector(
          Vector(
            Cell(Some(PlayerO),Position(0,0)),
            Cell(Some(PlayerX),Position(0,1)),
            Cell(Some(PlayerO),Position(0,2))
          ),
          Vector(
            Cell(None,Position(1,0)),
            Cell(None,Position(1,1)),
            Cell(None,Position(1,2))
          ),
          Vector(
            Cell(Some(PlayerX),Position(2,0)),
            Cell(Some(PlayerO),Position(2,1)),
            Cell(Some(PlayerX),Position(2,2))
          )
        )
      )
      board.columnWinner should equal (None)
    }

    "Identificar el ganador, si lo hay, en las columnas (2)" in {
      val board = Board(
        Vector(
          Vector(
            Cell(Some(PlayerO),Position(0,0)),
            Cell(Some(PlayerX),Position(0,1)),
            Cell(Some(PlayerO),Position(0,2))
          ),
          Vector(
            Cell(Some(PlayerO),Position(1,0)),
            Cell(None,Position(1,1)),
            Cell(None,Position(1,2))
          ),
          Vector(
            Cell(Some(PlayerO),Position(2,0)),
            Cell(Some(PlayerO),Position(2,1)),
            Cell(Some(PlayerX),Position(2,2))
          )
        )
      )
      board.columnWinner should equal (Some(Winner(PlayerO,ColumnLine(0))))
    }

    "Identificar el ganador, si lo hay, en las columnas (3)" in {
      val board = Board(
        Vector(
          Vector(
            Cell(Some(PlayerX),Position(0,0)),
            Cell(Some(PlayerO),Position(0,1)),
            Cell(Some(PlayerX),Position(0,2))
          ),
          Vector(
            Cell(Some(PlayerO),Position(1,0)),
            Cell(None,Position(1,1)),
            Cell(Some(PlayerX),Position(1,2))
          ),
          Vector(
            Cell(Some(PlayerO),Position(2,0)),
            Cell(Some(PlayerO),Position(2,1)),
            Cell(Some(PlayerX),Position(2,2))
          )
        )
      )
      board.columnWinner should equal (Some(Winner(PlayerX,ColumnLine(2))))
    }

  }

}
