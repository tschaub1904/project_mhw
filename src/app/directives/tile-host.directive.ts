import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTileHost]'
})
export class TileHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
