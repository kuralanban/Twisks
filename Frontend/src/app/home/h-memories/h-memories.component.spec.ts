import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HMemoriesComponent } from './h-memories.component';

describe('HMemoriesComponent', () => {
  let component: HMemoriesComponent;
  let fixture: ComponentFixture<HMemoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HMemoriesComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HMemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set memoriesImage correctly in ngOnInit', () => {
    const memoriesData = {
      memories: 'example.jpg'
    };

    component.ngOnInit();

    expect(component.memoriesImage).toEqual(memoriesData.memories);
  });
});
