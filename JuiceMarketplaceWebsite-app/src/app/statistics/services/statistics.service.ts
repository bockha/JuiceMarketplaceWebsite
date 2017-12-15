import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RevenueReport} from "../models/RevenueReport";
import {Observable} from "rxjs/Observable";
import * as moment from 'moment';
import 'rxjs/add/operator/map'

@Injectable()
export class StatisticsService{
    constructor(private http:HttpClient){

    }

    getRevenueReport(from: Date, to: Date, byHour: boolean): Observable<RevenueReport[]>{


        let fromStr = moment(from).utc().format();
        let toStr = moment(to).utc().format();
        let detail = 'day';
        if (byHour) {
            detail = 'hour';
        }
        let url  = '/api/reports/revenue?from=' + fromStr + '&to=' + toStr + '&detail=' + detail;
        return this.http.get(url).map((data:any[]) =>{
            var reports = new Array<RevenueReport>(data.length);
            for(var i in data){
                let r = new RevenueReport();
                r.amount = Number.parseInt(data[i].amount);
                r.revenue = Number.parseInt(data[i].revenue);
                r.startDate = moment(data[i].date).add(Number.parseInt(data[i].hour),'hour').toDate();
                r.endDate = moment(r.startDate).add(1,'hour').toDate();
                reports[i] = r;
            }
            return reports;
        })
    }


}