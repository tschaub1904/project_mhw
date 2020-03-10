import { Component, OnInit } from '@angular/core';
import { TileFactoryService } from 'src/app/services/tileFactory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private tileFactory: TileFactoryService) { }

  ngOnInit() {
  }

  openLoadoutTile() {
    this.tileFactory.addTile({category: "loadout", data: {}})
  }

}
