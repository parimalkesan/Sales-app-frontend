import { TestBed } from '@angular/core/testing';

import { RestsalesperformanceService } from './restsalesperformance.service';

describe('RestsalesperformanceService', () => {
  let service: RestsalesperformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestsalesperformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
