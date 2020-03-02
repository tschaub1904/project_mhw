import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, EventEmitter, Output, ElementRef, AfterViewInit, OnDestroy, HostListener, HostBinding, ChangeDetectorRef } from '@angular/core';
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
	eventDepth: number = 0;

	@ViewChild(TileHostDirective, { static: true }) tileHost: TileHostDirective;
	@HostBinding('class.someClass') isCovered: boolean = false;

	constructor(private componentFactoryResolver: ComponentFactoryResolver, private ref: ElementRef, private tileArea: TileAreaComponent, private tileOrganizer: TileOrganizer, private cd: ChangeDetectorRef) {
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

	// @HostListener('drag', ["$event"])
	// onDrag(event: any) {
		
	// 	this.cd.detach();
	// 	// console.log("onDrag(): ", event);
	// }
	
	onDragStart() {
		this.tileOrganizer.setDraggedTileIndex(this.tileId);
	}

	@HostListener('dragenter', ["$event"])
	onDragEnter(event: Event) {
		event.stopPropagation();
		event.preventDefault();

		this.eventDepth++;
		this.isCovered = true;
	}
	@HostListener('dragleave', ["$event"])
	onDragLeave(event: Event) {
		event.preventDefault();
		event.stopPropagation();

		this.eventDepth--;
		if (this.eventDepth == 0) 
			this.isCovered = false;
		
	}
	@HostListener('dragover', ["$event"])
	onDragOver(event) {
		event.preventDefault();
		event.stopPropagation();
	}
	@HostListener('drop')
	onDrop() {
		this.eventDepth = 0;
		this.isCovered = false;

		this.tileOrganizer.dropTile(this.tileId);
	}

}
