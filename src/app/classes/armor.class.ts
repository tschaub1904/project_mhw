import { Armor as IArmor } from 'src/app/models/armor'
import { EquipmentItem } from './equipmentItem.class';
export class Armor extends EquipmentItem implements IArmor
{
    slug: string;
    rank: string;
    type: string;
    rarity: number;
    defense: import("../models/stats/armorStats").Defense;
    resistances: import("../models/stats/armorStats").Resistances;
    slots: import("../models/dataTypes/slot").Slot[];
    skills: import("../models/skill").SkillRank[];
    armorSet: import("../models/armor").SetInfo;
    assets: import("../models/armor").ArmorAssets;
    crafting: import("../models/armor").ArmorCraftingInfo;
    attributes: import("../models/armor").ArmorAttributes;

    constructor(private armor: IArmor) { 
        super(); 

        this.id = armor.id;
        this.name = armor.name;
        this.type = armor.type;
        this.rarity = armor.rarity;
        this.defense = armor.defense;
        this.resistances = armor.resistances;
        this.slots = armor.slots;
        this.skills = armor.skills;
        this.armorSet = armor.armorSet;
        this.assets = armor.assets;
        this.crafting = armor.crafting;
        this.attributes = armor.attributes;
    }

    getStats() {
        return this.armor.defense;
    }

    getName() {
        return this.name + "(Armor)";
    }
}