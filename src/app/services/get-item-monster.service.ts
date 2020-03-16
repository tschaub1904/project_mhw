import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemMonster } from 'src/app/interfaces/itemMonsterInterface';

@Injectable({
  providedIn: 'root'
})
export class GetItemMonsterService {

  constructor(private http: HttpClient) { }

  getItemMonster(id: number){
    return this.http.get<ItemMonster[]>('http://localhost:8000/api/itemMonster/' + id);
  }
}
