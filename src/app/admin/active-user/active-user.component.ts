import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChartDataset, ChartType } from 'chart.js';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css'],
})
export class ActiveUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private  matSnackBar:MatSnackBar
  ) {}
  ngOnInit(): void {
    this.activeUsersCount();
  }
  public activeCount: Array<any> = [];
  public count: Array<any> = [];
  public activeUser: Array<any> = [];
  public barChartLabels: string[] = [];
  public barChartLegend=true;
  public barChartData: ChartDataset[] = [
    {
      data: [],
      label: 'Active UserCount',
      backgroundColor: 'Green',
      borderColor: 'Green',
      borderWidth: 1,
    },
  ];
  public barChartType: ChartType = 'bar';
  public barChartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: 'red', size: 10 },
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
    barPercentage: 0.6,
    categoryPercentage: 0.1,
  };

  activeUsersCount() {
    this.userService.userCount().subscribe({
      next: (res: any) => {
        this.activeUser = res.count;
       this.activeCount = this.activeUser.map((ans) => {
          this.count = ans.activeUserCount;
          return this.count;
        });
        this.barChartData[0].data = this.activeCount;
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString();
        this.barChartLabels = [currentTime];
      },

      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', { duration: 2000 });
      },
    });
  }
}
