import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorTileComponent } from './armor-tile.component';

describe('ArmorTileComponent', () => {
  let component: ArmorTileComponent;
  let fixture: ComponentFixture<ArmorTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
