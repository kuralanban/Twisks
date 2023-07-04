import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-h-memories',
  templateUrl: './h-memories.component.html',
  styleUrls: ['./h-memories.component.css']
})
export class HMemoriesComponent {
  constructor(
        @Inject(MAT_DIALOG_DATA) public memoriesData: any

  ){}
  public memoriesImage: any;
    public imgRetrivalPath: string = 'http://localhost:3000/uploads/';


  ngOnInit(){
   this.memoriesImage= this.memoriesData.memories;

  }

}
