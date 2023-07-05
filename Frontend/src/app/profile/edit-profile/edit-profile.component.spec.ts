import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { EditProfileComponent } from './edit-profile.component';
import { UserService } from 'src/app/service/user.service';
import { of } from 'rxjs';
import { ChangeProfileComponent } from '../change-profile/change-profile.component';
import { SwitchAccountComponent } from '../switch-account/switch-account.component';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(waitForAsync(() => {
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUserDetails', 'updateUserDetails']);

    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [EditProfileComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: UserService, useValue: userServiceSpy },
      ],
    }).compileComponents();

    mockDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    mockUserService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;

    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the user details', () => {
    const mockForm: NgForm = {
      value: {
        bioDetails: 'New bio details',
        name: 'New name',
      },
      valid: true,
    } as NgForm;

    const mockUserDetails = {
      userDetails: {
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        bioDetails: 'Lorem ipsum dolor sit amet',
        name: 'John Doe',
        accountType: 'public',
      },
    };

    mockUserService.getUserDetails.and.returnValue(of(mockUserDetails));

    component.onSubmit(mockForm);

    expect(mockUserService.updateUserDetails).toHaveBeenCalledWith('userId', {
      dateOfBirth: '1990-01-01',
      gender: 'Male',
      bioDetails: 'New bio details',
      name: 'New name',
      accountType: 'public',
    });
    expect(window.location.reload).toHaveBeenCalled();
  });


});
