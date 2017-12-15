import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StatisticsService} from "../services/statistics.service";
import * as moment from 'moment';
import * as c3 from "c3";
import {RevenueReport} from "../models/RevenueReport";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    providers: [StatisticsService]
})
export class OverviewComponent implements OnInit {


    constructor(private router: Router, private activatedRoute: ActivatedRoute, private statisticsService: StatisticsService) {
    }

    reports: RevenueReport[];
    chartRevenueHour: c3.ChartAPI;

    ngOnInit() {
        let from = moment().utc().startOf('day').toDate();
        let to = moment().utc().endOf('day').toDate();
        this.statisticsService.getRevenueReport(from, to, true).subscribe(reports => {
            this.reports = reports;
            var x = [];
            x[0] = 'x';
            var data = []
            data[0] = 'Lizenzkäufe';
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {
                x.push(moment(reports[i].endDate).format("THH:mm:SS"));
                data.push(this.reports[i].amount);

            }


            this.chartRevenueHour = c3.generate({
                bindto: '#chart-revenue-hour',
                data: {
                    x: 'x',
                    columns: [x, data],
                    // regions: regions
                },
                axis:{
                    x: {
                        type: 'timeseries',
                        tick:{

                            format:'%H:%M'
                        }
                    }
                }
            })


        }, error2 => {
            console.log(error2)
        })
        // this.router.navigate([{outlets: {'sidebar': ['statistics']}}]);
    }

}
