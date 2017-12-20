import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';
import {TdmRecipe} from '../juice-program-configurator/models/tdmrecipe';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import {RevenueReport} from "../models/RevenueReport";
import {RecipeReport} from "../models/RecipeReport";


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

    getTopRecipes(from: Date, to: Date, limit: number): Observable<RecipeReport[]>{
        let fromStr = moment(from).utc().format();
        let toStr = moment(to).utc().format();
        let url = '/api/reports/recipes/top?from=' + fromStr + '&to=' + toStr + '&limit=' + limit;
        return this.http.get(url).map((data: any[]) => {
            var reports: RecipeReport[] = data;
            return reports;
        })
    }

    getRevenueHistoryForUser(from: Date, to: Date): Observable<RevenueReport[]> {
        var fromDate = moment(from).utc().format();
        let toDate = moment(to).utc().format();
        let url = '/api/users/me/reports/revenue/history?from=' + fromDate + '&to=' + toDate;
        console.log(url);
        var result = this.http.get<any[]>(url).map((data: any) => {
            var reports = new Array<RevenueReport>(data.length);
            for (var i in data) {
                let r = new RevenueReport();
                r.revenue = Number.parseFloat(data[i].revenue);
                r.startDate = moment(data[i].date).startOf('day').toDate();
                r.endDate = moment(r.startDate).endOf('day').toDate();
                r.technologydataname = data[i].technologydataname;
                reports[i] = r;
            }
            return reports;
        });
        return result;
    }

    getRevenueForUser(from: Date, to: Date) {
        var fromDate = moment(from).utc().format();
        let toDate = moment(to).utc().format();
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
