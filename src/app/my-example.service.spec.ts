import { TestBed } from '@angular/core/testing';

import { MyExampleService } from './my-example.service';

describe('MyExampleService', () => {
  let service: MyExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
