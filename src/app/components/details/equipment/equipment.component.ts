import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.sass']
})
export class EquipmentComponent implements OnInit {
  @Input() slotName: string;
  @Input() equipmentName: string;

  constructor() { }

  ngOnInit() {
  }
}
