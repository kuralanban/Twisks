import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { HomeService } from 'src/app/service/home.service';
import { SavedPostsComponent } from './saved-posts.component';
import { ViewPostComponent } from '../view-post/view-post.component';

describe('SavedPostsComponent', () => {
  let component: SavedPostsComponent;
  let fixture: ComponentFixture<SavedPostsComponent>;
  const mockHomeService = jasmine.createSpyObj('HomeService', ['getAllSavedPosts']);
  const mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedPostsComponent],
      providers: [
        { provide: HomeService, useValue: mockHomeService },
        { provide: MatDialog, useValue: mockMatDialog },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve all saved posts on initialization', () => {
    const savedPostsData = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
    mockHomeService.getAllSavedPosts.and.returnValue(of({ savedPosts: savedPostsData }));

    component.ngOnInit();

    expect(mockHomeService.getAllSavedPosts).toHaveBeenCalled();
    expect(component.savedPosts).toEqual(savedPostsData);
  });

  it('should open view post dialog', () => {
    const testData = { id: 1, title: 'Test Post' };
    spyOn(component.matDialog, 'open').and.stub();

    component.viewPost(testData);

    expect(component.matDialog.open).toHaveBeenCalledWith(ViewPostComponent, { data: testData });
  });
});
