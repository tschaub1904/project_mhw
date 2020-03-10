import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingMaterialComponent } from './crafting-material.component';

describe('CraftingMaterialComponent', () => {
  let component: CraftingMaterialComponent;
  let fixture: ComponentFixture<CraftingMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftingMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
