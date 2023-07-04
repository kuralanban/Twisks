import { TestBed } from '@angular/core/testing';

import { ExploreService } from './explore.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ExploreService', () => {
  let service: ExploreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient, HttpHandler]
    });
    service = TestBed.inject(ExploreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
