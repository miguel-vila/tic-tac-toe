package actors

import akka.actor.{ActorRef, ActorSystem}
import akka.testkit.{TestProbe, TestKit}
import models.NW_SE_DiagonalLine
import org.scalatest.{BeforeAndAfterEach, WordSpecLike, Matchers}
import play.api.libs.json._
import scala.concurrent.duration._

/**
 * Created by mglvl on 25/01/15.
 */
class PlayerActorTest extends Matchers with WordSpecLike with BeforeAndAfterEach {

  implicit var system: ActorSystem = _

  override def beforeEach() = {
    system = ActorSystem("PlayerActorTest")
  }

  override def afterEach() = {
    system.shutdown()
    //system.awaitTermination(4 seconds)
  }

  def createUserActor(i: Int = 1)(implicit system: ActorSystem): (TestProbe,ActorRef) = {
    val out = TestProbe()
    val userActor = system.actorOf(PlayerActor.props(out.ref), s"user-actor-$i")
    (out, userActor)
  }

  "Un PlayerActor" should {

    "Responde informando la falta de otros jugadores" in {
      val (out1, userActor1) = createUserActor()
      userActor1 ! Json.obj("command" -> UserSentMessage.StartGameCommand)
      out1.expectMsg(Json.obj("responseType" -> UserReceivedMessage.NoPlayersAvailableResponse))
    }

    "Maneja un juego en el que uno de los jugadores gana" in {
      val (out1, userActor1) = createUserActor(1)
      userActor1 ! Json.obj("command" -> UserSentMessage.StartGameCommand)
      out1.expectMsg(Json.obj("responseType" -> UserReceivedMessage.NoPlayersAvailableResponse))

      val (out2, userActor2) = createUserActor(2)
      userActor2 ! Json.obj("command" -> UserSentMessage.StartGameCommand)

      var (outX, userActorX): (TestProbe, ActorRef) = (null,null)
      var (outO, userActorO): (TestProbe, ActorRef) = (null,null)
      var (outFirst, userActorFirst): (TestProbe, ActorRef) = (null,null)
      var (outSecond, userActorSecond): (TestProbe, ActorRef) = (null,null)

      var whoStarts : String = null;

      out1.receiveWhile(500 millis) {
        case json: JsValue =>
          val responseType = (json \ "responseType").as[String]
          if(responseType == UserReceivedMessage.GameStartedResponse) {
            val player = (json \ "youArePlayer").as[String]
            whoStarts = (json \ "currentPlayer").as[String]
            assert(player == "X" || player == "O")
            assert(whoStarts == "X" || whoStarts == "O")
            if(player == "X") {
              outX = out1 ; userActorX = userActor1
              outO = out2 ; userActorO = userActor2
            } else {
              outO = out1 ; userActorO = userActor1
              outX = out2 ; userActorX = userActor2
            }
            if(whoStarts == "X") {
              outFirst = outX ; userActorFirst = userActorX
              outSecond = outO ; userActorSecond = userActorO
            } else {
              outFirst = outO ; userActorFirst = userActorO
              outSecond = outX ; userActorSecond = userActorX
            }
          }
      }

      out2.receiveWhile(500 millis) {
        case json: JsValue =>
          val responseType = (json \ "responseType").as[String]
          if(responseType == UserReceivedMessage.GameStartedResponse) {
            val player = (json \ "youArePlayer").as[String]
            assert( (json \ "currentPlayer").as[String] == whoStarts )
            assert(player == "X" || player == "O")
            if(player == "X") {
              assert( out2 == outX && userActor2 == userActorX && out1 == outO && userActor1 == userActorO )
            } else {
              assert( out2 == outX && userActor2 == userActorX && out1 == outO && userActor1 == userActorO )
            }
          }
      }

      assert(outFirst != null && userActorFirst != null)
      assert(outSecond != null && userActorSecond != null)

      def firstPlays(x: Int, y: Int) = {
        userActorFirst ! Json.obj(
          "command" -> UserSentMessage.PlayAtPositionCommand,
          "position" -> Json.obj("x" -> x, "y" -> y)
        )

        outSecond.expectMsg(Json.obj(
          "responseType" -> UserReceivedMessage.PlayerPutAMarkInPositionResponse,
          "player" -> (if(outFirst == outX) "X" else "O"),
          "position" -> Json.obj("x" -> x, "y" -> y)
        ))

      }

      def secondPlays(x: Int, y: Int) = {
        userActorSecond ! Json.obj(
          "command" -> UserSentMessage.PlayAtPositionCommand,
          "position" -> Json.obj("x" -> x, "y" -> y)
        )

        outFirst.expectMsg(Json.obj(
          "responseType" -> UserReceivedMessage.PlayerPutAMarkInPositionResponse,
          "player" -> (if(outSecond == outX) "X" else "O"),
          "position" -> Json.obj("x" -> x, "y" -> y)
        ))

      }

      firstPlays(0,0)
      secondPlays(1,0)
      firstPlays(1,1)
      secondPlays(0,2)
      firstPlays(2,2)

      val wonMsg = Json.obj(
        "responseType" -> UserReceivedMessage.GameWonResponse,
        "winner" -> Json.obj(
          "player" -> (if(outFirst == outX) "X" else "O"),
          "winnerLine" -> Json.obj( "dimension" -> "NW_SE_Diagonal")
        )
      )
      outSecond.expectMsg(wonMsg)
      outFirst.expectMsg(wonMsg)
    }
    
    "Maneja un juego en el que los jugadores empatan" in {
      val (out1, userActor1) = createUserActor(1)
      userActor1 ! Json.obj("command" -> UserSentMessage.StartGameCommand)
      out1.expectMsg(Json.obj("responseType" -> UserReceivedMessage.NoPlayersAvailableResponse))
      val (out2, userActor2) = createUserActor(2)
      userActor2 ! Json.obj("command" -> UserSentMessage.StartGameCommand)
      var (outX, userActorX): (TestProbe, ActorRef) = (null,null)
      var (outO, userActorO): (TestProbe, ActorRef) = (null,null)
      var (outFirst, userActorFirst): (TestProbe, ActorRef) = (null,null)
      var (outSecond, userActorSecond): (TestProbe, ActorRef) = (null,null)
      var whoStarts: String = null

      out1.receiveWhile(500 millis) {
        case json: JsValue =>
          val player = (json \ "youArePlayer").as[String]
          whoStarts = (json \ "currentPlayer").as[String]
          assert(player == "X" || player == "O")
          assert(whoStarts == "X" || whoStarts == "O")
          if(player == "X") {
            outX = out1 ; userActorX = userActor1
            outO = out2 ; userActorO = userActor2
          } else {
            outO = out1 ; userActorO = userActor1
            outX = out2 ; userActorX = userActor2
          }
          if(whoStarts == "X") {
            outFirst = outX ; userActorFirst = userActorX
            outSecond = outO ; userActorSecond = userActorO
          } else {
            outFirst = outO ; userActorFirst = userActorO
            outSecond = outX ; userActorSecond = userActorX
          }
      }

      out2.receiveWhile(500 millis) {
        case json: JsValue =>
          val responseType = (json \ "responseType").as[String]
          if(responseType == UserReceivedMessage.GameStartedResponse) {
            val player = (json \ "youArePlayer").as[String]
            assert( (json \ "currentPlayer").as[String] == whoStarts )
            assert(player == "X" || player == "O")
            if(player == "X") {
              assert( out2 == outX && userActor2 == userActorX && out1 == outO && userActor1 == userActorO )
            } else {
              assert( out2 == outX && userActor2 == userActorX && out1 == outO && userActor1 == userActorO )
            }
          }
      }

      assert(outFirst != null && userActorFirst != null)
      assert(outSecond != null && userActorSecond != null)

      def firstPlays(x: Int, y: Int) = {
        userActorFirst ! Json.obj(
          "command" -> UserSentMessage.PlayAtPositionCommand,
          "position" -> Json.obj("x" -> x, "y" -> y)
        )

        outSecond.expectMsg(Json.obj(
          "responseType" -> UserReceivedMessage.PlayerPutAMarkInPositionResponse,
          "player" -> (if(outFirst == outX) "X" else "O"),
          "position" -> Json.obj("x" -> x, "y" -> y)
        ))

      }

      def secondPlays(x: Int, y: Int) = {
        userActorSecond ! Json.obj(
          "command" -> UserSentMessage.PlayAtPositionCommand,
          "position" -> Json.obj("x" -> x, "y" -> y)
        )

        outFirst.expectMsg(Json.obj(
          "responseType" -> UserReceivedMessage.PlayerPutAMarkInPositionResponse,
          "player" -> (if(outSecond == outX) "X" else "O"),
          "position" -> Json.obj("x" -> x, "y" -> y)
        ))

      }

      firstPlays(0,0)
      secondPlays(1,1)
      firstPlays(0,2)
      secondPlays(0,1)
      firstPlays(2,1)
      secondPlays(2,0)
      firstPlays(1,2)
      secondPlays(2,2)

      val drawMsg = Json.obj(
        "responseType" -> UserReceivedMessage.DrawResponse
      )
      outSecond.expectMsg(drawMsg)
      outFirst.expectMsg(drawMsg)
    }
  }

}
