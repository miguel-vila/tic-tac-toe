package exceptions

import models.Position

/**
 * Created by mglvl on 24/01/15.
 */
class TicTacToeException(msg: String, cause: Throwable = null) extends Exception(msg,cause)
class CellAlreadyMarkedError(position: Position) extends TicTacToeException(s"The cell at position (${position.x},${position.y}) is already marked")
object IncorrectPlayerError extends TicTacToeException(s"A player that is suppossed to be waiting tried to make a move")
object GameFinishedError extends TicTacToeException("The game has already finished and no further moves can be made")
