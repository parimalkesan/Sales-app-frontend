import { TestBed } from '@angular/core/testing';

import { RestdrugperformaceService } from './restdrugperformance.service';

describe('RestdrugperformaceService', () => {
  let service: RestdrugperformaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestdrugperformaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
