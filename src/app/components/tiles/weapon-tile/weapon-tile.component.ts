import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from 'src/app/interfaces/tileInterface';

@Component({
  selector: 'app-weapon-tile',
  templateUrl: './weapon-tile.component.html',
  styleUrls: ['./weapon-tile.component.sass']
})
export class WeaponTileComponent implements OnInit, TileComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    
  }

}
