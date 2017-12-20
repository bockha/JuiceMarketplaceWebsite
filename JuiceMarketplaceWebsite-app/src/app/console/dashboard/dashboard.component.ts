import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core'

import * as c3 from 'c3';
import * as moment from 'moment';

import {DashboardService} from '../services/dashboard.service';
import {TdmRecipe} from '../juice-program-configurator/models/tdmrecipe';
import {RevenueReport} from "../models/RevenueReport";
import * as async from 'async';
import {RecipeReport} from "../models/RecipeReport";
import {EventManager} from "@angular/platform-browser";
import {VaultService} from "../services/vault.service";

@Component({
    selector: 'app-dashboard',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css',
        '../../../../node_modules/c3/c3.css'
    ],
    providers: [DashboardService, VaultService]
})

export class DashboardComponent implements OnInit {
    revenueToday: number = null;
    topRecipe: TdmRecipe = null;
    topRecipeName: string = null;


    revenueHistory: RevenueReport[];
    revenueHistoryData: any;

    topRecipes: RecipeReport[];
    topRecipesData: any;
    vaultBalance = 0;

    constructor(private dashboardService: DashboardService,
                private eventManager: EventManager,
                private vaultService: VaultService) {
        eventManager.addGlobalEventListener('window', 'resize',
            (e: any) => {
                this.drawRevenueChart();
                this.drawTopRecipes();
            });
    }

    ngOnInit() {

        // pupulate topRecipe
        this.dashboardService.getTopRecipeForUser().subscribe(recipe => {
            this.topRecipe = recipe;
            if (recipe) {
                this.topRecipeName = recipe.technologydataname;
            } else {
                this.topRecipeName = null;
            }
        });

        let fromToday = moment().startOf('day').toDate();
        let toToday = moment().endOf('day').toDate();
        this.dashboardService.getRevenueForUser(fromToday, toToday).subscribe(revenue => {
            this.revenueToday = revenue;
        });


        let from = moment().year(2000).toDate();
        let to = moment().endOf('day').toDate();
        this.dashboardService.getRevenueHistoryForUser(from, to).subscribe(revenues => {
            this.revenueHistory = revenues;
            this.drawRevenueChart();
        });

        this.dashboardService.getTopRecipes(from, to, 5).subscribe(recipes => {
            this.topRecipes = recipes;
            this.drawTopRecipes();
        })

        this.vaultService.getVaultBalance().subscribe(balance=>{
            this.vaultBalance = balance / 100000;
        }, error2 => console.log(error2));

        // this.loadTopRecipesChart();
        // this.loadRevenueChart();
    }

    // private loadTopRecipesChart() {
    //     this.dashboardService.getTopRecipes(5).subscribe(ranking => {
    //         var keys = ['x'];
    //         var values = ['value'];
    //         var cs: any[] = [];
    //
    //         ranking.forEach(function (info: any) {
    //             cs.push([info.technologydataname, info.amount]);
    //             keys.push(info.technologydataname);
    //             values.push(info.amount);
    //         }, this);
    //
    //         this.chartTopRecipes = c3.generate({
    //             bindto: "#chart-top-recipes",
    //             data: {
    //                 type: 'pie',
    //                 empty: {label: {text: "Keine Daten vorhanden"}},
    //                 columns: cs,
    //             },
    //         });
    //     });
    // }

    private drawTopRecipes() {
        var data = [];


        data.push(['Rezept', 'Anzahl']);
        // var regions = [{start: reports.length - 1}];
        for (var i in this.topRecipes) {

            data.push([this.topRecipes[i].technologydataname, this.topRecipes[i].amount]);

        }

        this.topRecipesData = {
            chartType: 'BarChart',
            dataTable: data,
            options: {
                legend: {position: 'none'},
                hAxis: {
                    textPosition: 'none'

                },
                bars: 'horizontal',
            }
        };
    }

    private drawRevenueChart() {

        var data: any[][] = [];
        var series = {};
        var columns: any[][] = [];
        var techNames: string[] = [];
        var techcount = 0;
        var self = this;
        columns[0] = ["Datum"];
        async.each(this.revenueHistory, function (revenue: RevenueReport, callback) {
            if (!self.contains(columns[0], moment(revenue.endDate).format("DD.MM."))) {
                columns[0].push(moment(revenue.endDate).format("DD.MM."));
            }
            if (!self.contains(techNames, revenue.technologydataname)) {
                techNames.push(revenue.technologydataname);
                techcount += 1;
                columns.push([revenue.technologydataname]);
                if (revenue.technologydataname === "Benchmark") {
                    series[(techcount).toString()] = {type: 'line'};
                } else {
                    series[(techcount).toString()] = {type: 'area'};
                }

                columns[techcount].push(revenue.revenue);
            }
            callback();
        }, function (err) {

            // for (var t in techNames) {
            //     data[0].push(techNames[t]);
            // }
            for (var r in columns[0]) {
                data.push([]);
                for (var c in columns) {
                    data[r].push(columns[c][r]);
                }
            }


            console.log("fertsch");

        });


        this.revenueHistoryData = {
            chartType: 'ComboChart',
            dataTable: data,
            options: {
                axisTitlesPosition: 'in',
                legend: {position: 'bottom'},

                series: series
            }


        }


    }

    contains(container: any, value: any) {
        var returnValue = false;
        var pos = container.indexOf(value);
        if (pos >= 0) {
            returnValue = true;
        }
        return returnValue;
    };

}
