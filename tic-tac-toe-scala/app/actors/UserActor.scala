package actors

import akka.actor.{Actor, ActorRef, Props}
import models.Player
import play.api.libs.json.{Json, JsObject, JsValue}
import adapters.{ UserReceivedMessageAdapter => OutAdapter , UserSentMessagesAdapter => InAdapter }

/**
 * Created by mglvl on 17/01/15.
 */
class UserActor(out: ActorRef) extends Actor with WithGameManager {
  import context._

  def receive = noGameStarted

  def respond(msg: UserReceivedMessage): Unit = {
    out ! OutAdapter.toJson(msg)
  }

  def noGameStarted: Receive = {
    case json: JsValue =>
      self ! InAdapter.fromJSON(json)
    case StartGame =>
      gameManager ! StartGame
    case NoPlayersAvailable =>
      respond(NoPlayersAvailable)
    case gameStarted @ GameStarted(gameActor, thisPlayer) =>
      respond(gameStarted)
      become(gameAboutToStart(thisPlayer, gameActor))
  }

  def gameAboutToStart(thisPlayer: Player, gameActor: ActorRef): Receive = {
    case Wait =>
      respond(Wait)
      become(waiting(thisPlayer, gameActor))
    case MakeYourMove =>
      respond(MakeYourMove)
      become(userTurn(thisPlayer, gameActor))
  }

  def waiting(thisPlayer: Player, gameActor: ActorRef): Receive = {
    case playerPutAMark @ PlayerPutAMarkInPosition(otherPlayer, position) =>
      respond(playerPutAMark)
    case MakeYourMove =>
      respond(MakeYourMove)
      become(userTurn(thisPlayer, gameActor))
    case gameFinished: GameFinishedMessage =>
      respond(gameFinished)
      become(noGameStarted)
  }

  def userTurn(thisPlayer: Player, gameActor: ActorRef): Receive = {
    case json: JsValue =>
      self ! InAdapter.fromJSON(json)
    case playAtPosition: PlayAtPosition =>
      gameActor ! playAtPosition
    case Wait =>
      respond(Wait)
      become(waiting(thisPlayer, gameActor))
    case gameFinished: GameFinishedMessage =>
      respond(gameFinished)
      become(noGameStarted)
  }

}

object UserActor {
  def props(out: ActorRef): Props = Props(new UserActor(out))
}