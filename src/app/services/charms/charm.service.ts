import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http'

export interface Charm {
  id: number,
  slug: string,
  name: string,
  ranks: CharmRank[]
}

export interface CharmRank {
  name: string,
  level: number,
  rarity: number,
  skills: SkillRank[],
  crafting: CharmRankCrafting
}

export interface SkillRank {
  id: number,
  slug: string,
  level: number,
  description: string,
  skill: number,
  skillName: string,
  modifiers: SkillRankModifiers
}

export interface SkillRankModifiers {
  affinity: number,
  attack: number,
  damageFire: number,
  damageWater: number,
  damageIce: number,
  damageThunder: number,
  damageDragon: number,
  defense: number,
  health: number,
  sharpnessBonus: number,
  resistAll: number,
  resistFire: number,
  resistWater: number,
  resistIce: number,
  resistThunder: number,
  resistDragon: number
}

export interface CharmRankCrafting {
  craftable: boolean,
  materials: CraftingCost[]
}

export interface CraftingCost {
  quantity: number,
  item: Item
}

export interface Item {
  id: number,
  name: string,
  description: string,
  rarity: number,
  carryLimit: number,
  value: number
}


@Injectable({
  providedIn: 'root'
})
export class CharmService {
  charms: Charm[] = [];

  constructor( private http: HttpClient) { }

  getCharm(id: number): Observable<Charm> {
    return this.http.get<Charm>('https://mhw-db.com/charms/' + id)
  }
  getAllCharm(): Observable<Charm[]> {
    console.log("test");
    var temp = this.http.get<Charm[]>('https://mhw-db.com/charms');
    console.log(temp);
    return temp;
  }
}
