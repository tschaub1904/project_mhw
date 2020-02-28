import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharpnessComponent } from './sharpness.component';

describe('SharpnessComponent', () => {
  let component: SharpnessComponent;
  let fixture: ComponentFixture<SharpnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharpnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharpnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
