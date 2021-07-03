import { TestBed } from '@angular/core/testing';

import { PostpurchaseService } from './postpurchase.service';

describe('PostpurchaseService', () => {
  let service: PostpurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostpurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
