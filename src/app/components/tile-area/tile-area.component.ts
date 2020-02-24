import { Component, OnInit, AfterViewInit, AfterContentInit, HostListener, ElementRef } from '@angular/core';
import { SearchResultService } from 'src/app/services/searchResult.service';
import { TileOrganizer } from 'src/app/services/tileOrganizer.service';

@Component({
  selector: 'app-tile-area',
  templateUrl: './tile-area.component.html',
  styleUrls: ['./tile-area.component.sass']
})
export class TileAreaComponent implements OnInit, AfterViewInit {
  tileList: any[] = [];
  readonly baseHeight: number = 250;
  
  constructor(private searchResults: SearchResultService, private ref: ElementRef, private tileOrganizer: TileOrganizer) { }

  ngOnInit() {
    this.searchResults.results.subscribe((data) => {
      console.log(data);
      this.tileList = data;
    });
  }

  ngAfterViewInit() {
    this.tileOrganizer.calcColumns(this.ref.nativeElement.offsetWidth);
  }

  @HostListener('window:resize')
  onResize() {
    this.tileOrganizer.calcColumns(this.ref.nativeElement.offsetWidth);
  }

  close(index) {
    this.searchResults.removeResult(index);
  }

}
