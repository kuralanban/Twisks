import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailPageComponent } from './user-detail-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { BarChartUserComponent } from '../bar-chart-user/bar-chart-user.component';

describe('UserDetailPageComponent', () => {
  let component: UserDetailPageComponent;
  let fixture: ComponentFixture<UserDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ UserDetailPageComponent,BarChartUserComponent ],
      providers:[{provide:ActivatedRoute, useValue: {
        snapshot: {},
        parent: {}
      }}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
