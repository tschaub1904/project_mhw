import { Component, OnInit, Input } from '@angular/core';
import { WeaponElement } from 'src/app/models/stats/weaponStats';
import { constants} from '../../../../../constants'

@Component({
  selector: 'app-elemental-damage',
  templateUrl: './elemental-damage.component.html',
  styleUrls: ['./elemental-damage.component.sass']
})
export class ElementalDamageComponent implements OnInit {
  @Input() dmgs: WeaponElement[]
  constructor() { }

  ngOnInit() {
  }

  loadPath(elementType: string) {
    console.log(constants[0].api + "images/elements/" + elementType + ".jpg")
    return constants[0].api + "images/elements/" + elementType + ".png";
  }

}
