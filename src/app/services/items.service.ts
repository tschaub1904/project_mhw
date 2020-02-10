import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from 'src/app/models/item'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { 
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('https://mhw-db.com/items'); 
  }

  getItem(id: number): Observable<Item> {
      return this.http.get<Item>('https://mhw-db.com/items/' + id)
  }
}
