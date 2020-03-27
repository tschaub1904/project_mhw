import { Component, OnInit } from '@angular/core';
import { TileFactoryService } from 'src/app/services/tileFactory.service';
import { TileOrganizer } from 'src/app/services/tileOrganizer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private tileFactory: TileFactoryService, private to: TileOrganizer) { }

  ngOnInit() {
    this.openLoadoutTile();
  }

  openLoadoutTile() {
    let id = `0_loadout`
    let tileIndex = this.to.getTileIndex(id)
    if (tileIndex >= 0) {
      this.to.moveTile(tileIndex, 0)
      return;
    }

    this.tileFactory.addTile({category: "loadout", data: {id: 0, name: "loadout"}})
  }
}
