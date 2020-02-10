import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Weapon } from 'src/app/models/weapon'

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(private http: HttpClient) {
  }

  getAllWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>('https://mhw-db.com/weapons'); 
  } 

  getWeapon(id?: number, slug?: string): Observable<Weapon> {
    if(id != null){
      return this.http.get<Weapon>('https://mhw-db.com/weapons/' + id)
    }
    else if(slug != null){
      return this.http.get<Weapon>('https://mhw-db.com/weapons/' + slug)
    }
  }
}
