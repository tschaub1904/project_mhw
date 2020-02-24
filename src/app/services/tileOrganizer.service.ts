import { ElementRef, QueryList, Injectable } from "@angular/core";
import { tileElement } from '../interfaces/tileElement';
import { from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TileOrganizer {
    columns: number;
    columnHeights: number[];
    readonly baseWidth: number = 400;
    readonly baseHeight: number = 250;
    readonly margin: number = 10;
    tiles: tileElement[] = [];

    constructor() {
        console.log("tileOrganizer");
    }

    addNew(ref: ElementRef, id: string) {
        // console.log("double1", this.tiles.hasOwnProperty(id), id )
        console.log(this.tiles[id])

        let newTile: tileElement = { height: this.calcTileHeight(ref), id: id, ref: ref };
        this.tiles.splice(0, 0, newTile);
        console.log(this.tiles)
        this.calcAll();
    }

    add(tile: tileElement) {
        let insertColumn = this.getSmallestColumn();
        let tile_m = tile.height;
        let column_m = this.columnHeights[insertColumn];

        let left = insertColumn * this.baseWidth + (insertColumn + 1) * this.margin;
        let top = this.margin + column_m * this.baseHeight + column_m * this.margin;

        tile.ref.nativeElement.style.left = left + 'px';
        tile.ref.nativeElement.style.top = top + 'px';

        this.columnHeights[insertColumn] = column_m + tile_m;

        // console.log("TileOrganizer Add", this.tiles);

    }

    remove(id) {
        console.log("TileOrganizer Remove", this.tiles);
        this.tiles = this.tiles.filter(tile => {
            return id != tile.id;
        })
        this.calcAll();
    }

    calcColumns(width: number) {
        let newColumns = Math.max(Math.floor(width / this.baseWidth), 1)
        if (newColumns == this.columns)
            return

        this.columns = newColumns
        this.columnHeights = new Array<number>(this.columns).fill(0);

        this.calcAll();
    }
    calcTileHeight(ref: ElementRef): number {
        // console.log("Offset " , ref.nativeElement.offsetHeight)
        let m = Math.min(Math.ceil(ref.nativeElement.offsetHeight / this.baseHeight), 3);
        let newHeight = m * this.baseHeight + (m - 1) * this.margin;
        //TODO: height grows from 2 to 3 because of margin, fix it Tobi

        ref.nativeElement.style.height = newHeight + 'px';
        return m;
    }
    getSmallestColumn(): number {
        let min = 0;
        for (let i = 0; i < this.columnHeights.length; i++) {
            if (this.columnHeights[i] < this.columnHeights[min])
                min = i;
        }
        return min;
    }

    calcAll() {
        this.columnHeights = new Array<number>(this.columns).fill(0);

        this.tiles.forEach(tile => {
            this.add(tile)
        });
        console.log("tiles", this.tiles)
    }

    hasTile(id: string) {
        return this.tiles.some(tile => {
            return tile.id == id
        })
    }

    moveTile(fromIndex: number, toIndex: number, range: number = 1){
        this.tiles.splice( toIndex, 0 ,...this.tiles.splice(fromIndex, range));
        this.calcAll();
    }

    getTileIndex(id: string){
        return this.tiles.indexOf(this.tiles.find(tile => {
            return tile.id == id;
        }));
    }
}