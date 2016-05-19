package actors

import akka.actor.{Actor, ActorRef, Props}
import com.nicta.rng.Rng
import models._

class PVBGameActor(userActor: ActorRef, userPlayer: Player, rng: Rng[Player] = Game.randomPlayer()) extends Actor {
  import context._

  def receive = {
    val game = Game.newWithRandomPlayer(rng)
    userActor ! GameStarted(self, userPlayer, game.currentPlayer)
    val bot = new RandomMovementBot( userPlayer.other )
    val activeGame = if(game.currentPlayer == bot.player) {
      botPlays(game, bot).asInstanceOf[ActiveGame] //@TODO: ugly cast
    } else {
      game
    }
    playing(activeGame, bot)
  }

  def botPlays(activeGame: ActiveGame, bot: Bot): Game = {
    val otherPlayerMovement = bot.makeMovement(activeGame)
    val gameAfterBotMov = activeGame.putMark(otherPlayerMovement)
    userActor ! PlayerPutAMarkInPosition(bot.player, otherPlayerMovement)
    gameAfterBotMov
  }

  def playing(game: ActiveGame, bot: Bot): Receive = {
    case PlayAtPosition(position) if sender() == userActor =>
      val newGame = game.putMark(position)
      newGame match {
        case activeGame: ActiveGame =>
          // @TODO: ugly match inside a match and repeated logic
          botPlays(activeGame, bot) match {
            case activeGame: ActiveGame =>
              become(playing(activeGame, bot))
            case drawGame: DrawGame =>
              onDraw()
            case WonGame(_,winner) =>
              onWon(winner)
          }
        case drawGame: DrawGame =>
          onDraw()
        case WonGame(_,winner) =>
          onWon(winner)
      }
  }

  def onDraw() = {
    userActor ! Draw
    context.stop(self)
  }

  def onWon(winner: Winner) = {
    userActor ! GameWon(winner)
    context.stop(self)
  }

}

object PVBGameActor {

  def props(userActor: ActorRef, userPlayer: Player, rng: Rng[Player] = Game.randomPlayer()): Props = Props(new PVBGameActor(userActor, userPlayer, rng))

}
