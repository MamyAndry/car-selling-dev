import { TestBed } from '@angular/core/testing';

import { MotorisationService } from './motorisation.service';

describe('MotorisationService', () => {
  let service: MotorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
