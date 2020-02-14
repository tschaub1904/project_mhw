import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.sass']
})
export class SearchFilterComponent implements OnInit {
  itemList: string[] = ["test1", "test2"];
  title: string;
  constructor(  ) { }

  ngOnInit() {
  }

}
