import { ElementRef, QueryList } from "@angular/core";

export class TileOrganizer {
    columns: number;
    rowHeights: number[];
    readonly baseWidth: number = 400;
    readonly baseHeight: number = 250;
    readonly margin: number = 20;
    tiles = [];

    constructor() {
        console.log("tileOrganizer");
    }

    add(ref: ElementRef, id: string) {
        let isNew = this.tiles.hasOwnProperty(id);
        this.tiles[id] = ref;

        console.log("TileOrganizer Add", this.tiles);
    }

    remove(id) {
        console.log("TileOrganizer Remove", this.tiles);
        delete this.tiles[id];
    }

}