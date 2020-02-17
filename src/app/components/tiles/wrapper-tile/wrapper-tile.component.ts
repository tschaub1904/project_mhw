import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { TileHostDirective } from 'src/app/directives/tile-host.directive';
import { Charm } from 'src/app/models/charm';
import { CharmsTileComponent } from '../charms-tile/charms-tile.component';
import { TileComponent } from 'src/app/interfaces/tileInterface';
import { TileItem } from 'src/app/services/searchResult.service';

@Component({
  selector: 'app-wrapper-tile',
  templateUrl: './wrapper-tile.component.html',
  styleUrls: ['./wrapper-tile.component.sass']
})
export class WrapperTileComponent implements OnInit {
  @Input() item: TileItem;
  @Input() tileIndex: number;
  @Output() emitter = new EventEmitter();
  
  @ViewChild(TileHostDirective, { static: true }) tileHost: TileHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.item.component);

    const viewContainerRef = this.tileHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TileComponent>componentRef.instance).data = this.item.data;
  }

}
