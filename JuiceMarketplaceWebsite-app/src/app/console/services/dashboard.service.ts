import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';
import {TdmRecipe} from '../juice-program-configurator/models/tdmrecipe';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient) {
    }

    getTopRecipeForUser(): Observable<TdmRecipe> {
        var limit = 1;
        var fromDate = moment().utc().year(2000).format();
        var toDate = moment().utc().format();
        var url = '/api/users/me/reports/recipes/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate;
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
        var url = '/api/reports/recipes/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate;
        var result = this.http.get<TdmRecipe[]>(url);
        console.log("Top Recipes:");
        console.log(result);
        return result;
    }

    getRevenueHistoryForUser() {
        console.log("Hallo?");
        var fromDate = moment().utc().year(2000).format();
        let toDate = moment().utc().endOf('day').format();
        let url = '/api/users/me/reports/revenue/history?from=' + fromDate + '&to=' + toDate;
        console.log(url);
        var result = this.http.get<any[]>(url);
        return result;
    }

    getRevenueTodayForUser() {
        let fromDate = moment().utc().startOf('day').format();
        let toDate = moment().utc().endOf('day').format();
        let url = '/api/users/me/reports/revenue?from=' + fromDate + '&to=' + toDate;
        return this.http.get(url).flatMap(res => {
            return Observable.of(res[0].revenue || 0);
        });
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
