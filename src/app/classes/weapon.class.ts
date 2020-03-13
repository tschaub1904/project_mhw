import { Weapon as IWeapon } from '../models/weapon';
import { Stats } from '../interfaces/stats.interface';
import { EquipmentItem } from './equipmentItem.class';

export class Weapon extends EquipmentItem implements IWeapon, Stats {

    id: number; slug: string;
    name: string;
    type: string;
    rarity: number;

    attack: import("../models/stats/weaponStats").Attack;
    slots: import("../models/dataTypes/slot").Slot[];
    elements: import("../models/stats/weaponStats").WeaponElement[];
    crafting: import("../models/weapon").WeaponCraftingInfo;
    assets: import("../models/weapon").WeaponAssets;
    durability: import("../models/stats/weaponStats").WeaponSharpness[];
    elderseal: string;
    damageType: string;
    attribute: import("../models/stats/weaponStats").WeaponAttributes;

    getStats() {
        return this.attack;
    }

}