import { Weapon as IWeapon } from '../models/weapon';
import { Stats } from '../interfaces/stats.interface';
import { EquipmentItem } from './equipmentItem.class';

export class Weapon extends EquipmentItem implements IWeapon {
    slug: string;
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

    constructor(weapon: IWeapon) {
        super();
        
        this.id = weapon.id;
        this.name = weapon.name;
        this.type = weapon.type;
        this.rarity = weapon.rarity;
        this.attack = weapon.attack;
        this.slots = weapon.slots;
        this.elements = weapon.elements;
        this.crafting = weapon.crafting;
        this.assets = weapon.assets;
        this.durability = weapon.durability;
        this.elderseal = weapon.elderseal;
        this.damageType = weapon.damageType;
        this.attribute = weapon.attribute;

        console.log(this);
    }
    
    getName() {
        return this.name;
    }
    
    getStats() {
        throw new Error("Method not implemented.");
    }
}