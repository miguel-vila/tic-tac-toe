package actors

import akka.actor.{Actor, Props}
import models.PlayerX

class PlayerVersusBotGameCreatorActor extends Actor {
  import context._

  var gameId = 1

  def receive = {
    case StartGame =>
      val originalSender = sender()
      val gameActor = system.actorOf(PVBGameActor.props(originalSender, PlayerX), s"pvb-game-$gameId")
      gameId += 1
  }

}

object PlayerVersusBotGameCreatorActor{
  def props(): Props = Props(new PlayerVersusBotGameCreatorActor)
}