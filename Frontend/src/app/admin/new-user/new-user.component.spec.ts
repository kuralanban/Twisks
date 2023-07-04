import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewUserComponent } from './new-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgChartsModule } from 'ng2-charts';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,NgChartsModule],
      declarations: [ NewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
