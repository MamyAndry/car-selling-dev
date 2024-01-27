import { TestBed } from '@angular/core/testing';

import { GearBoxService } from './gear-box.service';

describe('GearBoxService', () => {
  let service: GearBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GearBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
