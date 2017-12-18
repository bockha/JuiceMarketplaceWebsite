import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StatisticsService} from "../services/statistics.service";
import * as moment from 'moment';
import * as c3 from "c3";
import {RevenueReport} from "../models/RevenueReport";
import {ComponentReport} from "../models/ComponentReport";
import {RecipeReport} from "../models/RecipeReport";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    providers: [StatisticsService]
})
export class OverviewComponent implements OnInit {


    getColorForComponent(componentName: string): string {
        var color;

        switch (componentName) {
            case 'Mineralwasser':
                color = '#25e2ff';
                break;
            case 'Kirschsaft':
                color = '#900006';
                break;
            case 'Orangensaft':
                color = '#ffb100';
                break;
            case 'Maracujasaft':
                color = '#ff9a00';
                break;
            case 'Ananassaft':
                color = '#fff100';
                break;
            case 'Bananensaft':
                color = '#fffd84';
                break;
            case 'Apfelsaft':
                color = '#ffae7e';
                break;
            case 'Mangosaft':
                color = '#ffc413';
                break;
            case 'Advents-Früchtetee':
                color = '#ff2600';
                break;
            case 'Havana Club (RUM)':
                color = '#ffc900';
                break;

            default:
                color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
                break;
        }

        return color;
    }

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private statisticsService: StatisticsService) {
    }

    hourreports: RevenueReport[];
    dayreports: RevenueReport[];
    componentreports: ComponentReport[];
    allTimeTopRecipes: RecipeReport[];
    todayTopRecipes: RecipeReport[];
    revenuePerHourData: any;
    revenuePerDayData: any;
    topComponentsData: any;
    allTimeTopRecipesData: any;
    todayTopRecipesData: any;


    ngOnInit() {
        let from = moment().utc().startOf('day').toDate();
        let to = moment().utc().endOf('day').toDate();
        this.statisticsService.getRevenueReport(from, to, true).subscribe(reports => {
            this.hourreports = reports;
            var x = [];
            x[0] = 'x';
            var data = [];


            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {

                var time = moment(reports[i].endDate).format("HH:mm");
                data.push([time, this.hourreports[i].amount]);

            }
            data.push(['Tageszeit', 'Umsatz']);

            this.revenuePerHourData = {
                chartType: 'AreaChart',
                dataTable: data,
                options: {
                    legend: {position: 'none'},
                    vAxis: {
                        minValue: 0,
                        gridlines: {count: -1}

                    }
                }
            };
            data.reverse();

        }, error2 => {
            console.log(error2)
        });


        let from2 = moment().utc().startOf('day').subtract(1, 'month').toDate();
        let to2 = moment().utc().endOf('day').toDate();
        this.statisticsService.getRevenueReport(from2, to2, false).subscribe(reports => {
            this.dayreports = reports;
            var x = [];
            x[0] = 'x';
            var data = [];


            data.push(['Tageszeit', 'Umsatz']);
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {

                var time = moment(reports[i].endDate).format("DD.MM.");
                data.push([time, this.dayreports[i].amount]);

            }

            this.revenuePerDayData = {
                chartType: 'AreaChart',
                dataTable: data,
                options: {
                    legend: {position: 'none'},
                    vAxis: {
                        minValue: 0,
                        gridlines: {count: -1}

                    }
                }
            };

        }, error2 => {
            console.log(error2)
        });

        let from3 = moment([2010]).toDate()
        let to3 = moment().utc().endOf('day').toDate();
        this.statisticsService.getTopComponents(from3, to3, 10).subscribe(reports => {
            this.componentreports = reports;
            var x = [];
            x[0] = 'x';
            var data = [];


            data.push(['Zutat', 'Verwendung in Getränken', {role: 'style'}]);
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {

                data.push([reports[i].componentname, reports[i].amount, this.getColorForComponent(reports[i].componentname)]);

            }

            this.topComponentsData = {
                chartType: 'ColumnChart',
                dataTable: data,
                options: {
                    legend: {position: 'none'},
                    vAxis: {
                        minValue: 0,
                        gridlines: {count: -1}

                    }
                }
            };

        }, error2 => {
            console.log(error2)
        })

        let from4 = moment([2010]).toDate()
        let to4 = moment().utc().endOf('day').toDate();
        this.statisticsService.getTopRecipes(from4, to4, 10).subscribe(reports => {
            this.allTimeTopRecipes = reports;
            var x = [];
            x[0] = 'x';
            var data = [];


            data.push(['Rezept', 'Anzahl']);
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {

                data.push([reports[i].technologydataname, reports[i].amount]);

            }

            this.allTimeTopRecipesData = {
                chartType: 'BarChart',
                dataTable: data,
                options: {
                    legend: {position: 'none'},
                    hAxis: {
                        minValue: 0,
                        format:'#'

                    },
                    bars: 'horizontal'
                }
            };

        }, error2 => {
            console.log(error2)
        })

        let from5 = moment().utc().startOf('day').toDate();
        let to5 = moment().utc().endOf('day').toDate();
        this.statisticsService.getTopRecipes(from5, to5, 10).subscribe(reports => {
            this.todayTopRecipes = reports;
            var x = [];
            x[0] = 'x';
            var data = [];


            data.push(['Rezept', 'Anzahl']);
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {

                data.push([reports[i].technologydataname, reports[i].amount]);

            }

            this.todayTopRecipesData = {
                chartType: 'BarChart',
                dataTable: data,
                options: {
                    legend: {position: 'none'},
                    hAxis: {
                        minValue: 0,
                        format:'#'

                    },
                    bars: 'horizontal'
                }
            };

        }, error2 => {
            console.log(error2)
        })


    }

}
