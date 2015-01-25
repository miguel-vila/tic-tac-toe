package models

/**
 * Created by mglvl on 24/01/15.
 */
case class Cell(mark: Option[Player], position: Position)

object Cell {
  def sameMark(cells: Iterable[Cell]): Option[Player] = {
    Player.allPlayers.filter { player =>
      cells.forall { c =>
        c.mark.exists { cellPlayer =>
          cellPlayer==player
        }
      }
    }.headOption
  }
  def somebodyCanWin(cells: Iterable[Cell]): Boolean = {
    val marks = cells.groupBy(_.mark)
    marks.size == 1 || marks.keys.flatten.toSet.size == 1
  }
}
