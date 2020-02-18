import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from 'src/app/interfaces/tileInterface';

@Component({
  selector: 'app-armor-tile',
  templateUrl: './armor-tile.component.html',
  styleUrls: ['./armor-tile.component.sass']
})
export class ArmorTileComponent implements OnInit, TileComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
