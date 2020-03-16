import { Armor } from "./armor.class";
import { Weapon } from "./weapon.class";
import { EquipmentItem } from './equipmentItem.class';
import { TypeScriptEmitter } from '@angular/compiler';

export class EquipmentLoadout {
  public Weapon: EquipmentItem;
  public Head: EquipmentItem;
  public Chest: EquipmentItem;
  public Waist: EquipmentItem;
  public Legs: EquipmentItem;
  public Gloves: EquipmentItem;

  calcStats() {
    //DO STUFF
  }

  public static Types = {
    armor: Armor,
    weapons: Weapon
  };

  setItem(item: any, type: string) {
    console.log("new type", item.name, type);

    switch (type) {
      case "weapons":
        this.Weapon = new Weapon(item);
        break;
      case "armor":
        let temp: Armor = new Armor(item);
        if (temp.type == 'head') this.Head = temp;
        else if (temp.type == 'chest') this.Chest = temp;
        else if (temp.type == 'waist') this.Waist = temp;
        else if (temp.type == 'legs') this.Legs = temp;
        else if (temp.type == 'gloves') this.Gloves = temp;
        break;
      case "charm":
        break;
      default:
        console.warn("unknown type ", type);
        break;
    }
  }

  printLoadout() {
    console.log("printLoadout", this);
    // console.log(this.Weapon.getName());
  }
}
