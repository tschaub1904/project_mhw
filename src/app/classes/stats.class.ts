import { Stats as IStats } from '../interfaces/stats.interface';

export class Stats implements IStats
{
    defense: import("../models/stats/armorStats").Defense;    
    resistance: import("../models/stats/armorStats").Resistances;
    damage: import("../models/stats/weaponStats").Attack;
    element: import("../models/stats/weaponStats").WeaponElement[];
    weaponAttributes: import("../models/stats/weaponStats").WeaponAttributes;

    constructor(){
        this.defense = {base: 0, max: 0, augmented: 0};
        this.resistance = {dragon: 0, fire: 0, ice: 0, thunder: 0, water: 0};
        this.damage = {display: 0, raw: 0}
        this.element = [];
        this.weaponAttributes = {affinity: 0, defense: 0};
    }
}