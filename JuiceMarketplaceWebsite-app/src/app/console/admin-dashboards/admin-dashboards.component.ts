import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboards',
  templateUrl: './admin-dashboards.component.html',
  styleUrls: ['./admin-dashboards.component.css']
})
export class AdminDashboardsComponent implements OnInit {

  constructor() { }

    machinesConnectedData =  {
        chartType: 'Timeline',
        dataTable: [
            [{type: 'string', id: 'Role'},{type: 'string', id: 'dummy bar label'},{type: 'string', role: 'tooltip'},{type: 'string', role: 'style'},{type: 'date', id: 'Start'},{type: 'date', id: 'End'}],
            ['1',null,'4 Verkaufte Lizenzen','#00ff00',new Date(2018,3,15,10,1,0),new Date(2018,3,15,10,50,0)],
            ['1',null,'4 Verkaufte Lizenzen','#00ffff',new Date(2018,3,15,8,1,0),new Date(2018,3,15,10,0,0)],
            ['2',null,'4 Verkaufte Lizenzen','#00ff00',new Date(2018,3,15,9,1,0),new Date(2018,3,15,9,1,0)],
            ['3',null,'4 Verkaufte Lizenzen','#ffff00',new Date(2018,3,15,9,1,0),new Date(2018,3,15,10,50,0)],
            ['4',null,'4 Verkaufte Lizenzen','#00ffaa',new Date(2018,3,15,9,30,0),new Date(2018,3,15,10,30,0)]
        ],
        options: {
            title: 'Aktivität der Maschinen',
            timeline: {
                groupByRowLabel: true
            }
        }
    };


    machinesGeolocationData = {
        chartType: 'GeoChart',
        apiKey: 'AIzaSyDlZ5Yh79toiIzEV_NIQGX8F42663WGTxg',
        dataTable: [
            ['Lat', 'Long', 'Value'],
            [49.431411, 7.751871, 2],
            [48.251981, 11.634248, 2],
            [49.798497, 8.823595, 3],
            [49.000273, 8.409850, 4],
            [48.817400, 9.065440, 5],
        ],
        options:{
            region: 'DE',
            sizeAxis: { minValue: 0, maxValue: 10 },
        }
    };

    componentConfigurationData = {
        chartType: "Sankey",
        dataTable: [
            ['From', 'To', 'Weight'],
            ['A','Mineralwasser', 1],
            ['A','Orangensaft', 1],
            ['A','Apfelsaft', 1],
            ['A','Mangosaft', 1],
            ['A','Maracujasaft', 1],
            ['A','Ananassaft', 1],
            ['A','Bananensaft', 1],
            ['A','Kirschsaft', 1],
            ['B','Mineralwasser', 1],
            ['B','Orangensaft', 1],
            ['B','Apfelsaft', 1],
            ['B','Mangosaft', 1],
            ['B','Maracujasaft', 1],
            ['B','Ananassaft', 1],
            ['B','Bananensaft', 1],
            ['B','Limettensaft', 1],
            ['C','Mineralwasser', 1],
            ['C','Orangensaft', 1],
            ['C','Apfelsaft', 1],
            ['C','Mangosaft', 1],
            ['C','Maracujasaft', 1],
            ['C','Rum', 1],
            ['C','Wodka', 1],
            ['C','Limettensaft', 1]
        ],
        options:{
            width: 600
        }
    }

  ngOnInit() {
  }

}



