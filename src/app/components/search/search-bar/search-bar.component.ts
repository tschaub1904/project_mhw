import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  
  constructor(public search: SearchComponent) {}

  ngOnInit() {
  }

  onChange(query) {
    this.search.searchField = query;
  }
}
