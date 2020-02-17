import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchObject } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchObject: SearchObject[] = []
  postSearchObject: SearchObject  = { id: 0, name: '', category: ''};
  constructor(private http: HttpClient) { }

  setSearchName(name: string){
    this.postSearchObject.name = name;
  }

  getResultListByName(){
    console.log(this.postSearchObject)
    return this.http.post<SearchObject[]>('http://localhost:8000/api/search', this.postSearchObject);
  }
}
