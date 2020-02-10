import { Skill, SkillRank } from 'src/app/models/skill';
import { Slot } from './dataTypes/slot';
import { Defense, Resistances } from './stats/armorStats';
import { CraftingCost } from './dataTypes/craftingCost';

export interface Armor {
  id: number,
  slug: string,
  name: string,
  type: string,
  rank: string,
  rarity: number,
  defense: Defense,
  resistances: Resistances,
  slots: Slot[],
  skills: Skill[],
  armorSet: SetInfo,
  assets: ArmorAssets,
  crafting: ArmorCraftingInfo,
  attributes: ArmorAttributes
}

export interface ArmorAssets {
  imageMale: string,
  imageFemale: string
}

export interface ArmorCraftingInfo {
  materials: CraftingCost
}

export interface ArmorAttributes {
  requiredGender: Gender
}

export interface ArmorSet { 
  id: number,
  name: string,
  rank: string,
  pieces: Armor[],
  bonus: ArmorSetBonus
}

export interface ArmorSetBonus {
  id: number,
  name: string,
  ranks: ArmorSetBonusRank[]
}

export interface ArmorSetBonusRank {
  pieces: number,
  skill: SkillRank
}

export interface SetInfo {
  id: number,
  name: string,
  rank: string,
  pieces: number[]
}

export enum Gender {
  male = 'male',
  female = 'female'
}