import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { SearchResultService } from 'src/app/services/searchResult.service';

@Component({
  selector: 'app-tile-area',
  templateUrl: './tile-area.component.html',
  styleUrls: ['./tile-area.component.sass']
})
export class TileAreaComponent implements OnInit, AfterViewInit {
  tileList: any[] = [];
  @ViewChildren('tileWrapper', {read: ElementRef}) tileWrappers: QueryList<ElementRef>;
  readonly baseHeight: number = 250;
  
  constructor(private searchResults: SearchResultService) { }

  ngOnInit() {
    this.searchResults.results.subscribe((data) => {
      console.log(data);
      this.tileList = data;
    });
  }

  ngAfterViewInit() {
    this.tileWrappers.changes.subscribe(data => {
      for (let result of data._results) {
        let {offsetHeight} = result.nativeElement;
        
        let m = Math.ceil(offsetHeight / this.baseHeight);
        let actual_m = Math.min(3, m);
        
        result.nativeElement.style.height = actual_m*this.baseHeight+'px';
        
      }
    });
  }

  close(index) {
    this.searchResults.removeResult(index);
  }

}
