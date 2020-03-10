import { Component, OnInit, Input } from '@angular/core';
import { WeaponSharpness } from 'src/app/models/stats/weaponStats';

@Component({
  selector: 'app-sharpness',
  templateUrl: './sharpness.component.html',
  styleUrls: ['./sharpness.component.sass']
})
export class SharpnessComponent implements OnInit {
  readonly maxSharpness: number = 400;
  @Input() sharpnessLevels: WeaponSharpness[]
  sharpness: WeaponSharpness;
  handicraftLevel: number = 0;

  sharpnessWidth: number = 400;
  divider: number = 2;

  constructor() { }

  ngOnInit() {
    this.sharpness = this.sharpnessLevels[0];

    this.sharpnessWidth = this.sharpnessWidth / this.divider;
  }

  setHandicraftLevel(event: any) {
    this.sharpness = this.sharpnessLevels[event];
  }
}
