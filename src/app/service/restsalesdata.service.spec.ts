import { TestBed } from '@angular/core/testing';

import { RestsalesdataService } from './restsalesdata.service';

describe('RestsalesdataService', () => {
  let service: RestsalesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestsalesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
