package actors

import akka.actor.{ActorRef, ActorSystem}
import akka.testkit.{TestProbe, ImplicitSender, TestKit}
import com.nicta.rng.Rng
import models._
import org.scalatest.{WordSpecLike, MustMatchers}
import scala.concurrent.duration._

/**
 * Created by mglvl on 25/01/15.
 */
class PVPGameActorTest extends TestKit(ActorSystem("GameActorTest"))
with MustMatchers
with WordSpecLike
with ImplicitSender {

  "Un Game Actor" should {

    val rngEmpiezaX: Rng[Player] = Rng.oneof(PlayerX)

    def setup(): (TestProbe,TestProbe,ActorRef) = {
      val playerX = new TestProbe(system)
      val playerO = new TestProbe(system)
      val gameActor = system.actorOf(PVPGameActor.props(playerX.ref, playerO.ref, rngEmpiezaX))
      (playerX,playerO,gameActor)
    }

    def playAt(x: Int, y: Int) = PlayAtPosition(Position(x,y))

    "Envía mensaje con información del juego al crearse" in {
      val (playerX,playerO,gameActor) = setup()
      playerX.expectMsg(500 millis, GameStarted(gameActor, youArePlayer = PlayerX, whoStarts = PlayerX))
      playerO.expectMsg(500 millis, GameStarted(gameActor, youArePlayer = PlayerO, whoStarts = PlayerX))
    }

    "Permite hacer jugadas y notifica a los jugadores de ellas" in {
      val (playerX,playerO,gameActor) = setup()
      playerX.expectMsg(500 millis, GameStarted(gameActor, youArePlayer = PlayerX, whoStarts = PlayerX))
      playerO.expectMsg(500 millis, GameStarted(gameActor, youArePlayer = PlayerO, whoStarts = PlayerX))
      playerX.send(gameActor, playAt(0,0))
      playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(0,0)))
    }

    "Lleva el estado de una partida y notifica su ganador" in {
      val (playerX,playerO,gameActor) = setup()
      playerX.expectMsg(500 millis, GameStarted(gameActor, youArePlayer = PlayerX, whoStarts = PlayerX))
      playerO.expectMsg(500 millis, GameStarted(gameActor, youArePlayer = PlayerO, whoStarts = PlayerX))

      playerX.send(gameActor, playAt(0,0))
      playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(0,0)))

      playerO.send(gameActor, playAt(1,0))
      playerX.expectMsg(PlayerPutAMarkInPosition(PlayerO,Position(1,0)))

      playerX.send(gameActor, playAt(1,1))
      playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(1,1)))

      playerO.send(gameActor, playAt(0,2))
      playerX.expectMsg(PlayerPutAMarkInPosition(PlayerO,Position(0,2)))

      playerX.send(gameActor, playAt(2,2))
      playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(2,2)))
      val gameWon = GameWon(Winner(PlayerX, UpperLeftToBottomRightLine))
      playerO.expectMsg(gameWon)
      playerX.expectMsg(gameWon)
    }

    "Permite jugar una partida y notifica si hay empate" in {
      val (playerX,playerO,gameActor) = setup()
      playerX.expectMsg(500 millis, GameStarted(gameActor, youArePlayer = PlayerX, whoStarts = PlayerX))
      playerO.expectMsg(500 millis, GameStarted(gameActor, youArePlayer = PlayerO, whoStarts = PlayerX))

      def playX(x: Int, y: Int) = {
        playerX.send(gameActor, playAt(x,y))
        playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(x,y)))
      }

      def playO(x: Int, y: Int) = {
        playerO.send(gameActor, playAt(x,y))
        playerX.expectMsg(PlayerPutAMarkInPosition(PlayerO,Position(x,y)))
      }

      playX(0,0)
      playO(1,1)
      playX(0,2)
      playO(0,1)
      playX(2,1)
      playO(2,0)
      playX(1,2)
      playerO.send(gameActor, playAt(2,2))
      playerX.expectMsg(PlayerPutAMarkInPosition(PlayerO,Position(2,2)))
      playerO.expectMsg(Draw)
      playerX.expectMsg(Draw)
    }


  }

}
