export class Notebook extends Phaser.GameObjects.Container {
    scene:Phaser.Scene;
    Notebook:Phaser.GameObjects.Image;
    selectedLevels:Array<Array<number>>;
    selectedIcons:Array<Array<Phaser.GameObjects.Sprite>>;

    constructor(scene:Phaser.Scene) {
        super(scene);
        this.scene = scene;
        this.scene.add.existing(this);
        this.Notebook = scene.add.image(0,0, 'butleratlas', 'notebook').setOrigin(0,0);
        this.add(this.Notebook);
        this.add(scene.add.text(30, 70, 'Skin').setColor('black').setFontSize(20));
        this.add(scene.add.text(30, 150, 'Hair').setColor('black').setFontSize(20));
        this.add(scene.add.text(30, 230, 'Eyes').setColor('black').setFontSize(20));
        this.add(scene.add.text(30, 310, 'Facial Hair').setColor('black').setFontSize(20));

        this.selectedLevels = [];
        this.selectedIcons = [];


        for(let i =0; i < 4; i++) {
            this.selectedIcons.push([]);
            this.selectedLevels.push([]);
            for(let j = 0; j < 4; j++) {
                let icon = new Icon(scene, i,j);
                icon.setPosition(j*64 + 40, i * 80 + 130);
                this.add(icon);
                let s = this.CreateSelectedIcon(i,j);
                s.setPosition(j*64 + 40, i * 80 + 130);
                this.selectedIcons[i].push(s);
                this.selectedLevels[i].push(3);
                this.add(s);
            }
        }

        this.setDepth(1000);

    }

    CreateSelectedIcon(i:number, j:number):Phaser.GameObjects.Sprite {
        let icon = this.scene.add.sprite(0,0,'butleratlas', 'butlers_selected3_0').setInteractive();
        icon.on('pointerdown', (pointer, x,y,event) => {
            this.selectedLevels[i][j]++;
            if(this.selectedLevels[i][j] == 6)
                this.selectedLevels[i][j] = 1;
            icon.setFrame(`butlers_selected${this.selectedLevels[i][j]}_0`);
            event.stopPropagation();
        }, this);

        return icon;
    }

}

class Icon extends Phaser.GameObjects.Image {
    constructor(scene:Phaser.Scene, feature:number, icon:number) {
        super(scene, 0,0, 'butleratlas');
        scene.add.existing(this);
        let frameName = '';
        switch (feature) {
            case 0:
                frameName = 'skin'
                break;
            case 1:
                frameName = 'top'
                break;
            case 2:
                frameName = 'mid'
                break;
            case 3:
                frameName = 'bottom'
                break;
        
            default:
                break;
        }
        this.setFrame(`butlers_${frameName}${icon}_0`);

    }
}