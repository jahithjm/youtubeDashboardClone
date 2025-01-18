import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import Chart, { elements } from 'chart.js/auto';


@Component({
  selector: 'app-graph',
  imports:[ MatButtonModule],
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  @ViewChild('chart', { static: true }) chart!: ElementRef;

  ngOnInit(): void {
    new Chart(this.chart.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Series A',
            data: [10, 20, 30, 40, 50],
            borderColor:'rgb(255,99,132)',
            backgroundColor:'rgba(255,99,132,0.5)',
            fill: 'start'
          },
        ],
    },
    options: {
      maintainAspectRatio: false,
      elements: {
        line:{
          tension: 0.4,
        }
      }
    }
    }

  )
  }
}
