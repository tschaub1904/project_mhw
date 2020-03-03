import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from 'src/app/interfaces/tileInterface';
import { GetItemService } from 'src/app/services/getItem.service';
import { Weapon } from 'src/app/models/weapon';
import { SearchResultService } from 'src/app/services/searchResult.service';
import { TileOrganizer } from 'src/app/services/tileOrganizer.service';

@Component({
  selector: 'app-weapon-tile',
  templateUrl: './weapon-tile.component.html',
  styleUrls: ['./weapon-tile.component.sass']
})
export class WeaponTileComponent implements OnInit, TileComponent {
  @Input() data: any;
  weaponBranchNames: string[] = [];
  weaponPreviousName: string;

  constructor(private getItemService: GetItemService, private searchResultService: SearchResultService, private tileOrganizer: TileOrganizer) { }

  ngOnInit() {
    this.data.crafting.branches.forEach(weaponId => {
      this.getWeaponName((name: string) => {this.weaponBranchNames.push(name)}, weaponId)
    });

    if(this.data.crafting.previous){
      this.getWeaponName((name: string) => {this.weaponPreviousName = name}, this.data.crafting.previous)
    }
  }

  addOne(index) {
    return index + 1
  }

  getWeaponName(callback, id: number){
    this.getItemService.getItem<Weapon>(id, 'weapons').subscribe(data =>{
      callback(data.name)
    });
  }

  onClick(weaponId: number, weaponName: string){
    let id = `${weaponId}_${weaponName}`
    let tileIndex = this.tileOrganizer.getTileIndex(id)
    if (tileIndex >= 0) {
      this.tileOrganizer.moveTile(tileIndex, 0)
      return;
    }
    this.getItemService.getItem(weaponId, "weapons").subscribe(data => 
      {
        this.searchResultService.addResult({ category: "weapons", data: data });
      });
  }
}
