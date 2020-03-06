import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Charm } from '../models/charm';
import { CharmsTileComponent } from '../components/tiles/charms-tile/charms-tile.component';
import { MonsterTileComponent } from '../components/tiles/monster-tile/monster-tile.component';
import { ArmorTileComponent } from '../components/tiles/armor-tile/armor-tile.component';
import { WeaponTileComponent } from '../components/tiles/weapon-tile/weapon-tile.component';
import { SkillTileComponent } from '../components/tiles/skill-tile/skill-tile.component';
import { ItemTileComponent } from '../components/tiles/item-tile/item-tile.component';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private resultsSubject = new BehaviorSubject<TileItem[]>([])
  public results = this.resultsSubject.asObservable();

  constructor() { }

  private componentTypes = {
    charms: CharmsTileComponent,
    monsters: MonsterTileComponent,
    armor: ArmorTileComponent,
    weapons: WeaponTileComponent,
    skills: SkillTileComponent,
    items: ItemTileComponent
  }

  public addResult(result: any) {
    console.info("addResult", result);
    let newResult: TileItem = {
      component: this.componentTypes[result.category],
      data: result.data,
    }
    console.info("new Result", newResult);

    this.resultsSubject.getValue().push(newResult);
  }

  public removeResult(index: number) {
    // console.info("removeResult", index, this.resultsSubject.getValue()[index]);
    this.resultsSubject.getValue().splice(index, 1);
  }

  public getTileItem(category: string){
    return 
  }

}

export class TileItem {
  constructor(public component: Type<any>, public data: any){}
}