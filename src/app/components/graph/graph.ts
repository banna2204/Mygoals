import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  imports: [],
  templateUrl: './graph.html',
  styleUrl: './graph.scss',
})
export class Graph {
  @ViewChild('myChart') chartCanvas!: ElementRef<HTMLCanvasElement>;
  public chart?: Chart;

  ngAfterViewInit() {
    this.initChart();
  }

  initChart() {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          //try with extra data
          // data: [[10, 20], [15, null], [20, 10],5,6,8],

          // add dynamically backgroundColor and currently not required borderColor
          // backgroundColor: [
          //   'rgba(255, 99, 132)',
          //   'rgba(54, 162, 235)',
          //   'rgba(255, 206, 86)',
          //   'rgba(75, 192, 192)',
          //   'rgba(153, 102, 255)',
          //   'rgba(255, 159, 64)'
          // ],
          // borderColor: [
          //   'rgba(255, 99, 132, 1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],

          backgroundColor: function(context) {
            const index = context?.dataIndex;
            const value = context?.dataset?.data[index];
              if(typeof value == 'number'){
                return value > 10 ? 'red' : 'green';
              }
              return 'blue'
          },
          borderWidth: 0,
          barThickness: 22,
          borderRadius: 2,
          // hoverBackgroundColor: [
          //   'rgba(255, 99, 132,0.8)',
          //   'rgba(54, 162, 235,0.8)',
          //   'rgba(255, 206, 86,0.8)',
          //   'rgba(75, 192, 192,0.8)',
          //   'rgba(153, 102, 255,0.8)',
          //   'rgba(255, 159, 64,0.8)'
          // ],
        }],
      },
      options: {
        layout: {
          padding: {
            left: 50
          }
        },
        plugins:{
          tooltip:{
            enabled:true,
            yAlign:'bottom',
            bodyColor:'white',
            titleColor:'white',
            borderColor: 'rgb(0, 0, 255,0.3)',
            backgroundColor: 'rgb(255, 99, 132,0.8)',
            borderWidth: 2,
            callbacks:{
              title: function(context){
                return context[0].label;
              },

              footer: function(context){
                return context[0].dataset.data[context[0]?.dataIndex]?.toLocaleString()
              },

              afterBody: function(context){
                return context[0].dataset.data[context[0]?.dataIndex]?.toLocaleString()
              },
            }
          },
          legend:{
            labels:{
              font:{
                size:5
              }
            }
          }
        },
        indexAxis: 'y',
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            grid:{
              display:false
            },
            border:{
              display:false
            },
            ticks:{
              padding:35,
              font:{
                size:10,weight:600
              },
              color: 'black'
            }
          },

          x: {
            beginAtZero: true,
            grid:{
              display:false
            },
            border:{
              display:false
            },
            ticks:{
              padding: 20,
              display:false
            },
          },
        }
      }
    });
  }
}
