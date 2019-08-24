import { Butler } from "../entities/Butler";

export class GameScene extends Phaser.Scene {
    Murderer:Butler;
    AllButlers:Array<Butler>;
    TotalCharacteristics:number;
    CharacteristicChoices:Array<number>
    AllPossibleButlers:Array<Array<number>>

    preload() {
    	this.AllPossibleButlers = [];
    	this.TotalCharacteristics = 4;
    	this.CharacteristicChoices = [4,4,4,4];
    	var curCharacteristic:Array<number> = [0,0,0,0];
    	var maxCharacteristic:Array<number> = [3,3,3,3];
    	while(JSON.stringify(curCharacteristic) !== JSON.stringify(maxCharacteristic)) {
			this.AllPossibleButlers.push(curCharacteristic);
			curCharacteristic[3]++;
			if(curCharacteristic[3] > maxCharacteristic[3]) {
				curCharacteristic[3] = 0;
				curCharacteristic[2]++;
				if(curCharacteristic[2] > maxCharacteristic[2]) {
					curCharacteristic[2] = 0;
					curCharacteristic[1]++;
					if(curCharacteristic[1] > maxCharacteristic[1]) {
						curCharacteristic[1] = 0;
						curCharacteristic[0]++;
					}
				}
			}
    	}
    	for(var i = 0; i < this.AllPossibleButlers.length; i++) {
    		var butlerStr:string = "";
    		for(var j = 0; j < this.AllPossibleButlers[i].length; j++) {
    			butlerStr += this.AllPossibleButlers[i][j].toString();
    		}
    		console.log(butlerStr);
    	}
    }
    create() {
    }

    update(time:number, dt:number) {
        this.AllButlers.forEach(b => {
            b.Update(time, dt);
        });
    }

}