/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharmsTileComponent } from './charms-tile.component';

describe('CharmsTileComponent', () => {
  let component: CharmsTileComponent;
  let fixture: ComponentFixture<CharmsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharmsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharmsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
