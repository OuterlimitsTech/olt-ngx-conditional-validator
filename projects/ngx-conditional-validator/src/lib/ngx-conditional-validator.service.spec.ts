import { TestBed } from '@angular/core/testing';

import { NgxConditionalValidatorService } from './ngx-conditional-validator.service';

describe('NgxConditionalValidatorService', () => {
  let service: NgxConditionalValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxConditionalValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
