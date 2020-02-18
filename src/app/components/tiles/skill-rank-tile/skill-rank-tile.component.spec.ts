import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRankTileComponent } from './skill-rank-tile.component';

describe('SkillRankTileComponent', () => {
  let component: SkillRankTileComponent;
  let fixture: ComponentFixture<SkillRankTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillRankTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRankTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
