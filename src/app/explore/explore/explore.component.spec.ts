import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ExploreComponent } from './explore.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';


describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;
    let dialogSpy: jasmine.SpyObj<MatDialog>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDialogModule],
      declarations: [ ExploreComponent ],
      providers:[HttpClient, HttpHandler, MatDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should open image dialog with the correct data', () => {
    const imageUrl = 'http://example.com/image.jpg';
    component.openImageDialog(imageUrl);

    expect(dialogSpy.open).toHaveBeenCalledWith(ImageDialogComponent, {
      data: {
        imageUrl: imageUrl
      }
    });
  });


});
