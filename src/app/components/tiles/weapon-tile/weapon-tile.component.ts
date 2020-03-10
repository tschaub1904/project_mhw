import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from 'src/app/interfaces/tileInterface';
import { GetItemService } from 'src/app/services/getItem.service';
import { Weapon } from 'src/app/models/weapon';
import { TileFactoryService } from 'src/app/services/tileFactory.service';
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

  constructor(private getItemService: GetItemService) { }

  ngOnInit() {
    this.data.crafting.branches.forEach(weaponId => {
      this.getWeaponName((name: string) => { this.weaponBranchNames.push(name) }, weaponId)
    });

    if (this.data.crafting.previous) {
      this.getWeaponName((name: string) => { this.weaponPreviousName = name }, this.data.crafting.previous)
    }
  }

  getWeaponName(callback, id: number) {
    this.getItemService.getItem<Weapon>(id, 'weapons').subscribe(data => {
      callback(data.name)
    });
  }
}
