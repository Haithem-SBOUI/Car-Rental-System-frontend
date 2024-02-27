import {Component, OnInit} from '@angular/core';
import {Chart} from "angular-highcharts";
import {VehicleService} from "../../../core/service/vehicle.service";
import {map} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dataa: any;
  lineChart1: any;
  pieChartData:any;
  char1: any = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Corn vs wheat estimated production for 2020',
      align: 'left'
    },
    subtitle: {
      text:
        'Source: <a target="_blank" ' +
        'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      align: 'left'
    },
    xAxis: {
      categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
      crosshair: true,
      accessibility: {
        description: 'Countries'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '1000 metric tons (MT)'
      }
    },
    tooltip: {
      valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        type: 'column', // Specify the type for column chart
        name: 'Corn',
        data: [406292, 260000, 107000, 68300, 27500, 14500]
      },
      {
        type: 'column', // Specify the type for column chart
        name: 'Wheat',
        data: [51086, 136000, 5500, 141000, 107180, 77000]
      }
    ]

  })

  constructor(private vehicleService: VehicleService) {

  }

  ngOnInit() {
    this.vehicleService.findNumberCarByBrand().subscribe(
      (response: any) => {
        this.dataa = response;
        this.pieChartData = this.dataa.map((item: any) => ({
          name: item[0],
          y: item[1]
        }));
        this.createChart();

        console.log("this.dataa", this.dataa)
        console.log("this.pieChartData", this.pieChartData)


      }
    )


  }

  createChart() {
    this.lineChart1 = new Chart({
      chart: {
        type: 'line',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: '3D',
        // align: 'left'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },

      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Share',
        data: this.pieChartData
      }]

    })
  }


  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patients'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patients admitted',
        data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
      } as any
    ]

  })

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          {name: 'COVID 19', y: 1, color: '#eeeeee'},

          {name: 'HIV/AIDS', y: 2, color: '#393e46'},

          {name: 'EBOLA', y: 3, color: '#00adb5'},
          {name: 'DISPORA', y: 4, color: '#eeeeee'},
          {name: 'DIABETES', y: 5, color: '#506ef9'},
        ],
      },
    ],
  })


}
