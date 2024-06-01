import { TestBed } from '@angular/core/testing';

import { RouterService } from './router.service';
import { ActivatedRoute } from '@angular/router';

describe('RouterService', () => {
  let service: RouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(RouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
