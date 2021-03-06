package actors

import akka.actor.{Actor, ActorRef, Props}
import models.Player
import play.api.libs.json.{Json, JsObject, JsValue}
import adapters.{ UserReceivedMessageAdapter => OutAdapter , UserSentMessagesAdapter => InAdapter }

sealed trait GameType
case object PlayerVersusPlayerGame extends GameType
case object PlayerVersusBotGame extends GameType

class PlayerActor(out: ActorRef, gameType: GameType) extends Actor with WithGameCreator {
  import context._

  val gameCreator = gameType match {
    case PlayerVersusPlayerGame  => playerVersusPlayerGameCreator
    case PlayerVersusBotGame => playerVersusBotGameCreator
  }

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
      gameCreator ! StartGame
    case NoPlayersAvailable =>
      respond(NoPlayersAvailable)
    case gameStarted @ GameStarted(_gameActor, _thisPlayer, _currentPlayer) =>
      respond(gameStarted)
      thisPlayer = _thisPlayer
      gameActor = _gameActor
      if(thisPlayer == _currentPlayer) {
        become(userTurn)
      } else {
        become(waiting)
      }
  }

  def waiting: Receive = {
    case playerPutAMark @ PlayerPutAMarkInPosition(otherPlayer, position) =>
      respond(playerPutAMark)
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
      gameCreator ! RemovePlayerIfWasWaiting(self)
    }
  }

}

object PlayerActor {
  def props(out: ActorRef, gameType: GameType): Props = Props(new PlayerActor(out, gameType))
}