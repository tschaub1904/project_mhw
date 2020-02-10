import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmsDetailsComponent } from './charms-details.component';

describe('CharmsDetailsComponent', () => {
  let component: CharmsDetailsComponent;
  let fixture: ComponentFixture<CharmsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharmsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
