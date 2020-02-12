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

  onSubmit(searchData) {
    this.searchService.setSearchName(searchData.search);
    this.searchService.getResultListByName().subscribe(searchResponse => {
       this.searchResults = [];
       this.searchResults = searchResponse;
       console.log(this.searchResults);
    })
    
  }

}
