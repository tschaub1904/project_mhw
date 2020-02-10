import { Component, OnInit } from '@angular/core';
import { CharmService } from 'src/app/services/charm.service';
import { Charm } from 'src/app/models/charm';

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
