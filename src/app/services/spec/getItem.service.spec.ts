/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetItemService } from '../getItem.service';

describe('Service: GetItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetItemService]
    });
  });

  it('should ...', inject([GetItemService], (service: GetItemService) => {
    expect(service).toBeTruthy();
  }));
});
