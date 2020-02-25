import { Component, OnInit, Input } from '@angular/core';
import { isArray } from 'util';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.sass']
})
export class ItemInfoComponent implements OnInit {
  @Input() label: string;
  @Input() list: any;

  constructor() { }

  ngOnInit() {
    if(!isArray(this.list)){
      var dataArray = [];
      dataArray.push(this.list);
      this.list = dataArray;
    }
  }
}
