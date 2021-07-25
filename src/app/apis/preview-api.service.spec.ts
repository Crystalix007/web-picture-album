import { TestBed } from '@angular/core/testing';

import { PreviewAPIService } from './preview-api.service';

describe('PreviewServiceService', () => {
  let service: PreviewAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
