import { Weapon as IWeapon } from '../models/weapon';
import { Stats } from './stats.class';
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
    attributes: import("../models/stats/weaponStats").WeaponAttributes;

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
        this.attributes = weapon.attributes;

        console.log(weapon);
    }
    
    getName() {
        return this.name;
    }
    
    getStats() {
        let stats: Stats = new Stats();
        stats.damage = this.attack;
        stats.element = this.elements;
        console.log("weapon", this)
        if(this.attributes) stats.weaponAttributes = this.attributes;

        return stats;
    }
    
    getSkills() {
        throw new Error("Method not implemented.");
    }
}