import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { SearchObject } from 'src/app/models/search';
import { GetItemService } from 'src/app/services/getItem.service';
import { Charm } from 'src/app/models/charm';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.sass']
})
export class ResultListComponent implements OnInit {

  searchForm;
  @Input() searchResults: SearchObject[];
  constructor(private searchService: SearchService, private formBuilder: FormBuilder, private getItemService: GetItemService) {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  ngOnInit() {
  }

  onClick(result: SearchObject){
    // this.getItemService.getItem<Charm>(result.id, result.category).subscribe(data => 
      
    //   );
  }

}
