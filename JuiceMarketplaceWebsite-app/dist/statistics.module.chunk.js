webpackJsonp(["statistics.module"],{

/***/ "../../../../../src/app/statistics/creators/creators.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/statistics/creators/creators.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  creators works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/statistics/creators/creators.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatorsComponent = (function () {
    function CreatorsComponent() {
    }
    CreatorsComponent.prototype.ngOnInit = function () {
    };
    CreatorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-creators',
            template: __webpack_require__("../../../../../src/app/statistics/creators/creators.component.html"),
            styles: [__webpack_require__("../../../../../src/app/statistics/creators/creators.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatorsComponent);
    return CreatorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/statistics/models/RevenueReport.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevenueReport; });
var RevenueReport = (function () {
    function RevenueReport() {
    }
    return RevenueReport;
}());



/***/ }),

/***/ "../../../../../src/app/statistics/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/statistics/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-card  class=\"iuno-card \">\n    <mat-card-header>\n      <mat-card-title>\n        <span class=\"card-title\">Lizenzverkäufe im Tagesverlauf</span>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <google-chart [data]=\"revenuePerHourData\"></google-chart>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card  class=\"iuno-card \">\n    <mat-card-header>\n      <mat-card-title>\n        <span class=\"card-title\">Lizenzverkäufe im des letzten Monats</span>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <google-chart [data]=\"revenuePerDayData\"></google-chart>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card  class=\"iuno-card \">\n    <mat-card-header>\n      <mat-card-title>\n        <span class=\"card-title\">Die beliebtesten Zutaten</span>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <google-chart [data]=\"topComponentsData\"></google-chart>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card  class=\"iuno-card \">\n    <mat-card-header>\n      <mat-card-title>\n        <span class=\"card-title\">Die beliebtesten Rezepte aller Zeiten</span>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <google-chart [data]=\"allTimeTopRecipesData\"></google-chart>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card  class=\"iuno-card \">\n    <mat-card-header>\n      <mat-card-title>\n        <span class=\"card-title\">Die beliebtesten Rezepte heute</span>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <google-chart [data]=\"todayTopRecipesData\"></google-chart>\n    </mat-card-content>\n  </mat-card>\n\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/statistics/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__ = __webpack_require__("../../../../../src/app/statistics/services/statistics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverviewComponent = (function () {
    function OverviewComponent(router, activatedRoute, statisticsService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.statisticsService = statisticsService;
    }
    OverviewComponent.prototype.getColorForComponent = function (componentName) {
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
    };
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var from = __WEBPACK_IMPORTED_MODULE_3_moment__().utc().startOf('day').toDate();
        var to = __WEBPACK_IMPORTED_MODULE_3_moment__().utc().endOf('day').toDate();
        this.statisticsService.getRevenueReport(from, to, true).subscribe(function (reports) {
            _this.hourreports = reports;
            var x = [];
            x[0] = 'x';
            var data = [];
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {
                var time = __WEBPACK_IMPORTED_MODULE_3_moment__(reports[i].endDate).format("HH:mm");
                data.push([time, _this.hourreports[i].amount]);
            }
            data.push(['Tageszeit', 'Umsatz']);
            _this.revenuePerHourData = {
                chartType: 'AreaChart',
                dataTable: data,
                options: {
                    legend: { position: 'none' },
                    vAxis: {
                        minValue: 0,
                        gridlines: { count: -1 }
                    }
                }
            };
            data.reverse();
        }, function (error2) {
            console.log(error2);
        });
        var from2 = __WEBPACK_IMPORTED_MODULE_3_moment__().utc().startOf('day').subtract(1, 'month').toDate();
        var to2 = __WEBPACK_IMPORTED_MODULE_3_moment__().utc().endOf('day').toDate();
        this.statisticsService.getRevenueReport(from2, to2, false).subscribe(function (reports) {
            _this.dayreports = reports;
            var x = [];
            x[0] = 'x';
            var data = [];
            data.push(['Tageszeit', 'Umsatz']);
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {
                var time = __WEBPACK_IMPORTED_MODULE_3_moment__(reports[i].endDate).format("DD.MM.");
                data.push([time, _this.dayreports[i].amount]);
            }
            _this.revenuePerDayData = {
                chartType: 'AreaChart',
                dataTable: data,
                options: {
                    legend: { position: 'none' },
                    vAxis: {
                        minValue: 0,
                        gridlines: { count: -1 }
                    }
                }
            };
        }, function (error2) {
            console.log(error2);
        });
        var from3 = __WEBPACK_IMPORTED_MODULE_3_moment__([2010]).toDate();
        var to3 = __WEBPACK_IMPORTED_MODULE_3_moment__().utc().endOf('day').toDate();
        this.statisticsService.getTopComponents(from3, to3, 10).subscribe(function (reports) {
            _this.componentreports = reports;
            var x = [];
            x[0] = 'x';
            var data = [];
            data.push(['Zutat', 'Verwendung in Getränken', { role: 'style' }]);
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {
                data.push([reports[i].componentname, reports[i].amount, _this.getColorForComponent(reports[i].componentname)]);
            }
            _this.topComponentsData = {
                chartType: 'ColumnChart',
                dataTable: data,
                options: {
                    legend: { position: 'none' },
                    vAxis: {
                        minValue: 0,
                        gridlines: { count: -1 }
                    }
                }
            };
        }, function (error2) {
            console.log(error2);
        });
        var from4 = __WEBPACK_IMPORTED_MODULE_3_moment__([2010]).toDate();
        var to4 = __WEBPACK_IMPORTED_MODULE_3_moment__().utc().endOf('day').toDate();
        this.statisticsService.getTopRecipes(from4, to4, 10).subscribe(function (reports) {
            _this.allTimeTopRecipes = reports;
            var x = [];
            x[0] = 'x';
            var data = [];
            data.push(['Rezept', 'Anzahl']);
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {
                data.push([reports[i].technologydataname, reports[i].amount]);
            }
            _this.allTimeTopRecipesData = {
                chartType: 'BarChart',
                dataTable: data,
                options: {
                    legend: { position: 'none' },
                    hAxis: {
                        minValue: 0,
                        format: '#'
                    },
                    bars: 'horizontal'
                }
            };
        }, function (error2) {
            console.log(error2);
        });
        var from5 = __WEBPACK_IMPORTED_MODULE_3_moment__().utc().startOf('day').toDate();
        var to5 = __WEBPACK_IMPORTED_MODULE_3_moment__().utc().endOf('day').toDate();
        this.statisticsService.getTopRecipes(from5, to5, 10).subscribe(function (reports) {
            _this.todayTopRecipes = reports;
            var x = [];
            x[0] = 'x';
            var data = [];
            data.push(['Rezept', 'Anzahl']);
            // var regions = [{start: reports.length - 1}];
            for (var i in reports) {
                data.push([reports[i].technologydataname, reports[i].amount]);
            }
            _this.todayTopRecipesData = {
                chartType: 'BarChart',
                dataTable: data,
                options: {
                    legend: { position: 'none' },
                    hAxis: {
                        minValue: 0,
                        format: '#'
                    },
                    bars: 'horizontal'
                }
            };
        }, function (error2) {
            console.log(error2);
        });
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("../../../../../src/app/statistics/overview/overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/statistics/overview/overview.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/statistics/recipes/recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/statistics/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  recipes works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/statistics/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipesComponent = (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipes',
            template: __webpack_require__("../../../../../src/app/statistics/recipes/recipes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/statistics/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/statistics/services/statistics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_RevenueReport__ = __webpack_require__("../../../../../src/app/statistics/models/RevenueReport.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatisticsService = (function () {
    function StatisticsService(http) {
        this.http = http;
    }
    StatisticsService.prototype.getRevenueReport = function (from, to, byHour) {
        var fromStr = __WEBPACK_IMPORTED_MODULE_3_moment__(from).utc().format();
        var toStr = __WEBPACK_IMPORTED_MODULE_3_moment__(to).utc().format();
        var detail = 'day';
        if (byHour) {
            detail = 'hour';
        }
        var url = '/api/reports/revenue?from=' + fromStr + '&to=' + toStr + '&detail=' + detail;
        return this.http.get(url).map(function (data) {
            var reports = new Array(data.length);
            for (var i in data) {
                var r = new __WEBPACK_IMPORTED_MODULE_2__models_RevenueReport__["a" /* RevenueReport */]();
                r.amount = Number.parseInt(data[i].amount);
                r.revenue = Number.parseFloat(data[i].revenue);
                r.startDate = __WEBPACK_IMPORTED_MODULE_3_moment__(data[i].date).add(Number.parseInt(data[i].hour), 'hour').toDate();
                r.endDate = __WEBPACK_IMPORTED_MODULE_3_moment__(r.startDate).add(1, 'hour').toDate();
                reports[i] = r;
            }
            return reports;
        });
    };
    StatisticsService.prototype.getTopComponents = function (from, to, limit) {
        var fromStr = __WEBPACK_IMPORTED_MODULE_3_moment__(from).utc().format();
        var toStr = __WEBPACK_IMPORTED_MODULE_3_moment__(to).utc().format();
        var url = '/api/reports/components/top?from=' + fromStr + '&to=' + toStr + '&limit=' + limit;
        return this.http.get(url).map(function (data) {
            var reports = data;
            return reports;
        });
    };
    StatisticsService.prototype.getTopRecipes = function (from, to, limit) {
        var fromStr = __WEBPACK_IMPORTED_MODULE_3_moment__(from).utc().format();
        var toStr = __WEBPACK_IMPORTED_MODULE_3_moment__(to).utc().format();
        var url = '/api/reports/recipes/top?from=' + fromStr + '&to=' + toStr + '&limit=' + limit;
        return this.http.get(url).map(function (data) {
            var reports = data;
            return reports;
        });
    };
    StatisticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StatisticsService);
    return StatisticsService;
}());



/***/ }),

/***/ "../../../../../src/app/statistics/statistics-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_overview_component__ = __webpack_require__("../../../../../src/app/statistics/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/statistics/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__creators_creators_component__ = __webpack_require__("../../../../../src/app/statistics/creators/creators.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_2__overview_overview_component__["a" /* OverviewComponent */] },
    { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_3__recipes_recipes_component__["a" /* RecipesComponent */] },
    { path: 'creators', component: __WEBPACK_IMPORTED_MODULE_4__creators_creators_component__["a" /* CreatorsComponent */] }
];
var StatisticsRoutingModule = (function () {
    function StatisticsRoutingModule() {
    }
    StatisticsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], StatisticsRoutingModule);
    return StatisticsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/statistics/statistics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_overview_component__ = __webpack_require__("../../../../../src/app/statistics/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistics_routing_module__ = __webpack_require__("../../../../../src/app/statistics/statistics-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/statistics/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__creators_creators_component__ = __webpack_require__("../../../../../src/app/statistics/creators/creators.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var StatisticsModule = (function () {
    function StatisticsModule() {
    }
    StatisticsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__statistics_routing_module__["a" /* StatisticsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_google_charts__["a" /* Ng2GoogleChartsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_4__recipes_recipes_component__["a" /* RecipesComponent */], __WEBPACK_IMPORTED_MODULE_5__creators_creators_component__["a" /* CreatorsComponent */]]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ }),

