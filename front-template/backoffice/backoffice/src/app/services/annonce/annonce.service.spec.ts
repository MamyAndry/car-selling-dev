import { TestBed } from '@angular/core/testing';

import { BrandService } from './annonce.service';

describe('AnnonceService', () => {
  let service: BrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
