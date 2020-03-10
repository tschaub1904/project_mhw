import { Directive, Input, HostListener } from '@angular/core';
import { TileOrganizer } from '../services/tileOrganizer.service';
import { GetItemService } from '../services/getItem.service';
import { TileFactoryService } from '../services/tileFactory.service';

@Directive({
  selector: '[appClickSearch]'
})
export class ClickSearchDirective {
  @Input('appClickSearch') data: any;

  constructor(private to: TileOrganizer, private getItemService: GetItemService, private searchResultService: TileFactoryService) {  }
  
  @HostListener('click') onClick() {
    let id = `${this.data.id}_${this.data.name}`
    let tileIndex = this.to.getTileIndex(id)
    if (tileIndex >= 0) {
      this.to.moveTile(tileIndex, 0)
      return;
    }

    this.getItemService.getItem(this.data.id, this.data.category).subscribe(data => {
      this.searchResultService.addTile({ category: this.data.category , data: data });
    });
  }
}
