import { TestBed, ComponentFixture , tick, fakeAsync} from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { StoriesComponent } from './stories.component';
import { PostStoryComponent } from './post-story/post-story.component';
import { ViewStoryComponent } from './view-story/view-story.component';
import { StoriesService } from 'src/app/service/stories.service';
import { HomeService } from 'src/app/service/home.service';

describe('StoriesComponent', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let storiesServiceSpy: jasmine.SpyObj<StoriesService>;

  beforeEach(() => {
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open', 'closeAll']);
    const storiesServiceSpyObj = jasmine.createSpyObj('StoriesService', ['viewStory']);

    TestBed.configureTestingModule({
      declarations: [StoriesComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpyObj },
        { provide: StoriesService, useValue: storiesServiceSpyObj },
        { provide: HomeService, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StoriesComponent);
    component = fixture.componentInstance;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    storiesServiceSpy = TestBed.inject(StoriesService) as jasmine.SpyObj<StoriesService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open PostStoryComponent dialog on openCreateStoryComponent', () => {
    component.openCreateStoryComponent();
    expect(dialogSpy.open).toHaveBeenCalledWith(PostStoryComponent);
  });

  it('should open ViewStoryComponent dialog with correct data on openViewStoryComponent', () => {
    const testData = { viewed: false };
    component.openViewStoryComponent(testData);
    expect(testData.viewed).toBe(true);
    expect(dialogSpy.open).toHaveBeenCalledWith(ViewStoryComponent, {
      data: { story: testData },
    });
    expect(dialogSpy.closeAll).toHaveBeenCalledTimes(1);
    jasmine.clock().tick(5000);
    expect(dialogSpy.closeAll).toHaveBeenCalledTimes(2);
  });

  it('should fetch user following story on ngOnInit', () => {
    const testStoryDetails = { fetchedStory: { id: 1, title: 'Test Story' } };
    storiesServiceSpy.viewStory.and.returnValue(of(testStoryDetails));

    component.ngOnInit();

    expect(storiesServiceSpy.viewStory).toHaveBeenCalledTimes(1);
    expect(component.storyDetails).toEqual(testStoryDetails.fetchedStory);
  });

    it('should close the dialog after 5 seconds', fakeAsync(() => {
    const testData = { viewed: false };
    component.openViewStoryComponent(testData);
    expect(dialogSpy.open).toHaveBeenCalledWith(ViewStoryComponent, {
      data: { story: testData },
    });

    tick(5000);
    expect(dialogSpy.closeAll).toHaveBeenCalledTimes(1);
  }));
});
