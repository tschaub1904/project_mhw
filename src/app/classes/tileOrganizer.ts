import { ElementRef, QueryList } from "@angular/core";

export class TileOrganizer {
    columns: number;
    rowHeights: number[];
    readonly baseWidth: number = 400;
    readonly baseHeight: number = 250;
    readonly margin: number = 20;
    elementRefs: QueryList<ElementRef>;
    tiles = {};

    constructor(elementRefs: QueryList<ElementRef>) {
        console.log("tileOrganizer");
        this.elementRefs = elementRefs;
        this.elementRefs.changes.subscribe({
            next: data => {
                let newTile = !this.tiles.hasOwnProperty(data.last.data.id);
                console.log("data: ", data.last, newTile);
                this.tiles[data.last.data.id] = data.last;
                //     for (let result of data._results) {
                //         let { offsetHeight } = result.nativeElement;

                //         let m = Math.ceil(offsetHeight / this.baseHeight);
                //         let actual_m = Math.min(3, m);

                //         result.nativeElement.style.height = actual_m * this.baseHeight + 'px';

                //     }
            }
        });


    }



}