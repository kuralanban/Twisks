import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';

describe('ApiInterceptor', () => {
  let interceptor: ApiInterceptor;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiInterceptor]
    }).compileComponents();
  }));

  beforeEach(() => {
    interceptor = TestBed.inject(ApiInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add authorization header with token to the request', () => {
    const mockToken = 'my-token';
    const mockRequest = new HttpRequest('GET', '/api/data');

    localStorage.setItem('token', mockToken);

    interceptor.intercept(mockRequest, <HttpHandler><unknown>{ handle: () => { } }).subscribe(() => {
      expect(mockRequest.headers.has('authorization')).toBeTruthy();
      expect(mockRequest.headers.get('authorization')).toEqual(mockToken);
    });

    const mockHttpRequest = httpMock.expectOne('/api/data');
    expect(mockHttpRequest.request.headers.has('authorization')).toBeTruthy();
    expect(mockHttpRequest.request.headers.get('authorization')).toEqual(mockToken);

    mockHttpRequest.flush({}); // Respond with an empty body
  });
});
