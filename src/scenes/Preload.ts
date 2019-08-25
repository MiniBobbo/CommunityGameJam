import { Butler } from "../entities/Butler";

export class Preload extends Phaser.Scene {
    preload() {
        this.load.atlas('butleratlas', './assets/butleratlas.png', './assets/butleratlas.json');

    }
    create() {
        this.scene.start('test');
    } 
}