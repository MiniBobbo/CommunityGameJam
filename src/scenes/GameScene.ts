import { Butler } from "../entities/Butler";

export class GameScene extends Phaser.Scene {
    Murderer:Butler;
    AllButlers:Array<Butler>;

    preload() {

    }
    create() {
        this.add.text(100,100, 'Gamescene');
        this.AllButlers = [];
    }
}