import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterTileComponent } from './monster-tile.component';

describe('MonsterTileComponent', () => {
  let component: MonsterTileComponent;
  let fixture: ComponentFixture<MonsterTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
