import { Component, OnInit, ContentChildren, QueryList, ContentChild, ElementRef } from "@angular/core";
import { TileFactoryService } from "src/app/services/tileFactory.service";
import { EquipmentLoadout } from "src/app/classes/equipmentLoadout.class";

@Component({
	selector: "app-loadout",
	templateUrl: "./loadout.component.html",
	styleUrls: ["./loadout.component.sass"]
})
export class LoadoutComponent implements OnInit {
	loadout: EquipmentLoadout = new EquipmentLoadout();
	items: any[] = [];
	type: string;
	active: boolean = false;

	constructor(private tileFactory: TileFactoryService) { }

	ngOnInit() { }

	showList(type: string, subtype?: string) {

		this.items = this.tileFactory.getTileItem(type, subtype);
		this.type = type;

		if (this.items.length === 0)
			return;

		this.loadout.printLoadout();
		this.active = true;
	}

	setSlot(event: any){
		console.log("setSLot ",event, this.type)
		this.loadout.setItem(event, this.type);
		this.loadout.printLoadout();

		this.active = false;
  }
}
