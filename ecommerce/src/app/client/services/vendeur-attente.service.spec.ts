import { TestBed } from '@angular/core/testing';

import { VendeurAttenteService } from './vendeur-attente.service';

describe('VendeurAttenteService', () => {
  let service: VendeurAttenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendeurAttenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
