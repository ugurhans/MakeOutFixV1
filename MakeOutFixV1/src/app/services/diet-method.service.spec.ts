import { TestBed } from '@angular/core/testing';

import { DietMethodService } from './diet-method.service';

describe('DietMethodService', () => {
  let service: DietMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
