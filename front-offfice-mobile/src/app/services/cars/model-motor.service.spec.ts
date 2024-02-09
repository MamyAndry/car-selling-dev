import { TestBed } from '@angular/core/testing';

import { ModelMotorService } from './model-motor.service';

describe('ModelMotorService', () => {
  let service: ModelMotorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelMotorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
