package exceptions

import models.Position

/**
 * Created by mglvl on 24/01/15.
 */
class TicTacToeException(msg: String, cause: Throwable = null) extends Exception(msg,cause)
class CellAlreadyMarkedError(position: Position) extends TicTacToeException(s"The cell at position (${position.x},${position.y}) is already marked")
