import { Butler } from "../entities/Butler";
import { Notebook } from "../entities/Notebook";

export class TestScene extends Phaser.Scene {
    AllButlers:Array<Butler>;
    preload() {

    }

    create() {
        this.AllButlers = [];
        for(let i = 0; i < 100; i++) {
            let b = new Butler(this, [Phaser.Math.Between(0,3),Phaser.Math.Between(0,3),Phaser.Math.Between(0,3),Phaser.Math.Between(0,3)]);
            this.AllButlers.push(b);
            b.body.setPosition(Phaser.Math.Between(0,960), Phaser.Math.Between(0,540));
        }

        let n = new Notebook(this);
        n.setPosition(300,30);
    }

    update(time:number, dt:number) {
        this.AllButlers.forEach(b => {
            b.Update(time, dt);
        });
    }
}