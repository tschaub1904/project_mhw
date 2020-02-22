import { Component, OnInit, AfterViewInit, AfterContentInit, HostListener, ElementRef } from '@angular/core';
import { SearchResultService } from 'src/app/services/searchResult.service';
import { TileOrganizer } from 'src/app/classes/tileOrganizer';

@Component({
  selector: 'app-tile-area',
  templateUrl: './tile-area.component.html',
  styleUrls: ['./tile-area.component.sass']
})
export class TileAreaComponent implements OnInit, AfterViewInit {
  tileList: any[] = [];
  readonly baseHeight: number = 250;
  tileOrganizer: TileOrganizer;
  
  constructor(private searchResults: SearchResultService, private ref: ElementRef) { }

  ngOnInit() {
    this.searchResults.results.subscribe((data) => {
      console.log(data);
      this.tileList = data;
    });
  }

  ngAfterViewInit() {
    this.tileOrganizer = new TileOrganizer();
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
