import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { SearchObject } from 'src/app/models/search';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.sass']
})
export class ResultListComponent implements OnInit {

  searchForm;
  @Input() searchResults: SearchObject[];
  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  ngOnInit() {
  }

}
