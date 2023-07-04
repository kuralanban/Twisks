import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ChartDataset, ChartType } from 'chart.js';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
})
export class StatisticComponent implements OnInit {
  public activeCounts: Array<number> = [];
  constructor(private router: Router, public userService: UserService,private matSnackBar:MatSnackBar) {}
  ngOnInit(): void {
    this.totalCount();
    this.allCurrentCount();
  }
  public display = true;
  public newUserCountCurrentMonth: Array<any> = [];
  public countTotal: any;
  public collection: Array<any> = [];
  public cumulativeCount: Array<any> = [];
  public countOfUser: any;
  public count: any;
  public active: any;
  public new: any;
  public month: Array<any> = [];
  public allCount: Array<any> = [];
  public userInMonth: Array<any> = [];
  public bar: Array<any> = [];
  public total: Array<any> = [];
  public userCount: Array<any> = [];
  public newUserCount: any;
  public activeUserCount: any;
  public allCurrentCounts: Array<any> = [];
  public totalCountOfCurrentMonth: any;
  public activeCountOfCurrentMonth: any;
  public newUserCountOfCurrentMonth: any;
  public displayCounts: Array<any> = [];
  public selectedOptions!: string;
  public countsTotal: Array<any> = [];
  public countActive: Array<any> = [];
  public countNewUser: Array<any> = [];
  public countNew: Array<any> = [];
  public myControl = new FormControl('');
  public options: string[] = [
    'Total Users',
    'Active Users',
    'New Users',
  ];
  public barChartLegend = true;
  public barChartLabels: Array<any> = [];
  public barChartData: ChartDataset[] = [
    {
      data: [],
      label: 'TotalCount',
      backgroundColor: 'pink',
      borderColor: 'black',
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
  };

  totalCount() {
    this.userService.userCount().subscribe({
      next: (res: any) => {
      this.allCount = res.count;
        this.countOfUser = this.allCount.map((val) => {
          this.count = val.totalUserCount;
          return this.count;
        });
        this.cumulativeCount = this.count.map((res: any) => {
          this.count = res.cumulativeCounts;
          return this.count;
        });
        this.barChartData[0].data = this.cumulativeCount;
        this.userInMonth = this.allCount.map((ans: any) => {
          this.month = ans.totalUserCount;
          return this.month;
        });
        this.userInMonth = this.month.map((ans: any) => {
          this.month = ans.month;
          return this.month;
        });
        this.barChartLabels = this.userInMonth;
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }

  public choose(option: string) {
    this.selectedOptions = option;
    if (option === this.options[1] || option === this.options[2]) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
  allCurrentCount() {
    this.userService.userCount().subscribe({
      next: (res: any) => {
        this.allCurrentCounts = res.count;
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        this.displayCounts = this.allCurrentCounts.map((val: any) => {
          this.countsTotal = val.totalUserCount;
        });
        this.totalCountOfCurrentMonth = this.countsTotal.map((res: any) => {
          if (res._id === currentMonth) {
            this.total = res.cumulativeCounts;
          }
        });
        this.countNew = this.allCurrentCounts.map((ans: any) => {
          this.countNewUser = ans.newUserCount;
          return this.countNewUser;
        });
        this.newUserCountOfCurrentMonth = this.countNewUser.map((res: any) => {
          if (res._id === currentMonth) {
            this.new = res.newCounts;
          }
        });
        this.activeCountOfCurrentMonth = this.allCurrentCounts.map((ans) => {
          this.active = ans.activeUserCount;
        });
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
}
