import { Item } from 'src/app/models/item';
import { Skill } from 'src/app/models/skill'

export interface Ailment {
    id: number,
    name: string,
    description: string,
    recovery: Recovery,
    protection: Protection
  }

  export interface Recovery {
    actions: string[],
    items: Item[]
  }

  export interface Protection {
    items: Item[],
    skills: Skill[],
  }