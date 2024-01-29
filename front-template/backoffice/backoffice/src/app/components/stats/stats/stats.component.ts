import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { SoldCarStats } from '../../../../mapping/stats/SoldCarStats';
import { StatsService } from '../../../services/stats/stats.service';
import { User } from '../../../../mapping/login/User';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit{

  @ViewChild('lineChart', {static: true}) private chartRef !:ElementRef;
  chart : any;
  salesCarData : SoldCarStats[] = []
  session_user ?: User
  token : string = ""
  colors : string[] = [
    "#ffffff",
    "rgba(255, 255, 255, 0.70)",
    "rgba(255, 255, 255, 0.50)",
    "rgba(255, 255, 255, 0.40)",
    "rgba(255, 255, 255, 0.20)"
  ]

  ngOnInit() {
    const sessionUserData = localStorage.getItem("session_user");
    this.session_user = sessionUserData ? JSON.parse(sessionUserData) : undefined;
    this.token = this.token = this.session_user?.password || '';
    if(this.token == ''){
      this.route.navigate(['login'])
    }
    this.createChart()
  }

  constructor(private statsService : StatsService, private route : Router){}

  createChart(){
    // chart 2
    this.statsService.getSalesStats(this.token).subscribe(
      (data)=>{
        this.salesCarData = data.data
        let label : any[] = []
        let salesData : number[] = []
        for (let index = 0; index < this.salesCarData.length; index++) {
          const element = this.salesCarData[index];
          label.push(element.brand + " "+element.model + " ("+element.year+")")
          salesData.push(element.count)

        }
        var ctx = this.chartRef.nativeElement.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: label,
            datasets: [{
              backgroundColor: [
                "#ffffff",
                "rgba(255, 255, 255, 0.70)",
                "rgba(255, 255, 255, 0.50)",
                "rgba(255, 255, 255, 0.40)",
                "rgba(255, 255, 255, 0.20)"
              ],
              data: salesData,
              borderWidth: [0, 0, 0, 0],

            }]
          },
        options: {
          maintainAspectRatio: false,
          plugins : {
            legend: {
              position :"bottom",
              display: false,
                 labels: {
                 boxWidth:15
                }
             }
          }
           }
        });
      }
    )
  }
}
