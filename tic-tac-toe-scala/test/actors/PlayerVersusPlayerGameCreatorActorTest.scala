package actors

import akka.actor.ActorSystem
import akka.testkit.{TestProbe, ImplicitSender, TestKit}
import org.scalatest.{WordSpecLike, MustMatchers}

/**
 * Created by mglvl on 24/01/15.
 */
class PlayerVersusPlayerGameCreatorActorTest extends TestKit(ActorSystem("GameManagerActorTest"))
with MustMatchers
with WordSpecLike
with ImplicitSender
{
  "Un GameCreatorActor" should {
    "Responder que no hay juegos disponibles al primer jugador" in {
      val gameManager = system.actorOf(PlayerVersusPlayerGameCreatorActor.props())
      gameManager ! StartGame
      expectMsg(NoPlayersAvailable)
    }
    "Responder con un juego al segundo jugador que llega al sistema" in {
      val gameManager = system.actorOf(PlayerVersusPlayerGameCreatorActor.props())
      val player1 = new TestProbe(system)
      player1.send(gameManager, StartGame)
      player1.expectMsg(NoPlayersAvailable)
      val player2 = new TestProbe(system)
      player2.send(gameManager, StartGame)
      player1.expectMsgType[GameStarted]
      player2.expectMsgType[GameStarted]
    }
  }

}
