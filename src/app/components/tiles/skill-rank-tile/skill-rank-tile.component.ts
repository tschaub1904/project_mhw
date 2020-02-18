import { Component, OnInit, Input } from '@angular/core';
import { SkillRank } from 'src/app/models/skill';

@Component({
  selector: 'app-skill-rank-tile',
  templateUrl: './skill-rank-tile.component.html',
  styleUrls: ['./skill-rank-tile.component.sass']
})
export class SkillRankTileComponent implements OnInit {
  @Input() skillRanks: SkillRank[];

  constructor() { }

  ngOnInit() {
  }

}
