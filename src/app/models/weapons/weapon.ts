import { Attack, WeaponElement, WeaponSharpness, WeaponAttributes } from 'src/app/models/stats/weaponStats';
import { Slot } from 'src/app/models/dataTypes/slot';
import { CraftingCost } from 'src/app/models/dataTypes/craftingCost';

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

export interface WeaponCraftingInfo{
    craftable: boolean,
    previous?: number,
    branches: number[],
    craftingMaterials: CraftingCost[],
    upgradeMaterials: CraftingCost[]
}

export interface WeaponAssets{
    icon: string,
    image: string
}