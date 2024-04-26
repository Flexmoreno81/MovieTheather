/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScreenTimeServiceService } from './ScreenTimeService.service';

describe('Service: ScreenTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreenTimeServiceService]
    });
  });

  it('should ...', inject([ScreenTimeServiceService], (service: ScreenTimeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
