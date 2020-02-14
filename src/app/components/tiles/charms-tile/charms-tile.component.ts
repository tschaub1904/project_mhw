import { Component, OnInit, Input } from '@angular/core';
import { Charm } from 'src/app/models/charm';

@Component({
  selector: 'app-charms-tile',
  templateUrl: './charms-tile.component.html',
  styleUrls: ['./charms-tile.component.sass']
})
export class CharmsTileComponent implements OnInit {
  @Input() charm: Charm;

  constructor() {

  }

  ngOnInit() {
  }

}
