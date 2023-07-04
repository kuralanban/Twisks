import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWithPopularityComponent } from './post-with-popularity.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostWithPopularityComponent', () => {
  let component: PostWithPopularityComponent;
  let fixture: ComponentFixture<PostWithPopularityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ PostWithPopularityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostWithPopularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
