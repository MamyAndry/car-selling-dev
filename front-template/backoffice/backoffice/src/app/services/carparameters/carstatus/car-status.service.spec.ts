import { TestBed } from '@angular/core/testing';

import { CarStatusService } from './car-status.service';

describe('CarStatusService', () => {
  let service: CarStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
