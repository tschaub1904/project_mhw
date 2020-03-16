import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharmsTileComponent } from '../components/tiles/charms-tile/charms-tile.component';
import { MonsterTileComponent } from '../components/tiles/monster-tile/monster-tile.component';
import { ArmorTileComponent } from '../components/tiles/armor-tile/armor-tile.component';
import { WeaponTileComponent } from '../components/tiles/weapon-tile/weapon-tile.component';
import { SkillTileComponent } from '../components/tiles/skill-tile/skill-tile.component';
import { ItemTileComponent } from '../components/tiles/item-tile/item-tile.component';
import { LoadoutComponent } from '../components/loadout/loadout.component';
import { Weapon } from '../classes/weapon.class';

@Injectable({
  providedIn: 'root'
})
export class TileFactoryService {
  private resultsSubject = new BehaviorSubject<TileItem[]>([])
  public results = this.resultsSubject.asObservable();

  constructor() { }

  private componentTypes = {
    charms: CharmsTileComponent,
    monsters: MonsterTileComponent,
    armor: ArmorTileComponent,
    weapons: WeaponTileComponent,
    skills: SkillTileComponent,
    items: ItemTileComponent,
    loadout: LoadoutComponent
  }

  public addTile(result: any) {
    let newResult: TileItem = {
      component: this.componentTypes[result.category],
      data: result.data,
    }

    this.resultsSubject.getValue().push(newResult);
  }

  public removeTile(index: number) {
    this.resultsSubject.getValue().splice(index, 1);
  }

  public getTileItem(category: string, subtype?: string){
    let temp = [];
    this.resultsSubject.getValue().filter((result) => {
      if (subtype) 
        return result.component == (this.componentTypes[category])
          && result.data.type 
          && result.data.type == subtype;

      return result.component == (this.componentTypes[category])
       
    }).forEach(element => {
      temp.push(element.data)
    });
    console.log(temp);
    return temp;

  }
}

export class TileItem {
  constructor(public component: Type<any>, public data: any){}
}