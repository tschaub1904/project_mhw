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
    console.log("type", this.types[type]);

    this.tileFactory.getTileItem(type).forEach(element => {
      let name = EquipmentLoadout.Types[type];
      this.loadout.setItem<(typeof name)>(element);

      console.log("type", this.types[type]);
    });
  }

  types = {
    armor: Armor,
    weapons: Weapon
  };
}
