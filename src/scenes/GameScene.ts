import { Butler } from "../entities/Butler";

export class GameScene extends Phaser.Scene {
    Murderer:Butler;
    AllButlers:Array<Butler>;

    preload() {

    }
    create() {
        // this.add.text(100,100, 'Gamescene');
        this.cameras.main.setBackgroundColor(0x99999);
        this.AllButlers = [];
        let b = new Butler(this);
        b.body.setPosition(100,100);
        this.AllButlers.push(b);
    }

    update(time:number, dt:number) {
        this.AllButlers.forEach(b => {
            b.Update(time, dt);
        });
    }

}