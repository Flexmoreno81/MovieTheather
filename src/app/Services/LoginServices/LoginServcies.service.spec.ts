/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginServciesService } from './LoginServcies.service';

describe('Service: LoginServcies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginServciesService]
    });
  });

  it('should ...', inject([LoginServciesService], (service: LoginServciesService) => {
    expect(service).toBeTruthy();
  }));
});
