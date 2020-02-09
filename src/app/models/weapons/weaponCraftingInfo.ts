import { CraftingCost } from 'src/app/models/dataTypes/craftingCost';

export interface WeaponCraftingInfo{
    craftable: boolean,
    previous?: number,
    branches: number[],
    craftingMaterials: CraftingCost[],
    upgradeMaterials: CraftingCost[]
}