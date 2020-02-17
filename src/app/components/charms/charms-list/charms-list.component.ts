import { Component, OnInit } from '@angular/core';
import { Charm } from 'src/app/models/charm';
import { GetItemService } from 'src/app/services/getItem.service';

@Component({
  selector: 'app-charms-list',
  templateUrl: './charms-list.component.html',
  styleUrls: ['./charms-list.component.sass']
})
export class CharmsListComponent implements OnInit {
  charms: Charm;
  constructor(private getItemService: GetItemService) { }

  ngOnInit() {
    this.getItemService.getItem<Charm>(234,"charms").subscribe(charms => {
      this.charms = charms;
      console.log(charms);
    })
  }
}
