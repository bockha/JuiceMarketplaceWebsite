import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'

import * as c3 from 'c3';
import * as moment from 'moment';

import { DashboardService } from '../services/dashboard.service';
import { TdmRecipe } from '../juice-program-configurator/models/tdmrecipe';

@Component({
  selector: 'app-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})

export class DashboardComponent implements OnInit {
  revenueToday: number = -1;
  topRecipe: TdmRecipe = null;
  topRecipeName = "-";
  chartTopRecipes: c3.ChartAPI;
  chartRevenue: c3.ChartAPI;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // pupulate topRecipe
    this.dashboardService.getTopRecipeForUser().subscribe(recipe => {
      this.topRecipe = recipe;
      if (recipe) {
        this.topRecipeName = recipe.technologydataname;
      } else {
        this.topRecipeName = "-";
      }
    });
    // this.dashboardService.getTopRecipeForUser().then(recipe => {
    //   this.topRecipe = recipe;
    //   if (this.topRecipe) {
    //     this.topRecipeName = this.topRecipe.technologydataname;
    //   } else {
    //     this.topRecipeName = "-";
    //   }
    // });

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
    console.log("Loading top recipes chart...");
    this.dashboardService.getTopRecipes(5).subscribe(ranking => {
      console.log("Done!");
      console.log(ranking);
      var keys = ['x'];
      var values = ['value'];

      ranking.forEach(function (info: any) {
        keys.push(info.technologydataname);
        values.push(info.amount);
      }, this);
      console.log(keys);
      console.log(values);
      
      this.chartTopRecipes = c3.generate({
        bindto: "#chart-top-recipes",
        data: {
          x: 'x',
          type: 'bar',
          empty: { label: { text: "Keine Daten vorhanden" } },
          columns: [keys, values],
        },
        bar: {
          width: {
            ratio: 0.9 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
        },
        axis: {
          rotated: true,
          x: {
            type: 'category'
          },
          y: { show: false }

        },
        legend: {
          show: false
        }
      })
    });
  }

  private loadRevenueChart() {
    console.log("loding hist data");
    this.dashboardService.getRevenueHistoryForUser().subscribe(revenues => {
      console.log("Historic Data:");
      console.log(revenues);
    }, error => {
      console.log("Error!");
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

  myIncludes(container: any, value: any) {
    var returnValue = false;
    var pos = container.indexOf(value);
    if (pos >= 0) {
      returnValue = true;
    }
    return returnValue;
  };

}
