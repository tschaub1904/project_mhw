import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill-tile',
  templateUrl: './skill-tile.component.html',
  styleUrls: ['./skill-tile.component.sass']
})
export class SkillTileComponent implements OnInit {
  @Input() skills: Skill[];
  
  constructor() { }

  ngOnInit() {
  }

}
