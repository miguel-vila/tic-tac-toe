package actors

import akka.actor.{Actor, ActorRef, Props}
import play.api.libs.json.{Json, JsObject, JsValue}

/**
 * Created by mglvl on 17/01/15.
 */
class UserActor(out: ActorRef) extends Actor {

  def receive = {
    case message: JsValue =>
      println(s"Received!: $message")
      out ! Json.obj("echo" -> message)
  }

}

object UserActor {
  def props(out: ActorRef): Props = Props(new UserActor(out))
}