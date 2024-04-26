/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TheatherServicesService } from './TheatherServices.service';

describe('Service: TheatherServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheatherServicesService]
    });
  });

  it('should ...', inject([TheatherServicesService], (service: TheatherServicesService) => {
    expect(service).toBeTruthy();
  }));
});
