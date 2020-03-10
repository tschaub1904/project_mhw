import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from 'src/app/interfaces/tileInterface';
import { GetItemMonsterService } from 'src/app/services/get-item-monster.service';
import { ItemMonster } from 'src/app/interfaces/itemMonsterInterface';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.sass']
})
export class ItemTileComponent implements OnInit, TileComponent {
  @Input() data: any;
  monsterList: ItemMonster[] = [];

  constructor(private itemMonsterService: GetItemMonsterService) { }

  ngOnInit() {
    this.getMonsterList(this.data.id);
  }

  getMonsterList(id: number){
    this.itemMonsterService.getItemMonster(id).subscribe(data => {
      console.log(data);
      this.monsterList = data;
    });
  }

}
