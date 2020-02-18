import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponTileComponent } from './weapon-tile.component';

describe('WeaponTileComponent', () => {
  let component: WeaponTileComponent;
  let fixture: ComponentFixture<WeaponTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
