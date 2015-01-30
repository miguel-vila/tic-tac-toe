package controllers

import actors.PlayerActor
import play.api._
import play.api.libs.json.JsValue
import play.api.mvc._
import play.api.Play.current

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def wsUser = WebSocket.acceptWithActor[JsValue,JsValue] { implicit req => out =>
    PlayerActor.props(out)
  }

}