import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, EventEmitter, Output, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { TileHostDirective } from 'src/app/directives/tile-host.directive';
import { Charm } from 'src/app/models/charm';
import { CharmsTileComponent } from '../charms-tile/charms-tile.component';
import { TileComponent } from 'src/app/interfaces/tileInterface';
import { TileItem } from 'src/app/services/searchResult.service';
import { TileAreaComponent } from '../../tile-area/tile-area.component';
import { TileOrganizer } from 'src/app/services/tileOrganizer.service';

@Component({
  selector: 'app-wrapper-tile',
  templateUrl: './wrapper-tile.component.html',
  styleUrls: ['./wrapper-tile.component.sass']
})
export class WrapperTileComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @Input() item: TileItem;
  @Input() tileIndex: number;
  @Output() emitter = new EventEmitter();
  tileId: string;
  isCovered: boolean;

  @ViewChild(TileHostDirective, { static: true }) tileHost: TileHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private ref: ElementRef, private tileArea: TileAreaComponent, private tileOrganizer: TileOrganizer) { 
  }

  ngOnInit() {
    this.loadComponent();
    this.tileId = `${this.item.data.id}_${this.item.data.name}`;
  }

  ngAfterViewInit() {
    this.tileOrganizer.addNew(this.ref, `${this.item.data.id}_${this.item.data.name}`);
  }
  ngOnDestroy() {
    this.tileOrganizer.remove(`${this.item.data.id}_${this.item.data.name}`);
  }
  loadComponent() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.item.component);

    const viewContainerRef = this.tileHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TileComponent>componentRef.instance).data = this.item.data;
  }

  onDrag(event: DragEvent){
    // console.log("onDrag(): ", event.clientX, event.clientY)
  }

  onDragStart(){
    this.tileOrganizer.setDraggedTileIndex(this.tileId);
    // console.log("onDragStart(): ", this.tileId);
  }

  @HostListener('dragenter', ["$event"])
  onDragEnter(event: Event) {
    this.isCovered = true;
    event.preventDefault();
    event.stopPropagation();
    console.log("onDragEnter()", (event.target as Element).tagName)
  }

  @HostListener('dragleave', ["$event"])
  onDragLeave(event: Event) {
    this.isCovered = false;
    event.preventDefault();
    event.stopPropagation();
    console.log("onDragLeave()", (event.target as Element).tagName)
  }

  @HostListener('dragover', ["$event"])
  onDragOver(event){
    event.preventDefault()
  }

  @HostListener('drop')
  onDrop(){
    // console.log("onDrop(): ", this.tileId);
    this.isCovered = false;

    this.tileOrganizer.dropTile(this.tileId);
  }

}
