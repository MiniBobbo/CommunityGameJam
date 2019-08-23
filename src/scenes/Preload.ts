export class Preload extends Phaser.Scene {
    preload() {


    }
    create() {
        this.add.text(100,250, 'Community Game Jam')
        .setFontSize(60)
        .setAlign('center')
        .setWordWrapWidth(600);
    }
}