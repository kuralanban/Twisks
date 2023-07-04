import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog.component';
import { InjectionToken } from '@angular/core';

describe('ImageDialogComponent', () => {
  let component: ImageDialogComponent;
  let fixture: ComponentFixture<ImageDialogComponent>;

  beforeEach(async () => {
    const matDialogDataToken = new InjectionToken<any>('MatMdcDialogData');
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [ImageDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: { open: () => {} } },
        { provide: matDialogDataToken, useValue: {} },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the imageUrl property', () => {
    const mockData = {
      imageUrl: 'http://example.com/image.jpg',
    };

    component.data = mockData;
    fixture.detectChanges();

    expect(component.imageUrl).toEqual(mockData.imageUrl);
  });
});
