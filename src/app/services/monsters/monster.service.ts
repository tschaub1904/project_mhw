import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item, SkillRank } from 'src/app/services/charms/charm.service'

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
export interface Ailment {
  id: number,
  name: string,
  description: string,
  recovery: Recovery,
  protection: Protection
}
export interface Location {
  id: number,
  name: string,
  zoneCount: number,
  camps: Camp[]
}
export interface Camp {
  id: number,
  name: string,
  zone: number
}
export interface Recovery {
  actions: string[],
  items: Item[]
}
export interface Protection {
  items: Item[],
  skills: Skill[],
}
export interface Skill {
  id: number,
  slug: string,
  name: string,
  description: string,
  ranks: SkillRank[]
}
export interface MonsterResistance {
  element: string[],
  condition: string
}
export interface MonsterWeakness {
  element: string[],
  stars: number,
  condition: string
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


@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  constructor( private http: HttpClient) { }

  getMonster(id: number): Observable<Monster> {
    return this.http.get<Monster>('https://mhw-db.com/monsters/' + id)
  }
  getAllMonsters(): Observable<Monster[]> {
    return this.http.get<Monster[]>('https://mhw-db.com/monsters');
  }
}
