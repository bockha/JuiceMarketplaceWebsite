import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core'

import * as c3 from 'c3';
import * as moment from 'moment';

import {DashboardService} from '../services/dashboard.service';
import {TdmRecipe} from '../juice-program-configurator/models/tdmrecipe';

@Component({
    selector: 'app-dashboard',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css',
        '../../../../node_modules/c3/c3.css'
    ],
    providers: [DashboardService]
})

export class DashboardComponent implements OnInit {
    revenueToday: number = null;
    topRecipe: TdmRecipe = null;
    topRecipeName: string = null;
    chartTopRecipes: c3.ChartAPI;
    chartRevenue: c3.ChartAPI;

    constructor(private dashboardService: DashboardService) {
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

        this.dashboardService.getRevenueTodayForUser().subscribe(revenue => {
            this.revenueToday = revenue;
        });

        this.loadTopRecipesChart();
        this.loadRevenueChart();

        // console.log("reading revenue");
        // this.dashboardService.getRevenueForToday();

        // this.dashboardService.getTopRecipes(5).subscribe(ranking => {
        // ranking.sort(function (a: any, b: any) {
        //   return b.rank - a.rank;
        // });
        // $scope.topEver.data.columns = [];

        // var keys = ['x'];
        // var values = ['value'];

        // ranking.forEach(function (drink) {
        //   keys.push(drink.technologydataname);
        //   values.push(drink.rank);
        // }, this);

        // $scope.topEver.data.columns.push(keys);
        // $scope.topEver.data.columns.push(values);

        //   console.log(ranking);
        // });
    }

    private loadTopRecipesChart() {
        this.dashboardService.getTopRecipes(5).subscribe(ranking => {
            var keys = ['x'];
            var values = ['value'];
            var cs: any[] = [];

            ranking.forEach(function (info: any) {
                cs.push([info.technologydataname, info.amount]);
                keys.push(info.technologydataname);
                values.push(info.amount);
            }, this);

            this.chartTopRecipes = c3.generate({
                bindto: "#chart-top-recipes",
                data: {
                    type: 'pie',
                    empty: {label: {text: "Keine Daten vorhanden"}},
                    columns: cs,
                },
            });

            // this.chartTopRecipes = c3.generate({
            //   bindto: "#chart-top-recipes",
            //   data: {
            //     x: 'x',
            //     type: 'bar',
            //     empty: { label: { text: "Keine Daten vorhanden" } },
            //     columns: [keys, values],
            //   },
            //   bar: {
            //     width: {
            //       ratio: 0.9 // this makes bar width 50% of length between ticks
            //     }
            //     // or
            //     //width: 100 // this makes bar width 100px
            //   },
            //   axis: {
            //     rotated: true,
            //     x: {
            //       type: 'category'
            //     },
            //     y: { show: false }

            //   },
            //   legend: {
            //     show: true
            //   }
            // });
        });
    }

