import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { SearchObject } from 'src/app/models/search';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  searchForm;
  searchResults: SearchObject[];
  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  ngOnInit() {
  }

  onChange(query) {
    if (query.length < 4) {
      this.searchResults = [];
      return;
    }
    this.searchService.setSearchName(query);
    this.searchService.getResultListByName().subscribe(searchResponse => {
      this.searchResults = searchResponse;
   })
  }
}
