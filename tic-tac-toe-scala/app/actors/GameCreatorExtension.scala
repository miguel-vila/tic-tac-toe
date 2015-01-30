package actors

import akka.actor._

/**
 * Created by mglvl on 25/01/15.
 */
object GameCreatorExtension extends ExtensionKey[GameCreatorExtension]

class GameCreatorExtension(system: ExtendedActorSystem) extends Extension {

  val gameCreator = system.actorOf(GameCreatorActor.props(), "game-creator")

}

trait WithGameCreator {
  this: Actor =>

  val gameCreator = GameCreatorExtension(context.system).gameCreator

}