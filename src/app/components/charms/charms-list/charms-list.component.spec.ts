import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmsListComponent } from './charms-list.component';

describe('CharmsListComponent', () => {
  let component: CharmsListComponent;
  let fixture: ComponentFixture<CharmsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharmsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
