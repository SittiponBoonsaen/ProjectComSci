import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-chartreservations',
  templateUrl: './chartreservations.page.html',
  styleUrls: ['./chartreservations.page.scss'],
})
export class ChartreservationsPage {

  constructor() { }
  ionViewDidEnter() {
    this.barChartPopulation();

  }

  barChartPopulation() {
    HighCharts.chart('barChart', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'กราฟการจอง'
      },
      xAxis: {
        categories: ['January', 'February', 'March ', 'April', 'May', 'June', 'July', 'August ', 'September', 'October', 'November', 'December'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'จำนวนการจอง'
        },
      },
      tooltip: {
        valueSuffix: ' ครั้ง'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: undefined,
        name: 'จำนวนการจอง',
        data: [50, 31, 10, 15, 2, 40, 31, 20, 34, 2, 15, 19]
      }]
    });
  }
}
