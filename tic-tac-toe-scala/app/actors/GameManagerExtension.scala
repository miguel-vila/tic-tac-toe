package actors

import akka.actor._

/**
 * Created by mglvl on 25/01/15.
 */
object GameManagerExtension extends ExtensionKey[GameManagerExtension]

class GameManagerExtension(system: ExtendedActorSystem) extends Extension {

  val gameManager = system.actorOf(GameManagerActor.props(), "game-manager")

}

trait WithGameManager {
  this: Actor =>

  val gameManager = GameManagerExtension(context.system).gameManager

}