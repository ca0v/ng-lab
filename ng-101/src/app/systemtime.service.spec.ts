import { TestBed } from '@angular/core/testing';

import { SystemTimeService } from './systemtime.service';

describe('SystemtimeService', () => {
  let service: SystemTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
