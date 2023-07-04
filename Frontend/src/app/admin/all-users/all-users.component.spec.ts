// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDialog } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { of } from 'rxjs/internal/observable/of';
// import { FormBuilder } from '@angular/forms';

// <<<<<<<< HEAD:Front_End/src/app/admin/all-users/all-users.component.spec.ts
// import { AllUsersComponent } from './all-users.component';

// describe('AllUsersComponent', () => {
//   let component: AllUsersComponent;
//   let fixture: ComponentFixture<AllUsersComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AllUsersComponent ]
//     })
//     .compileComponents();
// ========
// import { CreatePostComponent } from './create-post.component';
// import { HomeService } from 'src/app/service/home.service';

// describe('CreatePostComponent', () => {
//   let component: CreatePostComponent;
//   let fixture: ComponentFixture<CreatePostComponent>;
//   let homeService: HomeService;
//   let matDialog: MatDialog;
//   let router: Router;
//   let formBuilder: FormBuilder;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [CreatePostComponent],
//       providers: [
//         HomeService,
//         FormBuilder,
//         { provide: MatDialog, useValue: {} },
//         { provide: Router, useValue: {} },
//       ],
//     }).compileComponents();
// >>>>>>>> 48c330866aeb9a7696a40e4b42ff3f5074fa3829:Front_End/src/app/home/create-post/create-post.component.spec.ts

//     fixture = TestBed.createComponent(AllUsersComponent);
//     component = fixture.componentInstance;
//     homeService = TestBed.inject(HomeService);
//     matDialog = TestBed.inject(MatDialog);
//     router = TestBed.inject(Router);
//     formBuilder = TestBed.inject(FormBuilder);

//     spyOn(homeService, 'userDetailService').and.returnValue(of({ userDetails: { _id: '123', name: 'John' } }));
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should fetch user profile details on initialization', () => {
//     expect(homeService.userDetailService).toHaveBeenCalled();
//     expect(component.userId).toBe('123');
//     expect(component.username).toBe('John');
//   });

//   it('should set selectedImage and isVideoFile when file is selected', () => {
//     const file = new File([], 'test.png', { type: 'image/png' });
//     const event = { target: { files: [file] } };

//     component.onFileSelected(event as any);

//     expect(component.selectedImage).toBeDefined();
//     expect(component.isVideoFile).toBeFalse();
//     expect(component.fileName).toBe('test.png');
//     expect(component.formData.get('file')).toBe(file);
//   });

//   it('should reset selectedImage on discardPost', () => {
//     component.discardPost();

//     expect(component.selectedImage).toBeNull();
//   });

//   it('should set next to true on triggerPostInfoDiv', () => {
//     component.triggerPostInfoDiv();

//     expect(component.next).toBeTrue();
//   });

//   it('should send post data and reload page on onSharingThePost', () => {
//     spyOn(component.dialogRef, 'closeAll');
//     spyOn(window.location, 'reload');
//     spyOn(homeService, 'createNewPost').and.returnValue(of({}));

//     component.postForm.setValue({ caption: 'Test caption' });
//     component.userId = '123';
//     component.username = 'John';
//     component.onSharingThePost();

//     expect(component.formData.get('userId')).toBe('123');
//     expect(component.formData.get('username')).toBe('John');
//     expect(component.formData.get('caption')).toBe('Test caption');
//     expect(homeService.createNewPost).toHaveBeenCalledWith(component.formData);
//     expect(component.dialogRef.closeAll).toHaveBeenCalled();
//     expect(window.location.reload).toHaveBeenCalled();
//   });

//   // Add more test cases as needed
// });
