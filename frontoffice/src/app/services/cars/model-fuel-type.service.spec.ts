import { TestBed } from '@angular/core/testing';

import { ModelFuelTypeService } from './model-fuel-type.service';

describe('ModelFuelTypeService', () => {
  let service: ModelFuelTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelFuelTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
