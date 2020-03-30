import { Armor } from "./armor.class";
import { Weapon } from "./weapon.class";
import { Charm } from "./charm.class";
import { EquipmentItem } from './equipmentItem.class';
import { TypeScriptEmitter } from '@angular/compiler';
import { Stats } from './stats.class';

export class EquipmentLoadout {
  public Weapon: EquipmentItem;
  public Head: EquipmentItem;
  public Chest: EquipmentItem;
  public Waist: EquipmentItem;
  public Legs: EquipmentItem;
  public Gloves: EquipmentItem;
  public Charm: EquipmentItem;

  public Stats: Stats = new Stats();

  calcStats() {
    if (this.Weapon) {
      this.Stats = this.Weapon.getStats();
    }
    let statList = [];
    if(this.Head) statList.push(this.Head.getStats());
    if(this.Chest) statList.push(this.Chest.getStats());
    if(this.Waist) statList.push(this.Waist.getStats());
    if(this.Legs) statList.push(this.Legs.getStats());
    if(this.Gloves) statList.push(this.Gloves.getStats());
    
    statList.forEach(stat => {
      if(stat !=null){
        this.Stats.defense.base += stat.defense.base;
        this.Stats.defense.max += stat.defense.max;
        this.Stats.defense.augmented += stat.defense.augmented;
  
        this.Stats.resistance.fire += stat.resistance.fire;
        this.Stats.resistance.water += stat.resistance.water;
        this.Stats.resistance.ice += stat.resistance.ice;
        this.Stats.resistance.thunder += stat.resistance.thunder;
        this.Stats.resistance.dragon += stat.resistance.dragon;
      }
    });
  }

  public static Types = {
    armor: Armor,
    weapons: Weapon,
    charms: Charm
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
      case "charms":
        this.Charm = new Charm(item);
        break;
      default:
        console.warn("unknown type ", type);
        break;
    }
  }

  printLoadout() {
    console.log("printLoadout", this);
  }
}
