import { TestBed, inject } from '@angular/core/testing';

import { LitigeService } from './litige.service';

describe('LitigeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LitigeService]
    });
  });

  it('should be created', inject([LitigeService], (service: LitigeService) => {
    expect(service).toBeTruthy();
  }));
});
