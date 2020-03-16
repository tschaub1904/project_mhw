import { Component, OnInit } from "@angular/core";
import { TileFactoryService } from "src/app/services/tileFactory.service";
import { Charm } from "src/app/models/charm";
import { Armor } from "src/app/classes/armor.class";
import { Weapon } from "src/app/classes/weapon.class";
import { Stats } from "src/app/interfaces/stats.interface";
import { EquipmentLoadout } from "src/app/classes/equipmentLoadout.class";

@Component({
  selector: "app-loadout",
  templateUrl: "./loadout.component.html",
  styleUrls: ["./loadout.component.sass"]
})
export class LoadoutComponent implements OnInit {
  loadout: EquipmentLoadout = new EquipmentLoadout();

  constructor(private tileFactory: TileFactoryService) {}

  ngOnInit() {}

  showList(type: string, subtype?: string) {

    let items = this.tileFactory.getTileItem(type, subtype);
    
    if (items.length === 0)
      return;
      
    this.loadout.setItem(items[0], type);
    
    // items.forEach(element => {
    //   this.loadout.setItem(element, type);
    // });

    this.loadout.printLoadout();
  }
}
