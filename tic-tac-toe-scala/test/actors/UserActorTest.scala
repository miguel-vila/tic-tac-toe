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
class UserActorTest extends Matchers with WordSpecLike with BeforeAndAfterEach {

  implicit var system: ActorSystem = _

  override def beforeEach() = {
    system = ActorSystem("UserActorTest")
  }

  override def afterEach() = {
    system.shutdown()
    //system.awaitTermination(4 seconds)
  }

  def createUserActor(i: Int = 1)(implicit system: ActorSystem): (TestProbe,ActorRef) = {
    val out = TestProbe()
    val userActor = system.actorOf(UserActor.props(out.ref), s"user-actor-$i")
    (out, userActor)
  }

  "Un UserActor" should {

    "Responde informando la falta de otros jugadores" in {
      val (out1, userActor1) = createUserActor()
      userActor1 ! Json.obj("command" -> UserSentMessage.StartGameCommand)
      out1.expectMsg(Json.obj("responseType" -> UserReceivedMessage.NoPlayersAvailableResponse))
    }

    "Responde creando un juego cuando llegan dos jugadores" in {
      val (out1, userActor1) = createUserActor(1)
      userActor1 ! Json.obj("command" -> UserSentMessage.StartGameCommand)
      out1.expectMsg(Json.obj("responseType" -> UserReceivedMessage.NoPlayersAvailableResponse))
      val (out2, userActor2) = createUserActor(2)
      userActor2 ! Json.obj("command" -> UserSentMessage.StartGameCommand)
      var (outX, userActorX): (TestProbe, ActorRef) = (null,null)
      var (outO, userActorO): (TestProbe, ActorRef) = (null,null)
      var (outFirst, userActorFirst): (TestProbe, ActorRef) = (null,null)
      var (outSecond, userActorSecond): (TestProbe, ActorRef) = (null,null)

      out1.receiveWhile(500 millis) {
        case json: JsValue =>
          val responseType = (json \ "responseType").as[String]
          if(responseType == UserReceivedMessage.MakeYourMoveResponse) {
            outFirst = out1; userActorFirst = userActor1
          } else if(responseType == UserReceivedMessage.WaitResponse) {
            outSecond = out1 ; userActorSecond = userActor1
          } else if(responseType == UserReceivedMessage.GameStartedResponse) {
            val player = (json \ "youArePlayer").as[String]
            assert(player == "X" || player == "O")
            if(player == "X") {
              outX = out1 ; userActorX = userActor1
            } else {
              outO = out1 ; userActorO = userActor1
            }
          }
      }

      out2.receiveWhile(500 millis) {
        case json: JsValue =>
          val responseType = (json \ "responseType").as[String]
          if(responseType == UserReceivedMessage.MakeYourMoveResponse) {
            outFirst = out2; userActorFirst = userActor2
          } else if(responseType == UserReceivedMessage.WaitResponse) {
            outSecond = out2 ; userActorSecond = userActor2
          } else if(responseType == UserReceivedMessage.GameStartedResponse) {
            val player = (json \ "youArePlayer").as[String]
            assert(player == "X" || player == "O")
            if(player == "X") {
              outX = out2 ; userActorX = userActor2
            } else {
              outO = out2 ; userActorO = userActor2
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

        outFirst.expectMsg(Json.obj("responseType" -> UserReceivedMessage.WaitResponse))
        outSecond.expectMsg(Json.obj("responseType" -> UserReceivedMessage.MakeYourMoveResponse))
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

        outSecond.expectMsg(Json.obj("responseType" -> UserReceivedMessage.WaitResponse))
        outFirst.expectMsg(Json.obj("responseType" -> UserReceivedMessage.MakeYourMoveResponse))
      }

      firstPlays(0,0)
      secondPlays(1,0)
      firstPlays(1,1)
      secondPlays(0,2)

      userActorFirst ! Json.obj(
        "command" -> UserSentMessage.PlayAtPositionCommand,
        "position" -> Json.obj("x" -> 2, "y" -> 2)
      )

      outSecond.expectMsg(Json.obj(
        "responseType" -> UserReceivedMessage.PlayerPutAMarkInPositionResponse,
        "player" -> (if(outFirst == outX) "X" else "O"),
        "position" -> Json.obj("x" -> 2, "y" -> 2)
      ))

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

  }

}
