import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.sass']
})
export class SearchFilterComponent implements OnInit {
  itemList: string[][] = [ ["All", null],["Armor","armor"], ["Charm", "charms"], ["Monster", "monsters"], ["Weapon", "weapons"]];
  private delay = 500;
  private timeout: number;
  private lastCategory: string;
  clicked: boolean = false;

  constructor(public search: SearchComponent) { }

  ngOnInit() {

  }

  onClick(){
    this.clicked = !this.clicked;
  }

  onChange(category: string){
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (category === this.lastCategory)
      return;

    this.timeout = window.setTimeout(() => {
      this.lastCategory = category;
      this.search.categoryFilter = category;
    }, this.delay);
  }

}
