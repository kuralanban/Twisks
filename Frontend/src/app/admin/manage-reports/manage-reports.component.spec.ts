import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReportsComponent } from './manage-reports.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';

describe('ManageReportsComponent', () => {
  let component: ManageReportsComponent;
  let fixture: ComponentFixture<ManageReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ManageReportsComponent ],
      providers:[{provide:MatDialog}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
