import { Armor } from "./armor.class";
import { Weapon } from "./weapon.class";
import { EquipmentItem } from './equipmentItem.class';

export class EquipmentLoadout {
  public Weapon: Weapon;
  public Head: Armor;
  public Body: Armor;
  public Belt: Armor;
  public Legs: Armor;
  public Hands: Armor;

  calcStats() {
    //DO STUFF
  }

  public static Types = {
    armor: Armor,
    weapons: Weapon
  };

  setItem<T extends EquipmentItem>(item: T){
    console.log("new type", item.name)
  }
}
