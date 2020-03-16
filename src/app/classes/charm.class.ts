import { Charm as ICharm } from 'src/app/models/charm'
import { EquipmentItem } from './equipmentItem.class';
export class Charm extends EquipmentItem implements ICharm {
	discriminator: "charm";
	slug: string;
	ranks: import("../models/charm").CharmRank[];

	constructor(private charm: ICharm) {
		super();

		this.discriminator = charm.discriminator;
		this.ranks = charm.ranks;
	}


	getStats() {
		throw new Error("Method not implemented.");
	}
	getName() {
		throw new Error("Method not implemented.");
	}

}