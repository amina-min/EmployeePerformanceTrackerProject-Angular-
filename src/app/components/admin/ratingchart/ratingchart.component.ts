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
      data: ['Amina', 'Nayeem', 'Khalil', 'Mehdi', 'Rakib', 'Rabu', 'Bodrul']
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
          500,
          350,
          100,
          300,
          350,
          200,
          470
        ],
        type: 'bar'
      }
    ]
  };

  ngOnInit(): void {
  }

}
