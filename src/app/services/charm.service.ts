import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { Charm } from 'src/app/models/charm'

@Injectable({
  providedIn: 'root'
})
export class CharmService {
  charms: Charm[] = [];

  constructor( private http: HttpClient) { }

  getCharm(id?: number, slug?: string): Observable<Charm> {
    if(id != null){
      return this.http.get<Charm>('https://mhw-db.com/charms/' + id)
    }
    else if(slug != null){
      return this.http.get<Charm>('https://mhw-db.com/charms/' + slug)
    }
  }

  getAllCharm(): Observable<Charm[]> {
    return this.http.get<Charm[]>('http://localhost:8000/api/charms');
  }
}
