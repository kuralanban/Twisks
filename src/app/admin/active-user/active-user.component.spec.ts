import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveUserComponent } from './active-user.component';
import { UserService } from 'src/app/service/user.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgChartsModule } from 'ng2-charts';

describe('ActiveUserComponent', () => {
  let component: ActiveUserComponent;
  let fixture: ComponentFixture<ActiveUserComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NgChartsModule],
      declarations: [ ActiveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
