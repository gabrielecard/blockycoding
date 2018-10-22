import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts-all',
  templateUrl: './charts-all.component.html',
  styleUrls: ['./charts-all.component.css']
})
export class ChartsAllComponent implements OnInit {
  errorLevelChart = [];
  timeLevelChart = [];
  datasetError: any;
  datasetTime: any;

 constructor(private userService: UserService) { }

 ngOnInit() {
 }

 ngAfterViewInit() {
   this.userService.modulesErrors.subscribe(
     (data: any) => {
         this.datasetError = data;
         this.errorChart();
     });
     this.userService.modulesTime.subscribe(
       (data: any) => {
           this.datasetTime = data;
           this.timeChart();
       });
 }

 public errorChart(){
   
   this.errorLevelChart = new Chart('errorLevelAllChart', {
     type: 'bar',
     data: {
       labels: ["Fase 1", "Fase 2", "Fase 3", "Fase 4"],
       datasets: [{
         label: 'Erros',
         data: [this.datasetError[0], this.datasetError[1], this.datasetError[2], this.datasetError[3]],
         backgroundColor: [
           'rgba(255, 99, 132, 0.5)',
           'rgba(255, 99, 132, 0.5)',
           'rgba(255, 99, 132, 0.5)',
           'rgba(255, 99, 132, 0.5)'
         ],
         borderColor: [
           'rgba(255, 99, 132, 1)',
           'rgba(255, 99, 132, 1)',
           'rgba(255, 99, 132, 1)',
           'rgba(255, 99, 132, 1)'
         ],
         borderWidth: 1
       }]
     },
     options: {
       title:{
         text:"Erro médio por Fase",
         display:true
       },
       scales: {
         yAxes:[{
           ticks: {
             beginAtZero:true
           }
         }]
       }
     }
   });
 }

 public timeChart(){
    
  this.timeLevelChart = new Chart('timeLevelAllChart', {
    type: 'bar',
    data: {
      labels: ["Fase 1", "Fase 2", "Fase 3", "Fase 4"],
      datasets: [{
        label: 'Tempo',
        data: [this.datasetTime[0], this.datasetTime[1], this.datasetTime[2], this.datasetTime[3]],
        backgroundColor: [
          'rgba(99, 255, 132, 0.5)',
          'rgba(99, 255, 132, 0.5)',
          'rgba(99, 255, 132, 0.5)',
          'rgba(99, 255, 132, 0.5)'
        ],
        borderColor: [
          'rgba(99, 255, 132, 1)',
          'rgba(99, 255, 132, 1)',
          'rgba(99, 255, 132, 1)',
          'rgba(99, 255, 132, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      title:{
        text:"Tempo médio por Fase",
        display:true
      },
      scales: {
        yAxes:[{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

}