/***/ "../../../../ng2-google-charts/google-chart/chart-html-tooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartHTMLTooltip; });
var ChartHTMLTooltip = (function () {
    function ChartHTMLTooltip(el) {
        this.tooltipDOMElement = el;
    }
    ChartHTMLTooltip.prototype.setPosition = function (x, y) {
        this.tooltipDOMElement.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.tooltipDOMElement.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    };
    ChartHTMLTooltip.prototype.getDOMElement = function () {
        return this.tooltipDOMElement;
    };
    ChartHTMLTooltip.PIXELS = 'px';
    return ChartHTMLTooltip;
}());



/***/ }),

/***/ "../../../../ng2-google-charts/google-chart/chart-mouse-event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChartMouseEvent */
/* unused harmony export MouseOverEvent */
/* unused harmony export ChartMouseOverEvent */
/* unused harmony export ChartMouseOutEvent */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ChartMouseEvent = (function () {
    function ChartMouseEvent() {
    }
    return ChartMouseEvent;
}());

/**
 * @deprecated Use ChartMouseOverEvent instead
 */
var MouseOverEvent = (function (_super) {
    __extends(MouseOverEvent, _super);
    function MouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouseOverEvent;
}(ChartMouseEvent));

var ChartMouseOverEvent = (function (_super) {
    __extends(ChartMouseOverEvent, _super);
    function ChartMouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOverEvent;
}(ChartMouseEvent));

