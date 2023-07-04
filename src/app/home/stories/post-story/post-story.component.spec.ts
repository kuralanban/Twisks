import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { PostStoryComponent } from './post-story.component';
import { StoriesService } from '../../../service/stories.service';
import { LOCALE_ID } from '@angular/core';

describe('PostStoryComponent', () => {
  let component: PostStoryComponent;
  let fixture: ComponentFixture<PostStoryComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let storiesServiceSpy: jasmine.SpyObj<StoriesService>;

  beforeEach(() => {
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['closeAll']);
    const storiesServiceSpyObj = jasmine.createSpyObj('StoriesService', ['uploadStoryDetails', 'createNewStory']);

    TestBed.configureTestingModule({
      declarations: [PostStoryComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpyObj },
        { provide: StoriesService, useValue: storiesServiceSpyObj },
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostStoryComponent);
    component = fixture.componentInstance;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    storiesServiceSpy = TestBed.inject(StoriesService) as jasmine.SpyObj<StoriesService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user profile details on ngOnInit', () => {
    const testUserDetails = { _id: 1, name: 'Test User' };
    storiesServiceSpy.uploadStoryDetails.and.returnValue(of({ userDetails: testUserDetails }));

    component.ngOnInit();

    expect(storiesServiceSpy.uploadStoryDetails).toHaveBeenCalledTimes(1);
    expect(component.userId).toEqual(testUserDetails._id);
    expect(component.username).toEqual(testUserDetails.name);
  });

  it('should set selectedImage and append file to formData on onFileSelected', () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
    const event = { target: { files: [file] } };

    component.onFileSelected(event);

    expect(component.selectedImage).not.toBeNull();
    expect(component.fileName).toEqual('test.jpg');
    expect(component.formData.get('file')).toEqual(file);
  });

  it('should reset selectedImage on discardStory', () => {
    component.selectedImage = 'image.jpg';

    component.discardStory();

    expect(component.selectedImage).toBeNull();
  });

  it('should append userId and username to formData and close dialog on onSharingTheStory', () => {
    component.userId = 1;
    component.username = 'Test User';

    component.onSharingTheStory();

    expect(component.formData.get('userId')).toEqual('1');
    expect(component.formData.get('username')).toEqual('Test User');
    expect(storiesServiceSpy.createNewStory).toHaveBeenCalledWith(component.formData);
    expect(dialogSpy.closeAll).toHaveBeenCalledTimes(1);
  });




});
