import { ElementRef, QueryList } from "@angular/core";

export class TileOrganizer {
    columns: number;
    columnHeights: number[];
    readonly baseWidth: number = 400;
    readonly baseHeight: number = 250;
    readonly margin: number = 10;
    tiles = [];

    constructor() {
        console.log("tileOrganizer");
    }

    add(ref: ElementRef, id: string) {
        let isNew = !this.tiles.hasOwnProperty(id);
        this.tiles[id] = ref;

        let insertColumn = this.getSmallestColumn();
        let tile_m = this.calcTileHeight(ref);
        let column_m = this.columnHeights[insertColumn];

        let left = insertColumn*this.baseWidth + (insertColumn+1) * this.margin;
        let top = this.margin + column_m*this.baseHeight + column_m*this.margin;


        ref.nativeElement.style.left = left + 'px';
        ref.nativeElement.style.top = top + 'px';

        this.columnHeights[insertColumn] = column_m + tile_m;

        console.log("TileOrganizer Add", this.tiles);
        
    }

    remove(id) {
        console.log("TileOrganizer Remove", this.tiles);
        delete this.tiles[id];
    }

    calcColumns(width: number) {
        let newColumns = Math.max(Math.floor(width / this.baseWidth), 1)
        if (newColumns == this.columns)
            return

        this.columns = newColumns
        this.columnHeights = new Array<number>(this.columns).fill(0);

        // TODO: reorder tiles
    }
    calcTileHeight(ref: ElementRef): number {
        let m = Math.min(Math.ceil(ref.nativeElement.offsetHeight / this.baseHeight), 3);
        let newHeight = m*this.baseHeight+(m-1)*this.margin;
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
}