var ChartMouseOutEvent = (function (_super) {
    __extends(ChartMouseOutEvent, _super);
    function ChartMouseOutEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOutEvent;
}(ChartMouseEvent));



/***/ }),

/***/ "../../../../ng2-google-charts/google-chart/google-chart.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_charts_loader_service__ = __webpack_require__("../../../../ng2-google-charts/google-charts-loader.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_html_tooltip__ = __webpack_require__("../../../../ng2-google-charts/google-chart/chart-html-tooltip.js");



var GoogleChartComponent = (function () {
    function GoogleChartComponent(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.chartSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.chartReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.chartError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    GoogleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var key = 'data';
        if (changes[key]) {
            if (!this.data) {
                return;
            }
            this.options = this.data.options;
            this.loaderService.load(this.data.chartType).then(function () {
                if (_this.wrapper === undefined || _this.wrapper.getChartType() !== _this.data.chartType) {
                    _this.wrapper = new google.visualization.ChartWrapper(_this.data);
                }
                else {
                    _this.unregisterChartEvents();
                    _this.wrapper.setDataTable(_this.data.dataTable);
                    _this.wrapper.setOptions(_this.options);
                }
                _this.registerChartWrapperEvents();
                if (_this.data.formatters !== undefined) {
                    for (var _i = 0, _a = _this.data.formatters; _i < _a.length; _i++) {
                        var formatterConfig = _a[_i];
                        var formatterConstructor = google.visualization[formatterConfig.type];
                        var formatterOptions = formatterConfig.options;
                        var formatter = new formatterConstructor(formatterOptions);
                        for (var _b = 0, _c = formatterConfig.columns; _b < _c.length; _b++) {
                            var col = _c[_b];
                            formatter.format(_this.wrapper.getDataTable(), col);
                        }
                    }
                }
                _this.redraw();
            });
        }
    };
    GoogleChartComponent.prototype.redraw = function () {
        this.wrapper.draw(this.el.nativeElement.querySelector('div'));
    };
    GoogleChartComponent.prototype.getSelectorBySeriesType = function (seriesType) {
        var selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        var selector = selectors[seriesType];
        return selector;
    };
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    GoogleChartComponent.prototype.getSeriesByColumn = function (column) {
        var series = 0;
        var dataTable = this.wrapper.getDataTable();
        for (var i = column - 1; i >= 0; i--) {
            var role = dataTable.getColumnRole(i);
            var type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    };
    GoogleChartComponent.prototype.getBoundingBoxForItem = function (item) {
        var boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            var column = item.column;
            var series = this.getSeriesByColumn(column);
            var bar = item.row;
            var row = item.row;
            var seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    var box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    };
    GoogleChartComponent.prototype.getValueAtPosition = function (position) {
        if (position.row === null) {
            return null;
        }
        var dataTable = this.wrapper.getDataTable();
        var value = dataTable.getValue(position.row, position.column);
        return value;
    };
    GoogleChartComponent.prototype.getColumnTypeAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnType(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getColumnLabelAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnLabel(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getHTMLTooltip = function () {
        var tooltipER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new __WEBPACK_IMPORTED_MODULE_2__chart_html_tooltip__["a" /* ChartHTMLTooltip */](tooltipER);
    };
    GoogleChartComponent.prototype.parseMouseEvent = function (item) {
        var event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(item),
            value: this.getValueAtPosition(item),
            columnType: this.getColumnTypeAtPosition(item),
            columnLabel: this.getColumnLabelAtPosition(item)
        };
        return event;
    };
    GoogleChartComponent.prototype.unregisterChartEvents = function () {
        google.visualization.events.removeAllListeners(this.wrapper);
    };
    GoogleChartComponent.prototype.registerChartEvents = function () {
        var _this = this;
        if (this.mouseOver.observers.length > 0) {
            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface();
            google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOver.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface();
            google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOut.emit(event);
            });
        }
    };
    GoogleChartComponent.prototype.registerChartWrapperEvents = function () {
        var _this = this;
        google.visualization.events.addListener(this.wrapper, 'ready', function () {
            _this.chartReady.emit({ message: 'Chart ready' });
            _this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', function (error) {
            _this.chartError.emit(error);
        });
        google.visualization.events.addListener(this.wrapper, 'select', function () {
            var event;
            var selection = _this.wrapper.visualization.getSelection()[0];
            if (selection !== undefined) {
                var selectedRowValues = [];
                var selectedRowFormattedValues = [];
                if (selection.row !== null) {
                    var dataTable = _this.wrapper.getDataTable();
                    var numberOfColumns = dataTable.getNumberOfColumns();
                    for (var i = 0; i < numberOfColumns; i++) {
                        selectedRowValues.push(dataTable.getValue(selection.row, i));
                        selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                    }
                }
                event = (_a = {
                        message: 'select',
                        row: selection.row,
                        column: selection.column
                    },
                    _a['selectedRowValues'] = selectedRowValues,
                    _a['selectedRowFormattedValues'] = selectedRowFormattedValues,
                    _a);
            }
            else {
                event = {
                    message: 'deselect',
                    row: null,
                    column: null,
                    selectedRowValues: [],
                    selectedRowFormattedValues: []
                };
            }
            _this.chartSelect.emit(event);
            var _a;
        });
    };
    GoogleChartComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'google-chart',
                    template: '<div></div>',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    GoogleChartComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__google_charts_loader_service__["a" /* GoogleChartsLoaderService */], },
    ]; };
    GoogleChartComponent.propDecorators = {
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'chartReady': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'chartError': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'chartSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'mouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'mouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return GoogleChartComponent;
}());



