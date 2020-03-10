import { Component, OnInit } from '@angular/core';
import { TileFactoryService } from 'src/app/services/tileFactory.service';
import { Charm } from 'src/app/models/charm'
import { Armor } from 'src/app/classes/armorClass';

@Component({
  selector: 'app-loadout',
  templateUrl: './loadout.component.html',
  styleUrls: ['./loadout.component.sass']
})
export class LoadoutComponent implements OnInit {
  // equipmentList = [];
  // head: Armor;
  constructor(private tileFactory: TileFactoryService) { }

  ngOnInit() {
  }

  // showList(type: string) {
  //   this.types[type]
  //   this.tileFactory.getTileItem(type).forEach(element => {
  //     this.types[type] = element;
      
  //     console.log("type", this.types[type])
  //   });

  //   let obj = this.tileFactory.getTileItem(type);
  //   obj.forEach(element => {
  //     console.log(typeof element)
  //   });
  // }

  //  types = {
  //   armor:  Armor,

  // }
}
