import { Injectable } from '@angular/core';
import { Decoration } from 'src/app/models/decoration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecorationsService {
  decorations : Decoration[];

  constructor( private httpClient: HttpClient) { }

  getDecoration(id?: number, slug?: string): Observable<Decoration> {
    if(id != null)
    return this.httpClient.get<Decoration>('https://mhw-db.com/decorations/' + id)
    else if (slug != null)
    return this.httpClient.get<Decoration>('https://mhw-db.com/decorations/' + slug)

  }
  getAllDecoration(): Observable<Decoration[]> {
    return this.httpClient.get<Decoration[]>('https://mhw-db.com/decorations');
  }
}