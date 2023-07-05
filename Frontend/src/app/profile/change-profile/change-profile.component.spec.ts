import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangeProfileComponent } from './change-profile.component';
import { UserService } from 'src/app/service/user.service';
import { of } from 'rxjs';

describe('ChangeProfileComponent', () => {
  let component: ChangeProfileComponent;
  let fixture: ComponentFixture<ChangeProfileComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  const mockUserDetails = {
    _id: '123',
    gender:'male',
    userName: 'john_doe',
  };

  beforeEach(waitForAsync( () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUserDetails', 'updateUserDetails', 'uploadProfileImage']);

     TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ChangeProfileComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { showGender: true, gender: 'male' } },
        { provide: UserService, useValue: userServiceSpy },
      ],
    }).compileComponents();

    mockUserService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;

    mockUserService.getUserDetails.and.returnValue(of({ userDetails: mockUserDetails }));
    fixture = TestBed.createComponent(ChangeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
