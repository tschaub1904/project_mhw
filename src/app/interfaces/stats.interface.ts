import { Resistances, Defense } from '../models/stats/armorStats';
import { Attack, WeaponElement, WeaponAttributes } from '../models/stats/weaponStats';

export interface Stats {
     defense: Defense,
     resistance: Resistances,
     damage: Attack,
     element: WeaponElement[]
     weaponAttributes: WeaponAttributes
}