/***/ }),

/***/ "../../../../ng2-google-charts/google-charts-loader.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChartsLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var GoogleChartsLoaderService = (function () {
    function GoogleChartsLoaderService(localeId) {
        this.chartPackage = {
            AnnotationChart: 'annotationchart',
            AreaChart: 'corechart',
            Bar: 'bar',
            BarChart: 'corechart',
            BubbleChart: 'corechart',
            Calendar: 'calendar',
            CandlestickChart: 'corechart',
            ColumnChart: 'corechart',
            ComboChart: 'corechart',
            PieChart: 'corechart',
            Gantt: 'gantt',
            Gauge: 'gauge',
            GeoChart: 'geochart',
            Histogram: 'corechart',
            Line: 'line',
            LineChart: 'corechart',
            Map: 'map',
            OrgChart: 'orgchart',
            Sankey: 'sankey',
            Scatter: 'scatter',
            ScatterChart: 'corechart',
            SteppedAreaChart: 'corechart',
            Table: 'table',
            Timeline: 'timeline',
            TreeMap: 'treemap',
            WordTree: 'wordtree'
        };
        this.googleScriptLoadingNotifier = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
    }
    GoogleChartsLoaderService.prototype.load = function (chartType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            _this.loadGoogleChartsScript().then(function () {
                google.charts.load('45.2', {
                    packages: [_this.chartPackage[chartType]],
                    language: _this.localeId,
                    callback: resolve
                });
            });
        });
    };
    GoogleChartsLoaderService.prototype.loadGoogleChartsScript = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!_this.googleScriptIsLoading) {
                _this.googleScriptIsLoading = true;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    GoogleChartsLoaderService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    GoogleChartsLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */],] },] },
    ]; };
    return GoogleChartsLoaderService;
}());



