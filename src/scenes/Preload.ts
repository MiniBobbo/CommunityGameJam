import { Butler } from "../entities/Butler";

export class Preload extends Phaser.Scene {
    preload() {


    }
    create() {
        this.scene.start('game');
    } 
}