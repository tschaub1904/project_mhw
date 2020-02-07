import { Component, OnInit } from '@angular/core';
import { CharmService, Charm } from 'src/app/services/charms/charm.service';

@Component({
  selector: 'app-charms-list',
  templateUrl: './charms-list.component.html',
  styleUrls: ['./charms-list.component.sass']
})
export class CharmsListComponent implements OnInit {
  charms: Charm[];
  constructor(private charmService: CharmService) { }

  ngOnInit() {
    this.charmService.getAllCharm().subscribe(charms => {
      this.charms = charms;
    })
  }

}
