import { TestBed } from '@angular/core/testing';

import { DecorationsService } from './decorations.service';

describe('DecorationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecorationsService = TestBed.get(DecorationsService);
    expect(service).toBeTruthy();
  });
});
