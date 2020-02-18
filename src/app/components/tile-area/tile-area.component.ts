import { Component, OnInit } from '@angular/core';
import { Charm } from 'src/app/models/charm';
import { CharmsDetailsComponent } from '../charms/charms-details/charms-details.component';
import { SearchResultService } from 'src/app/services/searchResult.service';

@Component({
  selector: 'app-tile-area',
  templateUrl: './tile-area.component.html',
  styleUrls: ['./tile-area.component.sass']
})
export class TileAreaComponent implements OnInit {
  tileList: any[] = [];
  
  constructor(private searchResults: SearchResultService) { }

  ngOnInit() {
    this.searchResults.results.subscribe((data) => {
      console.log(data);
      this.tileList = data;
    });
  }

  close(index) {
    this.searchResults.removeResult(index);
  }

}