    private loadRevenueChart() {
        console.log("loding hist data");
        this.dashboardService.getRevenueHistoryForUser().subscribe(revenues => {
            var drinks = revenues['data'];
            var categories: string[] = [];
            var columns: string[][] = [];
            var techNames: string[] = [];
            var groups: string[] = [];
            var types: { [name: string]: string } = {};
            var i = 0;
            var count = 0;

            revenues.forEach(recipe => {
                console.log(recipe);
            });
            //categories.push(moment('2017-01-01').format('YYYY-MM-DD'));

            revenues.forEach(revenueData => {
                //Get Categories for X-Axis
                if (!this.contains(categories, moment(revenueData.date).format('YYYY-MM-DD'))) {
                    categories.push(moment(revenueData.date).format('YYYY-MM-DD'));
                }

                if (!this.contains(techNames, revenueData.technologydataname)) {
                    techNames.push(revenueData.technologydataname);
                    columns.push([revenueData.technologydataname]);
                    if (revenueData.technologydataname == "Benchmark") {
                        types[revenueData.technologydataname] = "line";
                    } else {
                        groups.push(revenueData.technologydataname);
                        types[revenueData.technologydataname] = "area";
                    }
                }

                columns.forEach(column => {
                    if (column[0] == revenueData.technologydataname) {
                        column.push(revenueData.revenue);
                    }
                });
            });

            this.chartTopRecipes = c3.generate({
                bindto: "#chart-revenue",
                data: {
                    x: 'x',
                    columns: [
                        ['x'].concat(categories),
                    ].concat(columns),
                    types: types,
                    // columns: columns,
                },
                point: {
                    r: 0,
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },

                axis: {
                    x: {
                        // padding: {
                        //   left: 0,
                        //   right: 0,
                        // },
                        // categories: categories,
                        // label: 'Datum',
                        type: 'timeseries',
                        tick: {
                            format: '%Y-%m-%d'
                        },
                        // type: 'category',
                        // tick: {
                        //   fit: true,
                        //   outer: true,
                        //   culling: { max: 6 }
                        // }
                    },
                    y: {
                        label: 'Umsatz',
                        // tick: {
                        //   count: 5,
                        // }
                        // padding: {
                        //   bottom: 0
                        // },
                        // inner: true
                    },
                },
            });

            //   $scope.revenuePerDay.data.columns = columns;
            //   $scope.revenuePerDay.axis.x.categories = categories;
            //   $scope.revenuePerDay.data.groups = new Array(techName);
            //   $scope.revenuePerDay.data.types =  type;

            console.log("categories");
            console.log(categories);
            console.log(techNames);
            console.log(groups);
            console.log(columns);
            console.log(types);

            //  // Get Revenue
            //  drinks.forEach(function (revData) {
            //      count=0;
            //      techName.forEach(function (tName) {
            //          if(tName == revData.technologydataname) {
            //              //if(count == 0) { columns[count].push('0');}
            //              columns[count].push(revData.revenue);
            //          }
            //          count++;
            //      }, this);
            //  }, this);

            //  var index;
            //  //Create Groups without Benchmark
            //   techName.forEach(function (name) {
            //       if(name == "Benchmark") {
            //           index = techName.indexOf(name)
            //           techName.splice(index,1);
            //       }
            //   }, this);
            //   $scope.revenuePerDay.data.columns = columns;
            //   $scope.revenuePerDay.axis.x.categories = categories;
            //   $scope.revenuePerDay.data.groups = new Array(techName);
            //   $scope.revenuePerDay.data.types =  type;

        }, error => {
            console.log(error);
            //   // var categories: string[] = [];
            //   // var columns: string[] = []
            //   // var techName: string[] = []
            //   // var types: string[] = []
            //   // var i = 0;
            //   // var count = 0;

            //   // //Get Categories
            //   // revenues.forEach(function (revenueData: any) {
            //   //   //Get Categories for X-Axis
            //   //   if (!this.myIncludes(moment(revenueData.date).format('YYYY-MM-DD'))) {
            //   //     categories.push(moment(revenueData.date).format('YYYY-MM-DD'));
            //   //   }
            //   //   i++;
            //   // }, this);

            //   // //Get TechnologyDataName
            //   // i = 0;
            //   // revenues.forEach(function (revenueData: any) {
            //   //   if (!this.myIncludes(revenueData.technologydataname)) {
            //   //     techName.push(revenueData.technologydataname);
            //   //     columns.push(revenueData.technologydataname);
            //   //     types.push(revenueData.technologydataname);
            //   //   }
            //   //   i++;
            //   // }, this);

            //   // //Create types
            //   // i = 0;
            //   // var type = new Object();
            //   // techName.forEach(function (name) {
            //   //   if (name == "Benchmark") {
            //   //     type[name] = "line";
            //   //   }
            //   //   else {
            //   //     type[name] = "area";
            //   //   }
            //   //   i++;
            //   // }, this);

            //   // // Get Revenue
            //   // revenues.forEach(function (revenueData: any) {
            //   //   count = 0;
            //   //   techName.forEach(function (tName) {
            //   //     if (tName == revenueData.technologydataname) {
            //   //       columns[count].push(revenueData.revenue);
            //   //     }
            //   //     count++;
            //   //   }, this);
            //   // }, this);

            //   // var index;
            //   // //Create Groups without Benchmark
            //   // techName.forEach(function (name) {
            //   //   if (name == "Benchmark") {
            //   //     index = techName.indexOf(name)
            //   //     techName.splice(index, 1);
            //   //   }
            //   // }, this);

            //   // $scope.revenuePerDay.data.columns = columns;
            //   // $scope.revenuePerDay.axis.x.categories = categories;
            //   // $scope.revenuePerDay.data.groups = new Array(techName);
            //   // $scope.revenuePerDay.data.types = type;


            //   revenues.forEach(function (info: any) {
            //     // console.log(info);
            //     // keys.push(info.technologydataname);
            //     // values.push(info.rank);
            //   }, this);

            //   this.chartRevenue = c3.generate({
            //     bindto: "#chart-revenue",
            //     // size: {
            //     //   height: 250,
            //     //   width: 750
            //     // },
            //     data: {
            //       columns: [],
            //       types: {},
            //       groups: [],
            //       empty: { label: { text: "Keine Daten vorhanden" } }

            //     },
            //     axis: {
            //       x: {
            //         label: 'Datum',
            //         type: 'category',
            //         categories: []
            //       },
            //       y: {
            //         label: 'Umsatz',
            //         padding: {
            //           bottom: 0
            //         },
            //         inner: true
            //       }
            //     },
            //     legend: {
            //       show: true
            //     }
            //   })
        });
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
