import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ChartDataset, ChartType } from 'chart.js';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-bar-chart-user',
  templateUrl: './bar-chart-user.component.html',
  styleUrls: ['./bar-chart-user.component.css'],
})
export class BarChartUserComponent implements OnInit {
  public followersCount: Array<any> = [];
  public countOfFollowing: Array<any> = [];
  public followingMonth: Array<any> = [];
  public following: Array<any> = [];
  public followingCounts: Array<any> = [];
  public followersMonth: Array<any> = [];
  public countOfFollowers: Array<any> = [];
  public followers: Array<string> = [];
  public barChartLabels: Array<string> = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public id: any;
  constructor(private home: HomeService, private route: ActivatedRoute,private matSnackBar:MatSnackBar) {}
  ngOnInit(): void {
    this.fromParams();
  }

  fromParams() {
    this.id = this.route.snapshot.params['id'];
    this.count();
    this.followingCount();
  }
  public barChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
        scaleLabel: { display: true, labelString: 'Months' },
      },
      y: {
        grid: { display: false },
        scaleLabel: { display: true, labelString: 'Counts' },
        ticks: { min: 0, stepSize: 1 },
        bar: { borderWidth: 2 },
      },
    },
    barPercentage: 1.0,
    categoryPercentage: 0.1,
  };
  count() {
    this.home.fetchUserCount(this.id).subscribe({
      next: (res: any) => {
        this.followersCount = res.getFollowersCount;

        this.followersMonth = this.followersCount.map((res: any) => {
          this.followers = res.month;
          return this.followers;
        });
        this.barChartLabels = this.followersMonth;
        this.barChartData[0].data=this.followersCount.map((a:any)=>{
          return a.count;
        })

      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }

  followingCount() {
    this.home.fetchFollowingCount(this.id).subscribe({
      next: (res: any) => {
        this.countOfFollowing = res.getFollowingCount;
        this.followingMonth = this.countOfFollowing.map((res: any) => {
          this.following = res.month;
          return this.following;
        });
        this.barChartLabels = this.followingMonth;
        this.followingCounts = this.countOfFollowing.map((res: any) => {
          this.following = res.count;
          return this.following;
        });
        this.barChartData[1].data = this.followingCounts;
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
  public barChartData: ChartDataset[] = [
    {
      data: [],
      label: 'Followers',
      backgroundColor: '#00008B',
      borderColor: 'rgba(0, 0, 1, 0)',
      borderWidth: 1,
    },
    {
      data: [],
      label: 'Following',
      backgroundColor: 'red',
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 2,
    },
  ];
}
