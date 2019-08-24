import { Clue } from "../Clue";

export class Butler {
    body:Phaser.Physics.Arcade.Sprite;
    face:Phaser.GameObjects.Container;
    scene:Phaser.Scene;
    clue:Clue;
    name:string;

    characteristics:Array<number>;

    constructor(scene:Phaser.Scene, characteristics:Array<number>) {
        this.scene = scene;
        this.body = scene.physics.add.sprite(0,0,'');
        this.body.setCircle(16);
        this.characteristics = characteristics;
    }

}