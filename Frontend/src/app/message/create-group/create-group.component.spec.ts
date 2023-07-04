import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { CreateGroupComponent } from './create-group.component';
import { MessageSocketService } from 'src/app/service/message-socket.service';
import { of } from 'rxjs';

describe('CreateGroupComponent', () => {
  let component: CreateGroupComponent;
  let fixture: ComponentFixture<CreateGroupComponent>;
  let messageServiceSpy: jasmine.SpyObj<MessageSocketService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    messageServiceSpy = jasmine.createSpyObj('MessageSocketService', ['searchUsers', 'createGroup']);
    dialogSpy = jasmine.createSpyObj('MatDialog', ['closeAll']);

    await TestBed.configureTestingModule({
      declarations: [CreateGroupComponent],
      providers: [
        { provide: MessageSocketService, useValue: messageServiceSpy },
        { provide: MatDialog, useValue: dialogSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGroupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for users', () => {
    const mockSearchResult = [{ _id: '1', username: 'user1' }, { _id: '2', username: 'user2' }];
    messageServiceSpy.searchUsers.and.returnValue(of({ fetchedMessageAccounts: mockSearchResult }));

    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'search';
    inputElement.dispatchEvent(new Event('input'));

    expect(messageServiceSpy.searchUsers).toHaveBeenCalledWith('search');
    expect(component.searchResult).toEqual(mockSearchResult);
  });

  it('should get selected users and close the dialog', () => {
    const mockSelectedUsers = ['1', '2'];
    // const dialogRefSpyObj = jasmine.createSpyObj({ close: null });
    // dialogSpy.closeAll.and.returnValue(dialogRefSpyObj);

    component.selectedUsers = mockSelectedUsers;
    component.groupName = 'Group 1';

    component.getSelectedUsers();

    expect(messageServiceSpy.createGroup).toHaveBeenCalled();
    expect(dialogSpy.closeAll).toHaveBeenCalled();
  });

  it('should set values when selecting a user', () => {
    const mockUser = { _id: '1', username: 'user1' };

    component.setValues(mockUser);

    expect(component.selectedUsers).toEqual(['1']);
  });
});
