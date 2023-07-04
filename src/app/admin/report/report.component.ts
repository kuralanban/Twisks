import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {
  ActiveElement,
  Chart,
  ChartDataset,
  ChartEvent,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { environment } from 'src/app/environments/environment';
import { HomeService } from 'src/app/service/home.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  public reports: Array<any> = [];
  public countObjects: Array<any> = [];
  public reportsDetails: Array<any> = [];
  public comments: Array<any> = [];
  public reportedType: Array<any> = [];
  public reportsTypes: Array<any> = [];
  public labels: Array<any> = [];
  public value: any = [];
  public count: any = [];
  public commentCount: Array<any> = [];
  public profilePicRetrival = environment.profilePicRetrival;
  public postPic = environment.imgRetrivalPath;
  public id: any;
  public post: Array<any> = [];
  public postReportDetails: Array<any> = [];
  public postReportedType: Array<any> = [];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private matSnackBar:MatSnackBar
  ) {}
  ngOnInit(): void {
    this.fromParams();
  }

  fromParams() {
    this.id = this.route.snapshot.params['data'];
    this.reportUser();
    this.reportedPost();
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
    onClick: (event: ChartEvent, elements: ActiveElement[], chart: Chart) =>
      this.onChartClick(event, elements, chart),
  };

  public pieChartLabels: any = [];
  public pieChartData: ChartDataset[] = [
    {
      data: [],
    },
  ];
  public pieChartLabelsPost: any = [];
  public pieChartDataPost: ChartDataset[] = [
    {
      data: [],
    },
  ];
  public pieChartType: ChartType = 'pie';

  onChartClick(
    event: ChartEvent,
    elements: ActiveElement[],
    chart: Chart
  ): void {
    if (elements.length > 0) {
      const clickedElementIndex = elements[0].index;
      const clickedLabel = this.pieChartLabels[clickedElementIndex];
      const clickedValue = this.pieChartData[0].data[clickedElementIndex];
    }
  }
  reportUser() {
    this.userService.reportedUser(this.id).subscribe({
      next: (res: any) => {
        this.reports = res.reports;
        this.reportsDetails = this.reports.flatMap((val) => {
          this.comments = val.reportsUser;
          return this.comments;
        });
        this.reportedType = this.reportsDetails.map((ans) => {
          this.reportsTypes = ans.reportType;
          return this.reportsTypes;
        });
        const countByType = this.reportedType.reduce((acc, type) => {
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, {});

        this.countObjects = Object.entries(countByType).map(
          ([type, count]) => ({ type, count })
        );
        this.labels = this.countObjects.map((ans) => {
          this.value = ans.type;
          return this.value;
        });
        this.pieChartLabels = this.labels;
        this.labels = this.countObjects.map((res) => {
          this.count = res.count;
          return this.count;
        });
        this.pieChartData[0].data = this.labels;
      },
      error:(err)=>{
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      }
    });
  }

  reportedPost() {
    this.homeService.particularPostGotReported(this.id).subscribe({
      next: (res: any) => {
        this.post = res.particularPost;
        this.postReportDetails = this.post.flatMap((val) => {
          this.comments = val.reports;
          return this.comments;
        });
        this.postReportedType = this.postReportDetails.map((ans) => {
          this.reportsTypes = ans.reportType;
          return this.reportsTypes;
        });
        const countByType = this.postReportedType.reduce((acc, type) => {
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, {});

        this.countObjects = Object.entries(countByType).map(
          ([type, count]) => ({ type, count })
        );
        this.labels = this.countObjects.map((ans) => {
          this.value = ans.type;
          return this.value;
        });
        this.pieChartLabelsPost = this.labels;
        this.labels = this.countObjects.map((res) => {
          this.count = res.count;
          return this.count;
        });
        this.pieChartDataPost[0].data = this.labels;
      },
      error:(err)=>{
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      }
    });
  }
}
