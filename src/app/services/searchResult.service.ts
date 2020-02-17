import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Charm } from '../models/charm';
import { CharmsTileComponent } from '../components/tiles/charms-tile/charms-tile.component';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private resultsSubject = new BehaviorSubject<TileItem[]>([])
  public results = this.resultsSubject.asObservable();

  constructor() { }

  private componentTypes = {
    charms: CharmsTileComponent,
    // monster: MonsterTileComponent,
    // armor: ArmorTileComponent,
    // weapon: WeaponTileComponent,
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