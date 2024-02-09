import { TestBed } from '@angular/core/testing';

import { ModelGearBoxService } from './model-gear-box.service';

describe('ModelGearBoxService', () => {
  let service: ModelGearBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelGearBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
