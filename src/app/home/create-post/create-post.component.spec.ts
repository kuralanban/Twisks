import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePostComponent } from './create-post.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';
import { Router } from '@angular/router';
import { CameraComponent } from 'src/app/search/camera/camera.component';
import { CameraService } from 'src/app/service/camera.service';
import { of } from 'rxjs';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;
  const mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
  const mockHomeService = jasmine.createSpyObj('HomeService', ['userDetailService', 'createNewPost']);
  const mockCameraService = jasmine.createSpyObj('CameraService', ['webcamImage']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePostComponent],
      providers: [
        FormBuilder,
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: HomeService, useValue: mockHomeService },
        { provide: Router, useValue: mockRouter },
        { provide: CameraService, useValue: mockCameraService }
      ],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user profile details on initialization', () => {
    const userDetails = { userDetails: { _id: '123', userName: 'testuser' } };
    mockHomeService.userDetailService.and.returnValue(of(userDetails));

    component.ngOnInit();

    expect(mockHomeService.userDetailService).toHaveBeenCalled();
    expect(component.userId).toBe(userDetails.userDetails._id);
    expect(component.username).toBe(userDetails.userDetails.userName);
  });

  it('should set selectedImage and formData when file is selected', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const event = { target: { files: [file] } };

    component.onFileSelected(event);

    expect(component.selectedImage).toBeDefined();
    expect(component.isVideoFile).toBe(false);
    expect(component.formData.get('file')).toBe(file);
  });

  it('should reset selectedImage when discarding post', () => {
    component.selectedImage = 'image.jpg';

    component.discardPost();

    expect(component.selectedImage).toBeNull();
  });

  it('should set next to true when triggering post info div', () => {
    component.next = false;

    component.triggerPostInfoDiv();

    expect(component.next).toBe(true);
  });

  it('should create new post and reload the page when sharing the post', () => {
    const postObj = { caption: 'Test caption' };
    const response = { data: 'Post created successfully' };
    component.userId = '123';
    component.username = 'testuser';
    component.postForm.setValue(postObj);
    mockHomeService.createNewPost.and.returnValue(of(response));

    component.onSharingThePost();

    expect(mockHomeService.createNewPost).toHaveBeenCalledWith(component.formData);
    expect(window.location.reload).toHaveBeenCalled();
  });

  it('should open camera dialog and update selectedImage and formData', () => {
    const dialogRef = { afterClosed: () => of() };
    const webcamImage = { imageAsDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/' };
    const formData = new FormData();
    mockMatDialog.open.and.returnValue(dialogRef);
    mockCameraService.webcamImage = webcamImage;
    mockCameraService.formData = formData;

    component.camera();

    expect(mockMatDialog.open).toHaveBeenCalledWith(CameraComponent);
    expect(component.selectedImage).toBe(webcamImage.imageAsDataUrl);
    expect(component.formData.get('file')).toEqual(formData.get('file'));
  });

  it('should close the dialog when clicking on "No" button', () => {
    spyOn(component.dialogRef, 'closeAll');

    component.onNoClick();

    expect(component.dialogRef.closeAll).toHaveBeenCalled();
  });
});
