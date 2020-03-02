import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { SearchObject } from 'src/app/models/search';
import { GetItemService } from 'src/app/services/getItem.service';
import { SearchResultService } from 'src/app/services/searchResult.service';
import { Charm } from 'src/app/models/charm';
import { TileOrganizer } from 'src/app/services/tileOrganizer.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.sass']
})
export class ResultListComponent implements OnInit {

  searchForm;
  @Input() searchResults: SearchObject[];
  constructor(private getItemService: GetItemService, private resultService: SearchResultService, private tileOrganizer: TileOrganizer) {
    
  }

  ngOnInit() {
  }

  onClick(result: SearchObject){
    let id = `${result.id}_${result.name}`
    let tileIndex = this.tileOrganizer.getTileIndex(id)
    if (tileIndex >= 0) {
      this.tileOrganizer.moveTile(tileIndex, 0)
      return;
    }
    this.getItemService.getItem(result.id, result.category).subscribe(data => 
      {
        this.resultService.addResult({ category: result.category, data: data });
      });
  }

}
