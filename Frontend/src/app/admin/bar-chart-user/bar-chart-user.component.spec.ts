import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartUserComponent } from './bar-chart-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('BarChartUserComponent', () => {
  let component: BarChartUserComponent;
  let fixture: ComponentFixture<BarChartUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BarChartUserComponent ],
      providers:[{provide:ActivatedRoute,useValue: {
        snapshot: {},
        parent: {}
      }}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
