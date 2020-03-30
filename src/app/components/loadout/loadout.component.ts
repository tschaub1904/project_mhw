import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit, OnDestroy } from "@angular/core";
import { TileFactoryService } from "src/app/services/tileFactory.service";
import { EquipmentLoadout } from "src/app/classes/equipmentLoadout.class";
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
	selector: "app-loadout",
	templateUrl: "./loadout.component.html",
	styleUrls: ["./loadout.component.sass"]
})
export class LoadoutComponent implements OnInit, AfterViewInit, OnDestroy {
	loadout: EquipmentLoadout = new EquipmentLoadout();
	items: any[] = [];
	type: string;
	active: boolean = false;
	@ViewChild('picker', { static: false }) picker: ElementRef;

	constructor(private tileFactory: TileFactoryService) { }

	ngOnInit() { }
	ngAfterViewInit() { }
	ngOnDestroy() { }

	showList(type: string, subtype?: string) {

		this.items = this.tileFactory.getTileItem(type, subtype);
		this.type = type;

		if (this.items.length === 0)
			return;

		this.loadout.printLoadout();
		this.active = true;
	}

	setSlot(event: any) {
		console.log("setSLot ", event, this.type)
		this.loadout.setItem(event, this.type);
		this.loadout.printLoadout();
		this.loadout.calcStats();
		this.active = false;
	}

	@HostListener('click', ["$event"])
	mouseClicked(e: MouseEvent) {

		let { x, y } = e;
		this.picker.nativeElement.style.left = x + "px";
		this.picker.nativeElement.style.top = y + "px";
	}

}
