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
        this.body = scene.physics.add.sprite(0,0,'butleratlas', 'butlers_body_0');
        this.body.setCircle(16);
        this.characteristics = [1,2,1,3];
        this.face = scene.add.container(0,0);
        this.CreateFace();
    }

    CreateFace() {
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_skin' + this.characteristics[0] + '_0'));
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_top' + this.characteristics[1]+ '_0'));
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_mid' + this.characteristics[2]+ '_0'));
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_bottom' + this.characteristics[3]+ '_0'));

    }

    Update(time:number, dt:number) {
        this.face.setPosition(this.body.x + 4, this.body.y - 8);
        if(this.body.flipX)
            this.face.scaleX = -1;
            else
            this.face.scaleX = 1;
            
        });
    }
}