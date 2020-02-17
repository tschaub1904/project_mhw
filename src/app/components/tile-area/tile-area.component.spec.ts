import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileAreaComponent } from './tile-area.component';

describe('TileAreaComponent', () => {
  let component: TileAreaComponent;
  let fixture: ComponentFixture<TileAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
