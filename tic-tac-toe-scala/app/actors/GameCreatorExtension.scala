package actors

import akka.actor._

/**
 * Created by mglvl on 25/01/15.
 */
object GameCreatorExtension extends ExtensionKey[GameCreatorExtension]

class GameCreatorExtension(system: ExtendedActorSystem) extends Extension {

  val playerVersusPlayerGameCreator = system.actorOf(PlayerVersusPlayerGameCreatorActor.props(), "game-creator")

  val playerVersusBotGameCreator = system.actorOf(PlayerVersusBotGameCreatorActor.props(), "game-with-bot-creator")
}

trait WithGameCreator {
  this: Actor =>

  val playerVersusPlayerGameCreator = GameCreatorExtension(context.system).playerVersusPlayerGameCreator

  val playerVersusBotGameCreator = GameCreatorExtension(context.system).playerVersusBotGameCreator

}