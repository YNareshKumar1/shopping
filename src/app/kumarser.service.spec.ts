import { TestBed } from '@angular/core/testing';

import { KumarserService } from './kumarser.service';

describe('KumarserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KumarserService = TestBed.get(KumarserService);
    expect(service).toBeTruthy();
  });
});