/***/ }),

/***/ "../../../../ng2-google-charts/google-charts.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2GoogleChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_chart_google_chart_component__ = __webpack_require__("../../../../ng2-google-charts/google-chart/google-chart.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_charts_loader_service__ = __webpack_require__("../../../../ng2-google-charts/google-charts-loader.service.js");



var Ng2GoogleChartsModule = (function () {
    function Ng2GoogleChartsModule() {
    }
    Ng2GoogleChartsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_1__google_chart_google_chart_component__["a" /* GoogleChartComponent */]
                    ],
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_2__google_charts_loader_service__["a" /* GoogleChartsLoaderService */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_1__google_chart_google_chart_component__["a" /* GoogleChartComponent */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2GoogleChartsModule.ctorParameters = function () { return []; };
    return Ng2GoogleChartsModule;
}());



/***/ }),

/***/ "../../../../ng2-google-charts/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__google_chart_google_chart_component__ = __webpack_require__("../../../../ng2-google-charts/google-chart/google-chart.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_chart_chart_html_tooltip__ = __webpack_require__("../../../../ng2-google-charts/google-chart/chart-html-tooltip.js");
/* unused harmony reexport ChartHTMLTooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_chart_chart_mouse_event__ = __webpack_require__("../../../../ng2-google-charts/google-chart/chart-mouse-event.js");
/* unused harmony reexport ChartMouseOverEvent */
/* unused harmony reexport ChartMouseOutEvent */
/* unused harmony reexport MouseOverEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__google_charts_module__ = __webpack_require__("../../../../ng2-google-charts/google-charts.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__google_charts_module__["a"]; });






/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_map PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.map = __WEBPACK_IMPORTED_MODULE_1__operator_map__["a" /* map */];
//# sourceMappingURL=map.js.map 


/***/ })

});
//# sourceMappingURL=statistics.module.chunk.js.map