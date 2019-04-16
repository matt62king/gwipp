import { TestBed } from '@angular/core/testing';

import { GwippService } from './gwipp.service';

describe('GwippService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GwippService = TestBed.get(GwippService);
    expect(service).toBeTruthy();
  });
});
