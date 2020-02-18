import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from 'src/app/interfaces/tileInterface';
import { isArray } from 'util';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.sass']
})
export class ItemTileComponent implements OnInit, TileComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    if(!isArray(this.data)){
      var dataArray = [];
      dataArray.push(this.data);
      this.data = dataArray;
    }
  }

}
