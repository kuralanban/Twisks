import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoriesService } from './stories.service';
import { environment } from 'src/app/environments/environment';

describe('StoriesService', () => {
  let service: StoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoriesService],
    });
    service = TestBed.inject(StoriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to fetch user details', () => {
    const userId = '123';
    const expectedUrl = `${environment.baseUrl}/user/userDetails/${userId}`;

    service.uploadStoryDetails().subscribe();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should make a POST request to create a new story', () => {
    const story = { title: 'My Story', content: 'post story' };
    const expectedUrl = `${environment.baseUrl}/story/createStory`;
    const expectedResponse = { success: true };

    service.createNewStory(story).subscribe(response => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(story);
    req.flush(expectedResponse);
    httpMock.verify();
  });

  it('should make a GET request to view stories', () => {
    const userId = '123';
    const expectedUrl = `${environment.baseUrl}/story/viewStory/${userId}`;

    service.viewStory().subscribe();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should make a GET request to view next story', () => {
    const userId = '123';
    const expectedUrl = `${environment.baseUrl}/story/viewNextStory/${userId}`;

    service.viewNextStory().subscribe();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

});
