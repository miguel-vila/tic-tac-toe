package actors

import akka.actor.{ActorRef, ActorSystem}
import akka.testkit.{TestProbe, ImplicitSender, TestKit}
import com.nicta.rng.Rng
import models._
import org.scalatest.{WordSpecLike, MustMatchers}

/**
 * Created by mglvl on 25/01/15.
 */
class GameActorTest extends TestKit(ActorSystem("GameActorTest"))
with MustMatchers
with WordSpecLike
with ImplicitSender {

  "Un Game Actor" should {

    val rngEmpiezaX: Rng[Player] = Rng.oneof(PlayerX)

    def setup(): (TestProbe,TestProbe,ActorRef) = {
      val playerX = new TestProbe(system)
      val playerO = new TestProbe(system)
      val gameActor = system.actorOf(GameActor.props(playerX.ref, playerO.ref, rngEmpiezaX))
      (playerX,playerO,gameActor)
    }

    def playAt(x: Int, y: Int) = PlayAtPosition(Position(x,y))

    def checkTurnMessages(activePlayer: TestProbe, waitingPlayer: TestProbe) = {
      activePlayer.expectMsg(MakeYourMove)
      waitingPlayer.expectMsg(Wait)
    }

    "Envía mensajes de espera y de hacer movimiento al crearse" in {
      val (playerX,playerO,_) = setup()
      checkTurnMessages(playerX, playerO)
    }

    "Permite hacer jugadas y notifica a los jugadores de ellas" in {
      val (playerX,playerO,gameActor) = setup()
      checkTurnMessages(playerX, playerO)
      playerX.send(gameActor, playAt(0,0))
      playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(0,0)))
      checkTurnMessages(playerO, playerX)
    }

    "Lleva el estado de una partida y notifica su ganador" in {
      val (playerX,playerO,gameActor) = setup()
      checkTurnMessages(playerX, playerO)

      playerX.send(gameActor, playAt(0,0))
      playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(0,0)))
      checkTurnMessages(playerO, playerX)

      playerO.send(gameActor, playAt(1,0))
      playerX.expectMsg(PlayerPutAMarkInPosition(PlayerO,Position(1,0)))
      checkTurnMessages(playerX, playerO)

      playerX.send(gameActor, playAt(1,1))
      playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(1,1)))
      checkTurnMessages(playerO, playerX)

      playerO.send(gameActor, playAt(0,2))
      playerX.expectMsg(PlayerPutAMarkInPosition(PlayerO,Position(0,2)))
      checkTurnMessages(playerX, playerO)

      playerX.send(gameActor, playAt(2,2))
      playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(2,2)))
      val gameWon = GameWon(Winner(PlayerX, NW_SE_DiagonalLine))
      playerO.expectMsg(gameWon)
      playerX.expectMsg(gameWon)
    }

    "Permite jugar una partida y notifica si hay empate" in {
      val (playerX,playerO,gameActor) = setup()
      checkTurnMessages(playerX, playerO)

      def playX(x: Int, y: Int) = {
        playerX.send(gameActor, playAt(x,y))
        playerO.expectMsg(PlayerPutAMarkInPosition(PlayerX,Position(x,y)))
        checkTurnMessages(playerO, playerX)
      }

      def playO(x: Int, y: Int) = {
        playerO.send(gameActor, playAt(x,y))
        playerX.expectMsg(PlayerPutAMarkInPosition(PlayerO,Position(x,y)))
        checkTurnMessages(playerX, playerO)
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
