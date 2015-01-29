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

  var thisPlayer: Player = _
  var gameActor: ActorRef = _

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
    case gameStarted @ GameStarted(_gameActor, _thisPlayer) =>
      respond(gameStarted)
      thisPlayer = _thisPlayer
      gameActor = _gameActor
      become(gameAboutToStart)
  }

  def gameAboutToStart: Receive = {
    case Wait =>
      respond(Wait)
      become(waiting)
    case MakeYourMove =>
      respond(MakeYourMove)
      become(userTurn)
  }

  def waiting: Receive = {
    case playerPutAMark @ PlayerPutAMarkInPosition(otherPlayer, position) =>
      respond(playerPutAMark)
    case MakeYourMove =>
      respond(MakeYourMove)
      become(userTurn)
    case gameFinished: GameFinishedMessage =>
      respond(gameFinished)
      become(noGameStarted)
    case userDisconnected: UserDisconnected =>
      respond(userDisconnected)
      become(noGameStarted)
  }

  def userTurn: Receive = {
    case json: JsValue =>
      println(s"userActor- userTurn - JSON => $json")
      self ! InAdapter.fromJSON(json)
    case playAtPosition: PlayAtPosition =>
      println(s"userActor- userTurn - $playAtPosition")
      gameActor ! playAtPosition
    case Wait =>
      respond(Wait)
      become(waiting)
    case gameFinished: GameFinishedMessage =>
      respond(gameFinished)
      become(noGameStarted)
    case userDisconnected: UserDisconnected =>
      respond(userDisconnected)
      become(noGameStarted)
  }

  override def postStop(): Unit = {
    if(gameActor != null) {
      gameActor ! UserDisconnected(self)
    } else {
      gameManager ! RemovePlayerIfWasWaiting(self)
    }
  }

}

object UserActor {
  def props(out: ActorRef): Props = Props(new UserActor(out))
}