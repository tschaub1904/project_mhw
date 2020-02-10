import { Ailment } from 'src/app/models/ailments';
import { Location } from 'src/app/models/location';
import { Item } from 'src/app/models/item';
import { MonsterResistance, MonsterWeakness } from 'src/app/models/stats/monsterStats'

export interface Monster {
    id: number,
    name: string,
    type: string,
    species: string,
    description: string,
    elements: string[],
    ailments: Ailment[],
    locations: Location[],
    resistances: MonsterResistance[],
    weakness: MonsterWeakness[],
    reward: MonsterReward[],
  }

  export interface MonsterReward {
    id: number,
    item: Item,
    conditions: RewardCondition[]
  }

  export interface RewardCondition {
    type: string,
    subtype: string,
    rank: string,
    quantity: number,
    change: number
  }