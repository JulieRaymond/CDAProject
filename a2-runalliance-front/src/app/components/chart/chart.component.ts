import {Component} from '@angular/core';
import {MatTab, MatTabContent, MatTabGroup} from "@angular/material/tabs";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    CanvasJSAngularChartsModule,
    MatTabContent
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  columnChartOptions = {
    title: {
      text: "Column Chart"
    },
    data: [{
      type: "column",
      dataPoints: [
        {label: "Apple", y: 10},
        {label: "Orange", y: 15},
        {label: "Banana", y: 25},
        {label: "Mango", y: 30},
        {label: "Grape", y: 28}
      ]
    }]
  };

  pieChartOptions = {
    title: {
      text: "Pie Chart"
    },
    data: [{
      type: "pie",
      dataPoints: [
        {label: "Apple", y: 10},
        {label: "Orange", y: 15},
        {label: "Banana", y: 25},
        {label: "Mango", y: 30},
        {label: "Grape", y: 28}
      ]
    }]
  };

  lineChartOptions = {
    title: {
      text: "Line Chart"
    },
    data: [{
      type: "line",
      dataPoints: [
        {label: "Apple", y: 10},
        {label: "Orange", y: 15},
        {label: "Banana", y: 25},
        {label: "Mango", y: 30},
        {label: "Grape", y: 28}
      ]
    }]
  };
}
