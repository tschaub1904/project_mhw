import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Armor, ArmorSet } from 'src/app/models/armor'

@Injectable({
  providedIn: 'root'
})
export class ArmorService {
  constructor(private http: HttpClient) { }

  getArmor(id: number): Observable<Armor> {
    return this.http.get<Armor>('https://mhw-db.com/armor/' + id)
  }
  getAllArmors(): Observable<Armor[]> {
    return this.http.get<Armor[]>('https://mhw-db.com/armor');
  }
  getArmorSet(id: number): Observable<ArmorSet> {
    return this.http.get<ArmorSet>('https://mhw-db.com/armor/sets/'+ id);
  }
  getAllArmorSets(): Observable<ArmorSet[]> {
    return this.http.get<ArmorSet[]>('https://mhw-db.com/armor/sets');
  }
}
