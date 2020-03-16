import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {
  @Input() itemList: any[] = [];
  @Output() selectedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    this.selectedItem.emit(item);
  }

}
