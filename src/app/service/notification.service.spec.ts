import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotificationService', () => {
  let service: NotificationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient,HttpHandler
      ],
      imports:[RouterTestingModule]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service.fetchnotifications()).toHaveBeenCalled();
  });

});
