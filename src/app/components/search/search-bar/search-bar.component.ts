import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  private delay = 500;
  private timeout: number;
  private lastQuery: string;

  constructor(public search: SearchComponent) {}

  ngOnInit() {
  }

  onChange(query) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (query === this.lastQuery)
      return;

    this.timeout = window.setTimeout(() => {
      this.lastQuery = query;
      this.search.searchField = query;
    }, this.delay);
  }
}
