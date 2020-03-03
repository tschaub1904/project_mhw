import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementalDamageComponent } from './elemental-damage.component';

describe('ElementalDamageComponent', () => {
  let component: ElementalDamageComponent;
  let fixture: ComponentFixture<ElementalDamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementalDamageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementalDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
