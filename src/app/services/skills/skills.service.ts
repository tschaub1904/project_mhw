import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/services/monsters/monster.service'


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[]

  constructor( private httpClient: HttpClient) { }


  getAllWeapons(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>('https://mhw-db.com/skills'); 
  } 

  getSkill(id?: number, slug?: string): Observable<Skill> {
    if(id != null){
      return this.httpClient.get<Skill>('https://mhw-db.com/skills/' + id)
    }
    else if(slug != null){
      return this.httpClient.get<Skill>('https://mhw-db.com/skills/' + slug)
    }
  }

}
