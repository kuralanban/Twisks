import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChartDataset, ChartType } from 'chart.js';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  constructor(private userService: UserService,private matSnackBar:MatSnackBar) {}
  public collection: any = [];
  public count: Array<any> = [];
  public month: Array<any> = [];
  public userCollection: Array<any> = [];
  public countCollection: Array<any> = [];
  public monthCollection: Array<any> = [];
  public newUserCountCurrentMonth: Array<any> = [];
  public total: any;
  ngOnInit(): void {
    this.newCount();
  }

  public barChartLegend = true;
  public barChartLabels: Array<any> = [];
  public barChartData: ChartDataset[] = [
    {
      data: [],
      label: 'New UserCount',
      backgroundColor: 'red',
      borderColor: 'black',
      borderWidth: 1,
    },
  ];
  public barChartType: ChartType = 'bar';
  public barChartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: 'black', size: 10 },
        grid: { display: false },
        scaleLabel: { display: true },
      },
      y: {
        grid: { display: false, color: 'black' },
        scaleLabel: { display: true, labelString: 'Counts' },
        ticks: { min: 0, stepSize: 1, color: 'red', size: 10 },
        bar: { borderWidth: 2 },
      },
    },
    barPercentage: 1.5,
    categoryPercentage: 0.2,
  };

  newCount() {
    this.userService.userCount().subscribe({
      next: (res: any) => {
        this.collection = res.count;
        this.userCollection = this.collection.map((a: any) => {
          this.count = a.newUserCount;
          return this.count;
        });
       this.countCollection = this.count.map((a: any) => {
          return a.newCounts;
        });
        this.barChartData[0].data = this.countCollection;
         this.userCollection = this.collection.map((val: any) => {
          this.month = val.newUserCount;
        });
        this.monthCollection = this.month.map((res: any) => {
          return res.month;
        });
        this.barChartLabels = this.monthCollection;
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
}
