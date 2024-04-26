/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieServicesService } from './MovieServices.service';

describe('Service: MovieServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieServicesService]
    });
  });

  it('should ...', inject([MovieServicesService], (service: MovieServicesService) => {
    expect(service).toBeTruthy();
  }));
});
