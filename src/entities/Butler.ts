import { Clue } from "../Clue";

export class Butler {
    body:Phaser.Physics.Arcade.Sprite;
    face:Phaser.GameObjects.Container;
    scene:Phaser.Scene;
    clue:Clue;
    name:string;
    OffsetY:number = 0;
    HopStrength:number = 0;
    DefaultHopStrength:number = 3;

    characteristics:Array<number>;

    constructor(scene:Phaser.Scene, characteristics:Array<number>) {
        this.characteristics = characteristics;
        this.scene = scene;
        this.body = scene.physics.add.sprite(0,0,'butleratlas', 'butlers_blank_0');
        this.body.setInteractive().setSize(20,32);
        this.face = scene.add.container(0,0);
        this.CreateFace();
        this.body.on('pointerdown', this.Hop, this);
    }

    CreateFace() {
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_body_0'));
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_skin' + this.characteristics[0] + '_0'));
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_top' + this.characteristics[1]+ '_0'));
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_mid' + this.characteristics[2]+ '_0'));
        this.face.add(this.scene.add.image(0,0,'butleratlas', 'butlers_bottom' + this.characteristics[3]+ '_0'));

    }

    Update(time:number, dt:number) {
        this.face.setPosition(this.body.x, this.body.y - this.OffsetY);
        if(this.body.flipX)
            this.face.scaleX = -1;
            else
            this.face.scaleX = 1;

        if(this.OffsetY > 0) {
            this.HopStrength -= .3;
            this.OffsetY += this.HopStrength;
            if(this.OffsetY < 0)
                this.OffsetY = 0;
            // this.body.setOffset(0, this.OffsetY);
        }

        this.body.setDepth(this.body.y);
        this.face.setDepth(this.body.y);
    }

    Hop(pointer:Phaser.Input.Pointer, x:number, y:number, event:any) {
        console.log('Clicked butler');
        this.HopStrength = this.DefaultHopStrength;
        this.OffsetY = .1;
        event.stopPropagation();
    }
}