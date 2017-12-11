import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import { TdmRecipe } from '../juice-program-configurator/models/tdmrecipe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

// import { TdmRecipe } from 'juice-program-configurator';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  getTopRecipeForUser(): Observable<TdmRecipe> {
    var limit = 1;
    var fromDate = moment().utc().year(2000).format();
    var toDate = moment().utc().format();
    var url = '/users/me/reports/recipes/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate;
    return this.http.get<TdmRecipe[]>(url).flatMap(recipes => {
      if (recipes.length > 0) {
        return Observable.of(recipes[0] || 0);
      } else {
        return Observable.of(null);
      }
    });
  }

  getTopRecipes(limit: number): Observable<TdmRecipe[]> {
    var fromDate = moment().utc().year(2000).format();
    var toDate = moment().utc().format();
    var url = '/reports/recipes/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate;
    var result = this.http.get<TdmRecipe[]>(url);
    console.log("Top Recipes:");
    console.log(result);
    return result;
  }

  getRevenueHistoryForUser() {
    console.log("Hallo?");
    var fromDate = moment().utc().year(2000).format();
    let toDate = moment().utc().endOf('day').format();
    let url = '/users/me/reports/revenue/history?from=' + fromDate + '&to=' + toDate;
    console.log(url);
    var result = this.http.get<any[]>(url);
    return result;
  }

  // getTopRecipeRankingEver(limit: number) {
  //   return this.http
  //     .get(this.reportsUrl + '?sinceDate=' + moment('1970-01-01').format('YYYY-MM-DD HH:mm:ss') + '&topValue=' + limit)
  //     .toPromise()
  //     .then(response => {
  //       //FIXME: debug values
  //       var ranking = [{ "technologydataname": "TRUMPF - Allerlei", "rank": 57, "revenue": "57.0000000000000000" }, { "technologydataname": "Pangalaktischer Donnergurgler", "rank": 55, "revenue": "41.2500000000000000" }, { "technologydataname": "EMOtion", "rank": 27, "revenue": "27.0000000000000000" }, { "technologydataname": "Annas Wasser", "rank": 24, "revenue": "12.0000000000000000" }, { "technologydataname": "Mangomorgana", "rank": 23, "revenue": "5.7500000000000000" }];
  //       return ranking;
  //     })
  //     .catch(this.handleError);
  // }

  // getRevenuePerDayForUser() {
  //   return this.http
  //   .get(this.reportsUrl + 'revenue?sinceDate=' + moment('1970-01-01').format('YYYY-MM-DD HH:mm:ss') + '&time=day')
  //   .toPromise()
  //     .then(response => {
  //       //FIXME: debug values
  //       var revenue = [{"date":"2017-09-15T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-09-15T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"6.7500000000000000"},{"date":"2017-09-15T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.38636363636363636364"},{"date":"2017-09-17T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-09-17T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.00"},{"date":"2017-09-17T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.05113636363636363636"},{"date":"2017-09-18T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-09-18T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.00"},{"date":"2017-09-18T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.70454545454545454545"},{"date":"2017-09-19T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-09-19T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.75000000000000000000"},{"date":"2017-09-19T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.69318181818181818182"},{"date":"2017-09-20T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.50000000000000000000"},{"date":"2017-09-20T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.75000000000000000000"},{"date":"2017-09-20T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.81818181818181818182"},{"date":"2017-09-21T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.50000000000000000000"},{"date":"2017-09-21T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.75000000000000000000"},{"date":"2017-09-21T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.75568181818181818182"},{"date":"2017-09-22T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-09-22T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"1.5000000000000000"},{"date":"2017-09-22T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.53409090909090909091"},{"date":"2017-09-23T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.50000000000000000000"},{"date":"2017-09-23T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"1.5000000000000000"},{"date":"2017-09-23T00:00:00.000Z","technologydataname":"Benchmark","revenue":"1.02272727272727272727"},{"date":"2017-10-06T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-10-06T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.00"},{"date":"2017-10-06T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.02272727272727272727"},{"date":"2017-10-08T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-10-08T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.00"},{"date":"2017-10-08T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.11931818181818181818"},{"date":"2017-10-14T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-10-14T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.00"},{"date":"2017-10-14T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.04545454545454545455"},{"date":"2017-10-16T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-10-16T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.00"},{"date":"2017-10-16T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.03409090909090909091"},{"date":"2017-10-21T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-10-21T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.00"},{"date":"2017-10-21T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.50000000000000000000"},{"date":"2017-10-22T00:00:00.000Z","technologydataname":"Apfelschorle rot/weiß","revenue":"0.00"},{"date":"2017-10-22T00:00:00.000Z","technologydataname":"Bananas Temptation","revenue":"0.00"},{"date":"2017-10-22T00:00:00.000Z","technologydataname":"Benchmark","revenue":"0.25000000000000000000"}];
  //       return revenue;
  //     })
  //     .catch(this.handleError);
  // }

  getRevenueTodayForUser() {
    let fromDate = moment().utc().startOf('day').format();
    let toDate = moment().utc().endOf('day').format();
    let url = '/users/me/reports/revenue?from=' + fromDate + '&to=' + toDate;
    return this.http.get(url).flatMap(res => {
      return Observable.of(res[0].revenue || 0);
    });
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
