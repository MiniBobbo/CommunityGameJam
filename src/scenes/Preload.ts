export class Preload extends Phaser.Scene {
    preload() {


    }
    create() {
        this.add.text(100,250, 'The Game is a Liar')
        .setFontSize(60)
        .setAlign('center')
        .setWordWrapWidth(600);
    } 
}