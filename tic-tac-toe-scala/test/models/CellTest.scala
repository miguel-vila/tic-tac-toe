package models

import org.scalatest.{WordSpecLike, Matchers}

/**
 * Created by mglvl on 24/01/15.
 */
class CellTest extends Matchers with WordSpecLike {

  "Cell" should {
    "Identificar correctamente arreglos de celdas marcadas por el mismo jugador (1)" in {
      val celdas = List(
        Cell(Some(PlayerO), Position(0,0)),
        Cell(Some(PlayerO), Position(0,1)),
        Cell(Some(PlayerO), Position(0,2))
      )
      Cell.sameMark(celdas) should equal (Some(PlayerO))
    }
    "Identificar correctamente arreglos de celdas marcadas por el mismo jugador (2)" in {
      val celdas = List(
        Cell(Some(PlayerX), Position(0,0)),
        Cell(Some(PlayerX), Position(0,1)),
        Cell(Some(PlayerX), Position(0,2))
      )
      Cell.sameMark(celdas) should equal (Some(PlayerX))
    }
    "Identificar correctamente arreglos de celdas marcadas por el mismo jugador (3)" in {
      val celdas = List(
        Cell(Some(PlayerX), Position(0,0)),
        Cell(Some(PlayerO), Position(0,1)),
        Cell(Some(PlayerO), Position(0,2))
      )
      Cell.sameMark(celdas) should equal (None)
    }
    "Identificar correctamente arreglos de celdas marcadas por el mismo jugador (4)" in {
      val celdas = List(
        Cell(None, Position(0,0)),
        Cell(Some(PlayerO), Position(0,1)),
        Cell(Some(PlayerO), Position(0,2))
      )
      Cell.sameMark(celdas) should equal (None)
    }
    "Identificar correctamente arreglos de celdas marcadas por el mismo jugador (5)" in {
      val celdas = List(
        Cell(None, Position(0,0)),
        Cell(Some(PlayerX), Position(0,1)),
        Cell(Some(PlayerO), Position(0,2))
      )
      Cell.sameMark(celdas) should equal (None)
    }
    "Identifica correctamente arreglos de celdas en las que un jugador todavia puede ganar (1)" in {
      val celdas = List(
        Cell(None, Position(0,0)),
        Cell(Some(PlayerX), Position(0,1)),
        Cell(Some(PlayerO), Position(0,2))
      )
      Cell.somebodyCanWin(celdas) should equal (false)
    }
    "Identifica correctamente arreglos de celdas en las que un jugador todavia puede ganar (2)" in {
      val celdas = List(
        Cell(Some(PlayerO), Position(0,0)),
        Cell(Some(PlayerO), Position(0,1)),
        Cell(None, Position(0,2))
      )
      Cell.somebodyCanWin(celdas) should equal (true)
    }
    "Identifica correctamente arreglos de celdas en las que un jugador todavia puede ganar (3)" in {
      val celdas = List(
        Cell(Some(PlayerX), Position(0,0)),
        Cell(Some(PlayerX), Position(0,1)),
        Cell(None, Position(0,2))
      )
      Cell.somebodyCanWin(celdas) should equal (true)
    }
    "Identifica correctamente arreglos de celdas en las que un jugador todavia puede ganar (4)" in {
      val celdas = List(
        Cell(None, Position(0,0)),
        Cell(None, Position(0,1)),
        Cell(None, Position(0,2))
      )
      Cell.somebodyCanWin(celdas) should equal (true)
    }
    "Identifica correctamente arreglos de celdas en las que un jugador todavia puede ganar (5)" in {
      val celdas = List(
        Cell(Some(PlayerX), Position(0,0)),
        Cell(None, Position(0,1)),
        Cell(Some(PlayerX), Position(0,2))
      )
      Cell.somebodyCanWin(celdas) should equal (true)
    }
    "Identifica correctamente arreglos de celdas en las que un jugador todavia puede ganar (6)" in {
      val celdas = List(
        Cell(Some(PlayerO), Position(0,0)),
        Cell(None, Position(0,1)),
        Cell(Some(PlayerX), Position(0,2))
      )
      Cell.somebodyCanWin(celdas) should equal (false)
    }
  }

}
