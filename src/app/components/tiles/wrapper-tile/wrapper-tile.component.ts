import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, EventEmitter, Output, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { TileHostDirective } from 'src/app/directives/tile-host.directive';
import { Charm } from 'src/app/models/charm';
import { CharmsTileComponent } from '../charms-tile/charms-tile.component';
import { TileComponent } from 'src/app/interfaces/tileInterface';
import { TileItem } from 'src/app/services/searchResult.service';
import { TileAreaComponent } from '../../tile-area/tile-area.component';

@Component({
  selector: 'app-wrapper-tile',
  templateUrl: './wrapper-tile.component.html',
  styleUrls: ['./wrapper-tile.component.sass']
})
export class WrapperTileComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @Input() item: TileItem;
  @Input() tileIndex: number;
  @Output() emitter = new EventEmitter();
  
  @ViewChild(TileHostDirective, { static: true }) tileHost: TileHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private ref: ElementRef, private tileArea: TileAreaComponent) { 
  }

  ngOnInit() {
    this.loadComponent();
  }

  ngAfterViewInit() {
    console.log("Create Wrapper", this.ref);
    this.tileArea.tileOrganizer.add(this.ref, `${this.item.data.id}_${this.item.data.name}`);
  }
  ngOnDestroy() {
    console.log("Destroy Wrapper", this.ref);
    this.tileArea.tileOrganizer.remove(`${this.item.data.id}_${this.item.data.name}`);
  }
  loadComponent() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.item.component);

    const viewContainerRef = this.tileHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TileComponent>componentRef.instance).data = this.item.data;
  }

}
