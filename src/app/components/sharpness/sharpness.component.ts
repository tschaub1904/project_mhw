import { Component, OnInit, Input } from '@angular/core';
import { WeaponSharpness } from 'src/app/models/stats/weaponStats';

@Component({
  selector: 'app-sharpness',
  templateUrl: './sharpness.component.html',
  styleUrls: ['./sharpness.component.sass']
})
export class SharpnessComponent implements OnInit {
  @Input() sharpness: WeaponSharpness
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  white: number;
  purple: number;
  sharpnessWidth: number = 400;
  divider: number = 1.5;


  constructor() {
   }

  ngOnInit() {
    this.red = this.sharpness.red / this.divider;
    this.orange = this.sharpness.orange / this.divider;
    this.yellow = this.sharpness.yellow / this.divider;
    this.green = this.sharpness.green / this.divider;
    this.blue = this.sharpness.blue / this.divider;
    this.white = this.sharpness.white / this.divider;
    this.purple = this.sharpness.purple / this.divider;

    this.sharpnessWidth = this.sharpnessWidth / this.divider
    console.log(this.sharpness)
    console.log(this)

  }

}
