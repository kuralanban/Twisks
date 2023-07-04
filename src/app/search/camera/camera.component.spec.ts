import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject , } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { CameraComponent } from './camera.component';
import { CameraService } from 'src/app/service/camera.service';
import { UserService } from 'src/app/service/user.service';

describe('CameraComponent', () => {
  let component: CameraComponent;
  let fixture: ComponentFixture<CameraComponent>;
  let mockUserService: Partial<UserService>;
  let mockCameraService: Partial<CameraService>;
  let mockMatDialogRef: Partial<MatDialogRef<CameraComponent>>;

  beforeEach(async () => {
    mockUserService = {
      getUserDetails: () => {
        return new Observable((subscriber) => {
          subscriber.next({ userDetails: {} });
          subscriber.complete();
        });
      },
    };

    mockCameraService = {
      handleImage: jasmine.createSpy('handleImage'),
    };

    mockMatDialogRef = {
      close: jasmine.createSpy('close'),
    };

    await TestBed.configureTestingModule({
      declarations: [CameraComponent],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: CameraService, useValue: mockCameraService },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details on initialization', () => {
    expect(component.userDetails).toBeUndefined();

    fixture.detectChanges();

    expect(component.userDetails).toBeDefined();
    expect(mockUserService.getUserDetails).toHaveBeenCalled();
  });

  it('should trigger snapshot', () => {
    spyOn(component.trigger,'next')
    component.triggerSnapshot();
    expect(component.trigger.next()).toHaveBeenCalled();
  });

  it('should handle image', () => {
    const webcamImage: WebcamImage = { imageAsDataUrl: 'mock-data-url' } as WebcamImage;
  
    component.handleImage(webcamImage);
  
    expect(component.webcamImage).toEqual(webcamImage);
    expect(mockCameraService.handleImage).toHaveBeenCalledWith(webcamImage);
    expect(mockMatDialogRef.close).toHaveBeenCalled();
  });

  it('should provide trigger observable', () => {
    expect(component.triggerObservable).toBeInstanceOf(Observable);
  });

  
});
