import { TestBed } from '@angular/core/testing';

import { FranceService } from './france.service';

describe('FranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FranceService = TestBed.get(FranceService);
    expect(service).toBeTruthy();
  });
});
