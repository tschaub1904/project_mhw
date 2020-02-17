import { Component, OnInit, Input } from '@angular/core';
import { Charm } from 'src/app/models/charm';
import { TileComponent } from 'src/app/interfaces/tileInterface';

@Component({
  selector: 'app-charms-tile',
  templateUrl: './charms-tile.component.html',
  styleUrls: ['./charms-tile.component.sass']
})
export class CharmsTileComponent implements OnInit, TileComponent {
  @Input() data: any;
  

  constructor() {

  }

  ngOnInit() {
  }

}
