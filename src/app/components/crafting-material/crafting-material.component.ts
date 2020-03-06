import { Component, OnInit, Input } from '@angular/core';
import { CraftingCost } from 'src/app/models/dataTypes/craftingCost';

@Component({
  selector: 'app-crafting-material',
  templateUrl: './crafting-material.component.html',
  styleUrls: ['./crafting-material.component.sass']
})
export class CraftingMaterialComponent implements OnInit {
  @Input() craftingMaterials: CraftingCost[];

  constructor() { }

  ngOnInit() {
  }

}
