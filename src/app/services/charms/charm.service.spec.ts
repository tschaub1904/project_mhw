import { TestBed } from '@angular/core/testing';

import { CharmService } from './charm.service';

describe('CharmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharmService = TestBed.get(CharmService);
    expect(service).toBeTruthy();
  });
});
