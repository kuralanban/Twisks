import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { WebcamImage } from 'ngx-webcam';
import { Subject, of } from 'rxjs';
import { CameraComponent } from '../camera/camera.component';
import { CameraService } from 'src/app/service/camera.service';
import { UserService } from 'src/app/service/user.service';

describe('CameraComponent', () => {
  let component: CameraComponent;
  let fixture: ComponentFixture<CameraComponent>;
  let mockDialogRef: MatDialogRef<CameraComponent>;
  let mockUserService: UserService;
  let mockCameraService: CameraService;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj(['close']);
    mockUserService = jasmine.createSpyObj(['getUserDetails']);
    mockCameraService = jasmine.createSpyObj(['handleImage']);

    await TestBed.configureTestingModule({
      declarations: [CameraComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: UserService, useValue: mockUserService },
        { provide: CameraService, useValue: mockCameraService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should initialize component', () => {
    component.ngOnInit();
  
    // expect(component.).toBe('');
    expect(mockUserService.getUserDetails).toHaveBeenCalled();
  });
  
  // Write your tests here
});
