import * as Phaser from "phaser";
import { Preload } from "./scenes/Preload";
import { GameScene } from "./scenes/GameScene";
import { MenuScene } from "./scenes/MenuScene";
import { ResultsScene } from "./scenes/ResultsScene";
import { TestScene } from "./scenes/TestScene";


class Main extends Phaser.Game {
  constructor() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      width: 480,
      height: 270,
      zoom:2,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
      },
      scene:{
        // preload:preload,
        // game:Game
      },
      render: {
        pixelArt:true,
      }
    };
    super(config);

    // this.scene.add("boot", Boot, false);
    this.scene.add("menu", MenuScene, false);
    this.scene.add("results", ResultsScene, false);
    this.scene.add("test", TestScene, false);
    this.scene.add("preload", Preload, false);
    this.scene.add("game", GameScene, false);
    this.scene.start("preload");
    }

}

window.onload = () => {
  const GameApp: Phaser.Game = new Main();
};