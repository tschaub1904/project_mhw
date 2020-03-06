import {Armor as IArmor} from 'src/app/models/armor'
export class Armor implements IArmor
{
    id: number;    slug: string;
    name: string;
    type: string;
    rank: string;
    rarity: number;
    defense: import("../models/stats/armorStats").Defense;
    resistances: import("../models/stats/armorStats").Resistances;
    slots: import("../models/dataTypes/slot").Slot[];
    skills: import("../models/skill").SkillRank[];
    armorSet: import("../models/armor").SetInfo;
    assets: import("../models/armor").ArmorAssets;
    crafting: import("../models/armor").ArmorCraftingInfo;
    attributes: import("../models/armor").ArmorAttributes;
}