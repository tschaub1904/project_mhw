import { Component, OnInit, Input } from '@angular/core';
import { Slot } from 'src/app/models/dataTypes/slot';
import { constants } from '../../../../../constants'

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.sass']
})
export class SlotComponent implements OnInit {
  @Input() slots: Slot[];

  constructor() { }

  ngOnInit() {
  }

  loadPath(rank: number){
    return constants[0].api + 'images/slots/slot_' + rank + '.png'
  }

}
