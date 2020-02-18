import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from 'src/app/interfaces/tileInterface';

@Component({
  selector: 'app-monster-tile',
  templateUrl: './monster-tile.component.html',
  styleUrls: ['./monster-tile.component.sass']
})
export class MonsterTileComponent implements OnInit, TileComponent {
  @Input() data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
