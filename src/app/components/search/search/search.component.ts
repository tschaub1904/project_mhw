import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SearchObject } from 'src/app/models/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  searchResults: SearchObject[];

  private _searchField: string;
  public get searchField(): string {
    return this._searchField;
  }
  public set searchField(v: string) {
    this._searchField = v;
    this.search();
  }

  private _categoryFilter: string;
  public get categoryFilter(): string {
    return this._categoryFilter;
  }
  public set categoryFilter(v: string) {
    this._categoryFilter = v;
  }

  constructor(public searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    if (this.searchField.length < 4) {
      this.searchResults = [];
      return;
    }
    this.searchService.setSearchName(this.searchField);
    this.searchService.getResultListByName().subscribe(searchResponse => {
      this.searchResults = searchResponse;
    });
  }
}
