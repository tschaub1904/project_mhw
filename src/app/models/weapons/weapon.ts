import { Attack } from 'src/app/models/weapons/weaponAttack';
import { Slot } from 'src/app/models/dataTypes/slot';
import { WeaponElement } from 'src/app/models/weapons/weaponElement';
import { WeaponCraftingInfo } from 'src/app/models/weapons/weaponCraftingInfo';
import { WeaponAssets } from 'src/app/models/weapons/weaponAssets';
import { WeaponSharpness } from 'src/app/models/weapons/weaponDurability';
import { WeaponAttributes } from 'src/app/models/weapons/weaponAttributes';

export interface Weapon {
    id: number,
    slug: string,
    name: string,
    type: string,
    rarity: number,
    attack: Attack,
    slots: Slot[],
    elements: WeaponElement[],
    crafting: WeaponCraftingInfo,
    assets: WeaponAssets,
    durability: WeaponSharpness[],
    elderseal: string,
    damageType: string,
    attribute: WeaponAttributes
}