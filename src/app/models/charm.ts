import { SkillRank } from 'src/app/models/skill';
import { CraftingCost } from 'src/app/models/dataTypes/craftingCost'

export interface Charm {
    id: number,
    slug: string,
    name: string,
    ranks: CharmRank[]
  }

  export interface CharmRank {
    level: number,
    rarity: number,
    skills: SkillRank[],
    crafting: CharmRankCrafting
  }

  export interface CharmRankCrafting {
    craftable: boolean,
    materials: CraftingCost[]
  }