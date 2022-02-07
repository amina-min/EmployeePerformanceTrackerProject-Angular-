import { Component, OnInit } from '@angular/core';
import { EChartsCoreOption, EChartsOption } from 'echarts';

@Component({
  selector: 'app-ratingchart',
  templateUrl: './ratingchart.component.html',
  styleUrls: ['./ratingchart.component.css']
})
export class RatingchartComponent implements OnInit {

  constructor() { }

  option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['thamina', 'thaayeem', 'Med', 'Rakib', 'rabbi', 'badrool', 'Cat', 'Rat']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          350,
          {
            value: 500,
            itemStyle: {
              color: '#a90000'
            }
          },
          400,
          450,         
          300,
          350,       
          470
        ],
        type: 'bar'
      }
    ]
  };

  ngOnInit(): void {
  }

}
