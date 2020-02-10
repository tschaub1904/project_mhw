import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Monster } from 'src/app/models/monster'

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  constructor( private http: HttpClient) { }

  getMonster(id: number): Observable<Monster> {
    return this.http.get<Monster>('https://mhw-db.com/monsters/' + id)
  }
  getAllMonsters(): Observable<Monster[]> {
    return this.http.get<Monster[]>('https://mhw-db.com/monsters');
  }
}
