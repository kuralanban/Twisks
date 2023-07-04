import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStoryComponent } from './view-story.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

describe('ViewStoryComponent', () => {
  let component: ViewStoryComponent;
  let fixture: ComponentFixture<ViewStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStoryComponent,MatDialogModule ],
        providers:[HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
