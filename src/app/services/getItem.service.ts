import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetItemService {

  constructor(private http: HttpClient) { }

  getItem<T>(id: number, category: string): Observable<T> {
    return this.http.get<T>('http://localhost:8000/api/' + category + "/" + id);
  }

}
