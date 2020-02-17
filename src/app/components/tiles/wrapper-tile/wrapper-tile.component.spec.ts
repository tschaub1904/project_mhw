import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperTileComponent } from './wrapper-tile.component';

describe('WrapperTileComponent', () => {
  let component: WrapperTileComponent;
  let fixture: ComponentFixture<WrapperTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
