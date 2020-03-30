import { Charm as ICharm } from 'src/app/models/charm'
import { EquipmentItem } from './equipmentItem.class';

export class Charm extends EquipmentItem implements ICharm {

	discriminator: "charm";
	slug: string;
	ranks: import("../models/charm").CharmRank[];

	constructor(charm: ICharm) {
		super();

		this.id = charm.id
		this.name = charm.name;
		this.discriminator = charm.discriminator;
		this.ranks = charm.ranks;
	}

	getName() {
		console.log("YES")
		return this.name;
	}

	getStats() {
		throw new Error("Method not implemented.");
	}
	
	getSkills() {
		throw new Error("Method not implemented.");
	}
}