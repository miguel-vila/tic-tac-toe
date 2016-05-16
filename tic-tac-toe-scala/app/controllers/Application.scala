package controllers

import actors.{PlayerActor, PlayerVersusBotGame, PlayerVersusPlayerGame}
import play.api._
import play.api.libs.json.JsValue
import play.api.mvc._
import play.api.Play.current

object Application extends Controller {

  def wsPVP = WebSocket.acceptWithActor[JsValue,JsValue] { implicit req => out =>
    PlayerActor.props(out, PlayerVersusPlayerGame)
  }

  def wsPVB = WebSocket.acceptWithActor[JsValue,JsValue] { implicit req => out =>
    PlayerActor.props(out, PlayerVersusBotGame)
  }

  def cljsViewPVP = Action { req  =>
    Ok(views.html.cljs("/websockets/pvp"))
  }

  def cljsViewPVB = Action { req  =>
    Ok(views.html.cljs("/websockets/pvb"))
  }

}