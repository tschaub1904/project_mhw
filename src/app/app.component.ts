import { Component, OnInit } from '@angular/core';
import { WeaponService } from './services/weapons/weapon.service';
import { Weapon } from 'src/app/models/weapons/weapon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'project-mhw';

  constructor(private weaponService: WeaponService){
  }

  ngOnInit(){
    this.weaponService.getAllWeapons().subscribe((data: Weapon[]) => {
      console.log(data);
    });
    this.weaponService.getWeapon(1, null).subscribe((data: Weapon) => {
      console.log(data);
    });
  }
}
