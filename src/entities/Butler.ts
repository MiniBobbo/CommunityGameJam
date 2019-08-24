import { Clue } from "../Clue";

export class Butler {
    body:Phaser.Physics.Arcade.Sprite;
    face:Phaser.GameObjects.Container;
    scene:Phaser.Scene;
    clue:Clue;
    name:string;
    characteristics:Array<number>;

    constructor(scene:Phaser.Scene) {
        this.scene = scene;
        this.body = scene.physics.add.sprite(0,0,'');
        this.body.setCircle(16);
        this.characteristics = [1,2,1,3];
    }

}