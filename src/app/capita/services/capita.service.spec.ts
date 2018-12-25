import { TestBed } from '@angular/core/testing';

import { CapitaService } from './capita.service';

describe('CapitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapitaService = TestBed.get(CapitaService);
    expect(service).toBeTruthy();
  });
});
