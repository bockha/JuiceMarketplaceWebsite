import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StatisticsService} from "../services/statistics.service";
import * as moment from 'moment';
import {RevenueReport} from "../models/RevenueReport";
import {ComponentReport} from "../models/ComponentReport";
import {RecipeReport} from "../models/RecipeReport";
import { EventManager } from '@angular/platform-browser';
import * as async from "async";

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

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
                private statisticsService: StatisticsService, private eventManager: EventManager) {
        eventManager.addGlobalEventListener('window', 'resize',
            (e: any) => {
                this.drawAllTimeTopRecipes()
                this.drawComponentReports()
                this.drawDayReport()
                this.drawHourReports()
                this.drawTodayTopRecipes()
            });
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
        let from = moment().startOf('day').hours(8).toDate();
        let to = moment().startOf('day').hours(20).toDate();
        // let to = moment().utc().endOf('day').toDate();
        this.statisticsService.getRevenueReport(from, to, true).subscribe(reports => {
            this.hourreports = reports;
            this.drawHourReports();

        }, error2 => {
            console.log(error2)
        });


        let from2 = moment().utc().startOf('day').subtract(1, 'month').toDate();
        let to2 = moment().utc().endOf('day').toDate();
        this.statisticsService.getRevenueReport(from2, to2, false).subscribe(reports => {
            this.dayreports = reports;
            this.drawDayReport();

        }, error2 => {
            console.log(error2)
        });

        let from3 = moment([2010]).toDate()
        let to3 = moment().utc().endOf('day').toDate();
        this.statisticsService.getTopComponents(from3, to3, 10).subscribe(reports => {
            this.componentreports = reports;
            this.drawComponentReports();

        }, error2 => {
            console.log(error2)
        })

        let from4 = moment([2010]).toDate()
        let to4 = moment().utc().endOf('day').toDate();
        this.statisticsService.getTopRecipes(from4, to4, 10).subscribe(reports => {
            this.allTimeTopRecipes = reports;
            this.drawAllTimeTopRecipes();

        }, error2 => {
            console.log(error2)
        })

        let from5 = moment().utc().startOf('day').toDate();
        let to5 = moment().utc().endOf('day').toDate();
        this.statisticsService.getTopRecipes(from5, to5, 10).subscribe(reports => {
            this.todayTopRecipes = reports;
            this.drawTodayTopRecipes();

        }, error2 => {
            console.log(error2)
        })


    }

    private drawHourReports() {
        var x = [];
        x[0] = 'x';
        var data = [];


        // var regions = [{start: reports.length - 1}];
        for (var i in this.hourreports) {

            var time = this.hourreports[i].startDate;
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

                },
                hAxis:{
                    format: "HH:mm"
                }
            }
        };
        data.reverse();
    }

    private drawDayReport() {

        var data = [];


        data.push(['Tageszeit', 'Umsatz']);
        // var regions = [{start: reports.length - 1}];
        for (var i in this.dayreports) {

            var time = this.dayreports[i].startDate;
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

                },
                hAxis: {
                    format: 'dd.MM.'
                }
            }
        };
    }

    private drawComponentReports() {

        var data = [];


        data.push(['Zutat', 'Verwendung in Getränken', {role: 'style'}]);
        // var regions = [{start: reports.length - 1}];
        for (var i in this.componentreports) {

            data.push([this.componentreports[i].componentname, this.componentreports[i].amount,
                this.getColorForComponent(this.componentreports[i].componentname)]);

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
    }

    private drawAllTimeTopRecipes( ) {
        var data = [];


        data.push(['Rezept', 'Anzahl']);
        // var regions = [{start: reports.length - 1}];
        for (var i in this.allTimeTopRecipes) {

            data.push([this.allTimeTopRecipes[i].technologydataname, this.allTimeTopRecipes[i].amount]);

        }

        this.allTimeTopRecipesData = {
            chartType: 'BarChart',
            dataTable: data,
            options: {
                legend: {position: 'none'},
                hAxis: {
                    minValue: 0,
                    format: '#'

                },
                bars: 'horizontal'
            }
        };
    }

    private drawTodayTopRecipes() {
        var x = [];
        x[0] = 'x';
        var data = [];


        data.push(['Rezept', 'Anzahl']);
        // var regions = [{start: reports.length - 1}];
        for (var i in this.todayTopRecipes) {

            data.push([this.todayTopRecipes[i].technologydataname, this.todayTopRecipes[i].amount]);

        }

        this.todayTopRecipesData = {
            chartType: 'BarChart',
            dataTable: data,
            options: {
                legend: {position: 'none'},
                hAxis: {
                    minValue: 0,
                    format: '#'

                },
                bars: 'horizontal'
            }
        };
    }
}
