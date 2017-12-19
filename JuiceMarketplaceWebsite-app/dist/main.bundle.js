webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./console/console.module": [
		"../../../../../src/app/console/console.module.ts"
	],
	"./landingpage/landingpage.module": [
		"../../../../../src/app/landingpage/landingpage.module.ts",
		"landingpage.module"
	],
	"./news/news.module": [
		"../../../../../src/app/news/news.module.ts",
		"news.module"
	],
	"./statistics/statistics.module": [
		"../../../../../src/app/statistics/statistics.module.ts",
		"statistics.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.userImg {\n    width: 30px;\n    height: 30px;\n    border: 1px solid grey;\n    border-radius: 50%;\n    float: left;\n    margin-right: 1em;\n    -o-object-fit: cover;\n       object-fit: cover;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loggedin && user != null\" fxLayout=\"row\">\n    <button mat-button class=\"lightupper\" [matMenuTriggerFor]=\"menu\">\n        {{getUserDisplayName()}}\n    </button>\n    <!-- <img class=\"userImg\" src=\"./assets/images/1.jpg\"/> -->\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"logout()\">\n            <span>Logout</span>\n        </button>\n    </mat-menu>\n</div>\n\n<div *ngIf=\"!loggedin\">\n    <button mat-button class=\"lightupper\" (click)=\"login()\">\n        Anmelden / Registrieren\n    </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__console_services_user_service__ = __webpack_require__("../../../../../src/app/console/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ResponsiveCalc} from '../helper/responsive-calc';
var AccountComponent = (function () {
    // respCalc = ResponsiveCalc.Instance;
    function AccountComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.user = null;
        this.loggedin = false;
        this.userService.isLoggedIn().subscribe(function (loggedIn) {
            console.log("UserService loggedin:" + loggedIn);
            _this.loggedin = loggedIn;
            if (_this.loggedin) {
                userService.getUser().subscribe(function (user) {
                    console.log("User is:" + user);
                    _this.user = user;
                });
            }
        });
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.getUserDisplayName = function () {
        var displayName = '';
        if (this.user != null) {
            displayName = 'Anonymous';
            if (this.user.firstname && this.user.lastname) {
                displayName = this.user.firstname + " " + this.user.lastname;
            }
            else if (this.user.username) {
                displayName = this.user.username;
            }
            else if (this.user.firstname) {
                displayName = this.user.firstname;
            }
            else if (this.user.lastname) {
                displayName = this.user.lastname;
            }
        }
        return displayName;
    };
    AccountComponent.prototype.logout = function () {
        window.location.href = "/auth/logout";
    };
    AccountComponent.prototype.login = function () {
        document.cookie = "redirectTo=" + this.router.url.toString();
        window.location.href = "/auth/iuno";
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__console_services_user_service__["b" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__console_services_user_service__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_console_console_menu_component__ = __webpack_require__("../../../../../src/app/sidebar/console/console-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_index_index_component__ = __webpack_require__("../../../../../src/app/sidebar/index/index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
    { path: 'landingpage', loadChildren: './landingpage/landingpage.module#LandingpageModule' },
    { path: 'console', loadChildren: './console/console.module#ConsoleModule' },
    { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule' },
    { path: 'news', loadChildren: './news/news.module#NewsModule' },
    { path: 'index', outlet: 'sidebar', component: __WEBPACK_IMPORTED_MODULE_3__sidebar_index_index_component__["a" /* IndexComponent */] },
    { path: 'console-menu', outlet: 'sidebar', component: __WEBPACK_IMPORTED_MODULE_2__sidebar_console_console_menu_component__["a" /* ConsoleMenuComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app {\n    height: 100vh;\n}\n\n.component-viewer {\n    min-height: 100%;\n    background-color: #f5f5f5;\n}\n\n:host ::ng-deep .centered-component {\n    /* max-width: 940px; */\n    width: 100%;\n    padding: 5px 10px 5px;\n    /* background-color: #eee; */\n}\n\n/*@media all and (min-width: 1000px) {*/\n    /*:host ::ng-deep .centered-component {*/\n        /*!* max-width: 940px; *!*/\n        /*width: 1000px;*/\n        /*padding: 20px 70px 50px;*/\n    /*}*/\n/*}*/\n\n.mat-sidenav {\n    width: 250px;\n}\n\nmat-sidenav {\n    width: 40vw;\n}\n\nmat-card {\n    margin: 12px;\n}\n\n.logo {\n    height: 70%;\n    padding: 10px\n}\n\n.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\nmat-sidenav-container {\n    background-color: white;\n}\n\n.nav-bar {\n    color: white;\n}\n\n.nav-buttons {\n    padding-left: 20px;\n}\n\n@media only screen and (max-width: 1100px) {\n    .nav-buttons {\n        visibility: hidden;\n        width: 0px;\n    }\n}\n\n:host ::ng-deep .card-information {\n    /* font-weight: lighter; */\n    font-size: 34pt;\n    color: #AAC253;\n}\n\n/* :host ::ng-deep a {\n color: #337ab7;\n text-decoration: none;\n} */\n\n:host ::ng-deep .mat-card-header-text {\n    margin: 0px;\n}\n\n:host ::ng-deep .mat-card-header {\n    /* margin-top: 124px;\n    margin-left: -24px;\n    margin-right: -24px;\n    padding: 15px; */\n    /* background-color: #aac253; */\n}\n\n:host ::ng-deep .mat-header-cell {\n    padding: 0px 10px;\n}\n\n:host ::ng-deep .mat-cell {\n    padding: 0px 10px;\n}\n\n:host ::ng-deep .mat-card-title {\n    margin: 0px;\n    font-size: 12pt;\n    font-weight: bolder;\n}\n\n:host ::ng-deep .mat-card-content {\n    padding: 15px;\n}\n\n:host ::ng-deep .mat-card-actions {\n    padding: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" fxLayout=\"column\" style=\"background-color: #0d47a1\">\n    <mat-toolbar color=\"primary\" class=\"mat-elevation-z5 nav-bar\" style=\"z-index: 2\">\n\n        <button *ngIf=\"menuButtonVisible\" mat-button (click)=\"sidenav.toggle()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n        <img *ngIf=\"tdmLogoVisible\" class=\"logo\" src=\"./assets/images/tdm_logo.svg\">\n        <div *ngIf=\"navigationButtonsVisible\" class=\"nav-buttons\">\n            <a #start mat-button class=\"lightupper \" (click)=\"startClicked()\">Start</a>\n            <a #tdm mat-button class=\"lightupper \" (click)=\"tdmClicked()\">Marktplatz</a>\n            <a #stats mat-button class=\"lightupper \" (click)=\"statisticsClicked()\">Statistiken</a>\n            <a #news mat-button class=\"lightupper \" (click)=\"newsClicked()\">Neuigkeiten</a>\n        </div>\n        <span class=\"spacer\"></span>\n        <app-account></app-account>\n    </mat-toolbar>\n    <mat-sidenav-container fxFlex>\n        <mat-sidenav #sidenav mode=\"side\" align=\"start\" class=\"mat-elevation-z6\" opened=\"{{menuVisible}}\">\n            <router-outlet name=\"sidebar\"></router-outlet>\n        </mat-sidenav>\n        <div class=\"component-viewer\" fxLayout=\"column\">\n            <div fxFlex=\"grow\">\n                <router-outlet></router-outlet>\n            </div>\n            <app-footer fxFlex=\"none\"></app-footer>\n        </div>\n    </mat-sidenav-container>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__console_services_user_service__ = __webpack_require__("../../../../../src/app/console/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, activatedRoute, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.title = 'app';
        this.menuVisible = false;
        this.menuButtonVisible = false;
        this.navigationButtonsVisible = true;
        this.tdmLogoVisible = true;
        this.accountInfoShortened = false;
        this.path = '';
    }
    AppComponent.prototype.windowResized = function (event) {
        this.updateResponsiveElements();
    };
    // printpath(parent: String, config: Route[]) {
    //   for (let i = 0; i < config.length; i++) {
    //     let r = config[i];
    //     console.log(parent + '/' + r.path);
    //     if (r.children && r.path) {
    //       this.printpath(parent + '/' + r.path, r.children);
    //     }
    //   }
    // }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        this.routerSubscription = this.router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                self.path = s.urlAfterRedirects;
                self.calculateMenu(self.path);
            }
        });
        this.updateResponsiveElements();
        // this.printpath('', this.router.config);
        // console.log('configured routes: ', this.router.config);
    };
    AppComponent.prototype.updateResponsiveElements = function () {
        this.navigationButtonsVisible = window.innerWidth > 1100;
        this.accountInfoShortened = window.innerWidth < 580;
        this.tdmLogoVisible = window.innerWidth > 290;
        this.calculateMenu(this.path);
    };
    // this.router.navigate([{outlets: {'sidebar': ['statistics']}}]);
    AppComponent.prototype.calculateMenu = function (path) {
        if (this.navigationButtonsVisible) {
            this.sidenav.mode = 'side';
            if (path.startsWith('/console')) {
                this.menuVisible = true;
                this.menuButtonVisible = true;
                // console.log(self.tdmButton);
                this.router.navigate([{ outlets: { 'sidebar': ['console-menu'] } }]);
            }
            else if (path.startsWith('/statistics')) {
                // this.menuVisible = true;
                // this.menuButtonVisible = true;
                // this.router.navigate([{outlets: {'sidebar': ['statistics']}}]);
                this.menuVisible = false;
                this.menuButtonVisible = false;
                this.sidenav.close();
            }
            else if (path.startsWith('/landingpage')) {
                this.menuVisible = false;
                this.menuButtonVisible = false;
                this.sidenav.close();
            }
            else if (path.startsWith('/news')) {
                this.menuVisible = false;
                this.menuButtonVisible = false;
                this.sidenav.close();
            }
        }
        else {
            this.router.navigate([{ outlets: { 'sidebar': ['index'] } }]);
            this.sidenav.mode = 'over';
            this.menuButtonVisible = true;
            this.menuVisible = false;
            this.sidenav.close();
        }
    };
    AppComponent.prototype.startClicked = function () {
        this.router.navigateByUrl('/landingpage');
    };
    AppComponent.prototype.tdmClicked = function () {
        var _this = this;
        this.userService.isLoggedIn().subscribe(function (loggedin) {
            if (loggedin) {
                _this.router.navigateByUrl('/console');
            }
            else {
                document.cookie = "redirectTo=/console";
                window.location.href = "/auth/iuno";
            }
        });
    };
    AppComponent.prototype.statisticsClicked = function () {
        this.router.navigateByUrl('/statistics');
    };
    AppComponent.prototype.newsClicked = function () {
        this.router.navigateByUrl('/news');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSidenav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSidenav */])
    ], AppComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UIEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "windowResized", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__console_services_user_service__["b" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__console_services_user_service__["b" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__console_console_module__ = __webpack_require__("../../../../../src/app/console/console.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Modules




// Angular Material





// Custom imports






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__account_account_component__["a" /* AccountComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__console_console_module__["ConsoleModule"],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/console/console-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__console_component__ = __webpack_require__("../../../../../src/app/console/console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/console/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_recipe_create_recipe_component__ = __webpack_require__("../../../../../src/app/console/create-recipe/create-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/console/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/console/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__console_component__["a" /* ConsoleComponent */], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* AccessGuard */]] },
            { path: 'create-recipe', component: __WEBPACK_IMPORTED_MODULE_4__create_recipe_create_recipe_component__["a" /* CreateRecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* AccessGuard */]] },
            { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_5__recipes_recipes_component__["a" /* RecipesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* AccessGuard */]] },
        ]
    },
];
var ConsoleRoutingModule = (function () {
    function ConsoleRoutingModule() {
    }
    ConsoleRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* AccessGuard */],
            ]
        })
    ], ConsoleRoutingModule);
    return ConsoleRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/console/console.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-button {\n    text-align: left;\n    height: 50px;\n}\n\n.app {\n    min-height: 100vh;\n}\n\n.mat-sidenav {\n    width: 250px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/console/console.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"centered-component\" fxFlex=\"grow\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/console/console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/console/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsoleComponent = (function () {
    function ConsoleComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.title = 'console';
        this.user = null;
        this.spinnerCounter = 0;
        if (userService.isLoggedIn()) {
            console.log("LoggedIn!");
        }
        else {
            console.log("Not LoggedIn!");
        }
    }
    ConsoleComponent.prototype.ngOnInit = function () {
        this.spinnerCounter += 1;
        // this.userService.user.subscribe(user => {
        //   if (user != null) {
        //     this.user = user;
        //     this.spinnerCounter -= 1;
        //   }
        // });
    };
    ConsoleComponent.prototype.openDashboard = function () {
        this.router.navigate(['dashboard']);
    };
    ConsoleComponent.prototype.openCreateRecipe = function () {
        this.router.navigate(['create-recipe']);
    };
    ConsoleComponent.prototype.openRecipes = function () {
        this.router.navigate(['recipes']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSidenav */])
    ], ConsoleComponent.prototype, "sidenav", void 0);
    ConsoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'console-root',
            template: __webpack_require__("../../../../../src/app/console/console.component.html"),
            styles: [__webpack_require__("../../../../../src/app/console/console.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["b" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["b" /* UserService */]])
    ], ConsoleComponent);
    return ConsoleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/console/console.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleModule", function() { return ConsoleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__console_routing_module__ = __webpack_require__("../../../../../src/app/console/console-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__console_component__ = __webpack_require__("../../../../../src/app/console/console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_recipe_create_recipe_component__ = __webpack_require__("../../../../../src/app/console/create-recipe/create-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/console/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/console/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__juice_program_configurator_juice_program_configurator_module__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/juice-program-configurator.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utilities_utilities_module__ = __webpack_require__("../../../../../src/app/utilities/utilities.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/console/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular





 // still needed @see https://github.com/angular/angular/issues/19788
// Angular Material












// Flex-Layout

// Routing

// Components







var ConsoleModule = (function () {
    function ConsoleModule() {
    }
    ConsoleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__console_routing_module__["a" /* ConsoleRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__juice_program_configurator_juice_program_configurator_module__["a" /* JuiceProgramConfiguratorModule */],
                __WEBPACK_IMPORTED_MODULE_14__utilities_utilities_module__["a" /* UtilitiesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__console_component__["a" /* ConsoleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__create_recipe_create_recipe_component__["a" /* CreateRecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__recipes_recipes_component__["a" /* RecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* AccessGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__console_component__["a" /* ConsoleComponent */]],
        })
    ], ConsoleModule);
    return ConsoleModule;
}());



/***/ }),

/***/ "../../../../../src/app/console/create-recipe/create-recipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/console/create-recipe/create-recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spinner [counter]=\"spinnerCounter\"></app-spinner>\n<h1 class=\"headline\">Neues Getränk anlegen</h1>\n\n<div fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <mat-card class=\"iuno-card\">\n        <!-- <mat-card fxFill class=\"iuno-card mat-elevation-z2\"> -->\n        <mat-card-header>\n            <mat-card-title>\n                <span class=\"card-title\">Produktdetails</span>\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutGap=\"10px\">\n            <!-- recipe title -->\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <div fxFlex=\"20\">\n                    <p class=\"label\">Titel</p>\n                </div>\n                <div fxFlex=\"80\">\n                    <mat-form-field fxFlexFill>\n                        <input matInput [(ngModel)]=\"recipeName\" placeholder=\"\">\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <!-- recipe description -->\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <div fxFlex=\"20\">\n                    <p class=\"label\">Beschreibung</p>\n                </div>\n                <div fxFlex=\"80\">\n                    <mat-form-field fxFlexFill>\n                        <textarea matInput [(ngModel)]=\"recipeDescription\" placeholder=\"\"\n                                  style=\"width: 100%; height: 100px;\"></textarea>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <!-- recipe license fee -->\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <div fxFlex=\"20\">\n                    <p class=\"label\">Lizenzgebühr</p>\n                </div>\n                <div fxFlex=\"80\">\n                    <mat-form-field>\n                        <mat-select placeholder=\"\" [(ngModel)]=\"recipeLicenseFee\" name=\"licenseFee\">\n                            <mat-option *ngFor=\"let fee of licenseFees\" [value]=\"fee\">\n                                {{fee}} IUNO\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n        </mat-card-content>\n        <!-- </mat-card>\n        <mat-card class=\"iuno-card\"> -->\n        <mat-card-header>\n            <mat-card-title>\n                <span class=\"card-title\">Rezeptur</span>\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <!-- recipe program -->\n            <div fxFlex=\"100\">\n                <juice-program-configurator [program]=program [components]=components></juice-program-configurator>\n            </div>\n        </mat-card-content>\n        <mat-card-actions>\n            <div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n                <button (click)=\"actionSaveRecipe()\" mat-raised-button color=\"primary\" class=\"mat-elevation-z1\">\n                    Speichern\n                </button>\n            </div>\n        </mat-card-actions>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/console/create-recipe/create-recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_marketplace_service__ = __webpack_require__("../../../../../src/app/console/services/marketplace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__juice_program_configurator_models_tdmprogram__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/models/tdmprogram.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__juice_program_configurator_models_tdmrecipe__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/models/tdmrecipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_recipe_service__ = __webpack_require__("../../../../../src/app/console/services/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/console/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateRecipeComponent = (function () {
    function CreateRecipeComponent(marketplaceService, recipeService, http, router, activatedRoute, accessGuard) {
        this.marketplaceService = marketplaceService;
        this.recipeService = recipeService;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.accessGuard = accessGuard;
        this.licenseFees = [0.25, 0.5, 0.75, 1.00];
        this.spinnerCounter = 0;
        this.maxRecipeCount = 3;
        this.recipeName = "";
        this.recipeDescription = "";
        this.recipeLicenseFee = -1;
        this.program = new __WEBPACK_IMPORTED_MODULE_4__juice_program_configurator_models_tdmprogram__["b" /* TdmProgram */]();
    }
    CreateRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerCounter += 1;
        this.recipeService.recipes.subscribe(function (recipes) {
            _this.spinnerCounter -= 1;
            if (recipes.length >= _this.maxRecipeCount) {
                _this.router.navigate(['../recipes', { errorMaxRecipes: true }], { relativeTo: _this.activatedRoute });
            }
        });
        this.recipeService.updateRecipes();
        // this.spinnerCounter += 1;
        this.marketplaceService.components.subscribe(function (components) {
            _this.components = components;
        });
        // this.marketplaceService.getComponents().then(components => {
        //   this.components = components;
        //   this.spinnerCounter -= 1;
        // });
    };
    CreateRecipeComponent.prototype.actionSaveRecipe = function () {
        var _this = this;
        this.accessGuard.guardLoggedIn().subscribe(function (loggedIn) {
            if (loggedIn) {
                var valid = true;
                var recipe = new __WEBPACK_IMPORTED_MODULE_5__juice_program_configurator_models_tdmrecipe__["a" /* TdmRecipe */]();
                var minPhaseAmount = 10;
                var minTotalAmount = 100;
                var maxTotalAmount = 120;
                var maxTotalPause = 5000;
                recipe.technologydataname = _this.recipeName;
                recipe.licensefee = _this.recipeLicenseFee;
                recipe.technologydatadescription = _this.recipeDescription.trim();
                if (valid && _this.program.getTotalAmount() < minTotalAmount) {
                    alert("Die Mindestmenge von " + minTotalAmount + " ml wurde unterschritten.");
                    valid = false;
                }
                if (valid && _this.program.getTotalAmount() > maxTotalAmount) {
                    alert("Die Höchstmenge von " + maxTotalAmount + " ml wurde überschritten.");
                    valid = false;
                }
                if (valid && _this.program.pauseSequence.getTotalAmount() / _this.program.amountPerMillisecond > maxTotalPause) {
                    alert("Die zulässige Gesamtdauer der Pausen von " + maxTotalPause + " ms wurde überschritten.");
                    valid = false;
                }
                if (valid && recipe.technologydataname.trim().length < 1) {
                    alert("Bitte geben Sie einen Titel mit mindestens einem Zeichen ein.");
                    valid = false;
                }
                if (valid && recipe.technologydatadescription.length < 1) {
                    alert("Bitte geben Sie eine Beschreibung mit mindestens einem Zeichen ein.");
                    valid = false;
                }
                if (valid && recipe.licensefee == -1) {
                    alert("Bitte wählen Sie eine Lizenzgebühr aus.");
                    valid = false;
                }
                if (valid && _this.program.sequences.length == 0) {
                    alert("Bitte fügen Sie mindestens eine Zutat hinzu.");
                    valid = false;
                }
                if (valid) {
                    _this.spinnerCounter += 1;
                    // create json
                    var jsonProgram = {}; // program
                    jsonProgram['amount-per-millisecond'] = _this.program.amountPerMillisecond;
                    var jsonSequences = []; // sequences
                    _this.program.sequences.forEach(function (sequence) {
                        var jsonSequence = {}; // sequence
                        jsonSequence['ingredient-id'] = sequence.component.id;
                        var jsonPhases = []; // phases
                        sequence.phases.forEach(function (phase) {
                            var jsonPhase = {};
                            jsonPhase['start'] = phase.start;
                            jsonPhase['amount'] = phase.amount;
                            jsonPhase['throughput'] = phase.throughput;
                            jsonPhases.push(jsonPhase);
                        });
                        jsonSequence['phases'] = jsonPhases;
                        jsonSequences.push(jsonSequence);
                    });
                    jsonProgram['sequences'] = jsonSequences;
                    var jsonRecipe = {};
                    jsonRecipe['title'] = recipe.technologydataname;
                    jsonRecipe['description'] = recipe.technologydatadescription;
                    jsonRecipe['license-fee'] = recipe.licensefee;
                    jsonRecipe['program'] = jsonProgram;
                    _this.http.post('/api/users/me/recipes', jsonRecipe).subscribe(function (data) {
                        _this.spinnerCounter -= 1;
                    }, function (error) {
                        _this.spinnerCounter -= 1;
                        if (error.status == 201) {
                            _this.router.navigateByUrl('./recipes');
                        }
                        else {
                            alert("Es ist ein Fehler aufgetreten.\nDas Rezept konnte nicht gespeichert werden.");
                            _this.spinnerCounter -= 1;
                        }
                    });
                }
            }
        });
    };
    CreateRecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-recipe',
            template: __webpack_require__("../../../../../src/app/console/create-recipe/create-recipe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/console/create-recipe/create-recipe.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_marketplace_service__["a" /* MarketplaceService */], __WEBPACK_IMPORTED_MODULE_6__services_recipe_service__["a" /* RecipeService */]],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_marketplace_service__["a" /* MarketplaceService */],
            __WEBPACK_IMPORTED_MODULE_6__services_recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* AccessGuard */]])
    ], CreateRecipeComponent);
    return CreateRecipeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/console/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".axis {\n    font: 10px sans-serif;\n}\n\n.axis path,\n.axis line {\n    fill: none;\n    stroke: #000;\n    shape-rendering: crispEdges;\n}\n\n.axis-title {\n    fill: none;\n    stroke: black;\n    stroke-width: 0.5px;\n}\n\n.axis--x path {\n}\n\n.line {\n    fill: none;\n    stroke: steelblue;\n    stroke-width: 1.5px;\n}\n\n.c3-chart-lines .c3-target-Benchmark {\n    stroke-width: 1px;\n    stroke-dasharray: 3, 3;\n}\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/console/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"headline\">Dashboard</h1>\n\n<div fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <div fxLayout.gt-md=\"row\"  fxLayoutGap=\"10px\" fxLayout=\"column\">\n        <mat-card fxFlex.gt-md=\"60\" class=\"iuno-card \">\n            <mat-card-header>\n                <mat-card-title>\n                    <span class=\"card-title\">Umsatz pro Getränk</span>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <div id='chart-revenue' style=\"padding: 10px;\"></div>\n            </mat-card-content>\n        </mat-card>\n        <mat-card fxFlex.gt-md=\"39\" class=\"iuno-card\">\n            <mat-card-header>\n                <mat-card-title>\n                    <span class=\"card-title\">Top 5 Getränke aller Hersteller</span>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <div id='chart-top-recipes' style=\"padding: 10px;\"></div>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div fxLayout.gt-md=\"row\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n        <mat-card fxFlex.gt-md=\"50\" class=\"iuno-card\">\n            <mat-card-header>\n                <mat-card-title>\n                    <span class=\"card-title\">Umsatz heute (IUNOs)</span>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content fxLayoutAlign=\"center center\" style=\"height: 100%;\">\n            <span class=\"card-information\" *ngIf=\"revenueToday == null\">\n              -\n            </span>\n                <span class=\"card-information\" *ngIf=\"revenueToday != null\">\n              {{revenueToday | number:'1.2'}}\n            </span>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card fxFlex.gt-md=\"50\" class=\"iuno-card\">\n            <mat-card-header>\n                <mat-card-title>\n                    <span class=\"card-title\">Meistverkauftes Getränk</span>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content fxLayoutAlign=\"center center\" style=\"height: 100%;\">\n              <span class=\"card-information\" *ngIf=\"topRecipeName == null\">\n                  -\n                </span>\n                <span class=\"card-information\" *ngIf=\"topRecipeName != null\">\n                    {{topRecipeName}}\n                  </span>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>\n<!--<div fxLayout=\"column\"  fxLayoutGap=\"10px\">-->\n<!--&lt;!&ndash; Chart revenue history &ndash;&gt;-->\n<!--&lt;!&ndash;<div fxLayout=\"row\" fxLayout.gt-xs=\"row\" fxLayoutGap=\"10px\">&ndash;&gt;-->\n<!--&lt;!&ndash;<mat-card fxFlex=\"100\" class=\"iuno-card mat-no-style\">&ndash;&gt;-->\n<!--&lt;!&ndash;<mat-card-header>&ndash;&gt;-->\n<!--&lt;!&ndash;<mat-card-title>&ndash;&gt;-->\n<!--&lt;!&ndash;<span class=\"card-title\">Umsatz pro Getränk</span>&ndash;&gt;-->\n<!--&lt;!&ndash;</mat-card-title>&ndash;&gt;-->\n<!--&lt;!&ndash;</mat-card-header>&ndash;&gt;-->\n<!--&lt;!&ndash;<mat-card-content>&ndash;&gt;-->\n<!--&lt;!&ndash;<div id='chart-revenue' style=\"padding: 10px;\"></div>&ndash;&gt;-->\n<!--&lt;!&ndash;</mat-card-content>&ndash;&gt;-->\n<!--&lt;!&ndash;</mat-card>&ndash;&gt;-->\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\n<!--<div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutGap=\"10px\">-->\n<!--&lt;!&ndash; Revenue today, Top Recipe name &ndash;&gt;-->\n<!--<div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayoutGap=\"10px\">-->\n<!---->\n\n<!---->\n<!--</div>-->\n\n<!--&lt;!&ndash; Chart top 5 &ndash;&gt;-->\n\n\n<!--</div>-->\n<!--</div>-->"

/***/ }),

/***/ "../../../../../src/app/console/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c3__ = __webpack_require__("../../../../c3/c3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_c3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_service__ = __webpack_require__("../../../../../src/app/console/services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.revenueToday = null;
        this.topRecipe = null;
        this.topRecipeName = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // pupulate topRecipe
        this.dashboardService.getTopRecipeForUser().subscribe(function (recipe) {
            _this.topRecipe = recipe;
            if (recipe) {
                _this.topRecipeName = recipe.technologydataname;
            }
            else {
                _this.topRecipeName = null;
            }
        });
        this.dashboardService.getRevenueTodayForUser().subscribe(function (revenue) {
            _this.revenueToday = revenue;
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
    };
    DashboardComponent.prototype.loadTopRecipesChart = function () {
        var _this = this;
        this.dashboardService.getTopRecipes(5).subscribe(function (ranking) {
            var keys = ['x'];
            var values = ['value'];
            var cs = [];
            ranking.forEach(function (info) {
                cs.push([info.technologydataname, info.amount]);
                keys.push(info.technologydataname);
                values.push(info.amount);
            }, _this);
            _this.chartTopRecipes = __WEBPACK_IMPORTED_MODULE_1_c3__["generate"]({
                bindto: "#chart-top-recipes",
                data: {
                    type: 'pie',
                    empty: { label: { text: "Keine Daten vorhanden" } },
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
    };
    DashboardComponent.prototype.loadRevenueChart = function () {
        var _this = this;
        console.log("loding hist data");
        this.dashboardService.getRevenueHistoryForUser().subscribe(function (revenues) {
            var drinks = revenues['data'];
            var categories = [];
            var columns = [];
            var techNames = [];
            var groups = [];
            var types = {};
            var i = 0;
            var count = 0;
            revenues.forEach(function (recipe) {
                console.log(recipe);
            });
            //categories.push(moment('2017-01-01').format('YYYY-MM-DD'));
            revenues.forEach(function (revenueData) {
                //Get Categories for X-Axis
                if (!_this.contains(categories, __WEBPACK_IMPORTED_MODULE_2_moment__(revenueData.date).format('YYYY-MM-DD'))) {
                    categories.push(__WEBPACK_IMPORTED_MODULE_2_moment__(revenueData.date).format('YYYY-MM-DD'));
                }
                if (!_this.contains(techNames, revenueData.technologydataname)) {
                    techNames.push(revenueData.technologydataname);
                    columns.push([revenueData.technologydataname]);
                    if (revenueData.technologydataname == "Benchmark") {
                        types[revenueData.technologydataname] = "line";
                    }
                    else {
                        groups.push(revenueData.technologydataname);
                        types[revenueData.technologydataname] = "area";
                    }
                }
                columns.forEach(function (column) {
                    if (column[0] == revenueData.technologydataname) {
                        column.push(revenueData.revenue);
                    }
                });
            });
            _this.chartTopRecipes = __WEBPACK_IMPORTED_MODULE_1_c3__["generate"]({
                bindto: "#chart-revenue",
                data: {
                    x: 'x',
                    columns: [
                        ['x'].concat(categories),
                    ].concat(columns),
                    types: types,
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
                    },
                    y: {
                        label: 'Umsatz',
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
        }, function (error) {
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
    };
    DashboardComponent.prototype.contains = function (container, value) {
        var returnValue = false;
        var pos = container.indexOf(value);
        if (pos >= 0) {
            returnValue = true;
        }
        return returnValue;
    };
    ;
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
            template: __webpack_require__("../../../../../src/app/console/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/console/dashboard/dashboard.component.css"), __webpack_require__("../../../../c3/c3.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_dashboard_service__["a" /* DashboardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_dashboard_service__["a" /* DashboardService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/add-component-dialog/add-component-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/add-component-dialog/add-component-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Zutat hinzufügen</h1>\n\n<div mat-dialog-content>\n    <mat-list>\n        <mat-list-item *ngFor=\"let component of components\" (click)=\"componentSelected(component)\">\n            {{component.name}}\n        </mat-list-item>\n    </mat-list>\n</div>\n<mat-dialog-actions>\n    <button mat-button mat-dialog-close>Abbrechen</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/add-component-dialog/add-component-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponentDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddComponentDialogComponent = (function () {
    function AddComponentDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.components = [];
        this.selectedComponent = undefined;
        this.components = data.components;
    }
    // onNoClick(): void {
    // this.dialogRef.close();
    // }
    AddComponentDialogComponent.prototype.ngOnInit = function () {
    };
    AddComponentDialogComponent.prototype.confirmSelection = function () {
        this.dialogRef.close(this.selectedComponent);
    };
    AddComponentDialogComponent.prototype.componentSelected = function (component) {
        this.selectedComponent = component;
        this.dialogRef.close(this.selectedComponent);
    };
    AddComponentDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-component-dialog',
            template: __webpack_require__("../../../../../src/app/console/juice-program-configurator/add-component-dialog/add-component-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/console/juice-program-configurator/add-component-dialog/add-component-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], AddComponentDialogComponent);
    return AddComponentDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/juice-program-configurator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tdm-program {\n    /* background-color: #eee; */\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    -ms-user-select: none;\n        user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    -o-user-select: none;\n}\n\n/*** SEQUENCE ***/\n.tdm-sequence {\n    /* background-color: #f55; */\n    height: 40px;\n}\n\n.tdm-sequence-label {\n    border-bottom: 1px solid #999;\n    border-right: 1px solid #999;\n    font-weight: normal;\n    padding-left: 2px;\n}\n\n.tdm-sequence-remove-button {\n    margin-right: 5px;\n}\n\n.tdm-sequence-content {\n    border-bottom: 1px solid #999;\n    position: relative;\n}\n\n.tdm-sequence-total-label {\n    border-bottom: 1px solid #999;\n    border-left: 1px solid #999;\n}\n\n.tdm-sequence-snapline {\n    position: absolute;\n    left: 300px;\n    background-color: #aaf;\n    height: 100%;\n    width: 2px;\n}\n\n.tdm-footer-label {\n    border-right: 1px solid #999;\n    font-weight: normal;\n    padding-left: 2px;\n}\n\n.tdm-footer-total-label {\n    border-left: 1px solid #999;\n}\n\n.tdm-link {\n    color: #337ab7;\n    text-decoration: none;\n}\n\n/*** PHASE ***/\n.tdm-phase {\n    background-color: #fff;\n    margin-top: 1px;\n    height: 37px;\n    -webkit-user-select: false;\n       -moz-user-select: false;\n        -ms-user-select: false;\n            user-select: false;\n    border: 1px solid #aaa;\n    position: absolute;\n    /* width: 100px;\n    height: 30px; */\n}\n\n.tdm-phase-content {\n    /* position: absolute; */\n    /* width: calc(100% - 30px); */\n    /* height: 100%; */\n}\n\n.tdm-phase-content-label {\n    z-index: 101;\n    position: absolute;\n    color: #fff;\n    width: calc(100% - 29px);\n    text-align: center;\n}\n\n.tdm-phase-content-throughput {\n    position: absolute;\n    width: 100%;\n    background-color: #AAC253;\n}\n\n.tdm-phase-throughput-handle {\n    z-index: 100;\n    /* position: absolute; */\n    /* margin-left: calc(100% - 30px); */\n    height: 37px;\n    background: #627028;\n    /* width: 30px; */\n    /* vertical-align: middle; */\n    /* text-align: center; */\n}\n\n/*** PAUSE ***/\n.tdm-pause-phase {\n    position: absolute;\n    height: 37px;\n    margin-top: 1px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    background-color: #aaa;\n}\n\n.tdm-pause-phase-content {\n    /* position: absolute; */\n    /* width: calc(100% - 30px); */\n    /* height: 100%; */\n}\n\n.tdm-pause-phase-content-label {\n    z-index: 101;\n    position: absolute;\n    color: #fff;\n    width: 100%;\n    text-align: center;\n}\n\n/*** OTHER ***/\n.tdm-error {\n    font-weight: bold;\n    color: #f00;\n}\n\n.tdm-program-error {\n    text-align: center;\n    font-weight: bold;\n    color: #f00;\n}\n\n.tdm-empty-program-box {\n    background-color: #eee;\n    border: 1px solid #ddd;\n    height: 100px;\n}\n\n.pause-phase {\n    position: absolute;\n    height: 37px;\n    margin-top: 1px;\n    vertical-align: middle;\n    -webkit-user-select: false;\n       -moz-user-select: false;\n        -ms-user-select: false;\n            user-select: false;\n\n    background-color: #aaa;\n}\n\n.pause-phase-content {\n    /* position: absolute; */\n    /* width: 100%; */\n    /* height: 100%; */\n    /* text-align: center; */\n    /* vertical-align: middle; */\n}\n\n.tdm-phase-throughput-caret {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 0 7.5px 13.0px;\n    border-color: transparent transparent transparent #fff;\n}\n\n.program-row {\n    height: 40px;\n    border-bottom: 1px solid #999;\n}\n\n.program-row-footer {\n    height: 40px;\n}\n\n.program-row-footer.content {\n    text-align: center;\n}\n\n.program-row-total {\n    height: 40px;\n    padding: 0px;\n    /* border-bottom: 1px solid #999; */\n    border-left: 1px solid #999;\n    /* position: absolute; */\n    text-align: center;\n    /* user-select: false; */\n    vertical-align: middle;\n}\n\n.program-pause-label {\n    font-weight: normal;\n    height: 40px;\n    border-right: 1px solid #999;\n    padding-left: 26px;\n}\n\n.program-footer-label {\n    font-weight: normal;\n    height: 40px;\n    border-right: 1px solid #999;\n    padding-left: 26px;\n}\n\n.footer {\n    border-bottom: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/juice-program-configurator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tdm-program\" fxLayout=\"column\" fxFlexFill>\n    <div *ngIf=\"program.sequences.length == 0\" class=\"tdm-empty-program-box\" fxLayoutAlign=\"center center\">\n        <a href=\"javascript:void(0);\" class=\"tdm-link\" (click)=\"openAddComponentDialog()\">Zutat hinzufügen</a>\n    </div>\n    <div *ngIf=\"program.sequences.length > 0\">\n        <!-- sequences -->\n        <div *ngFor=\"let sequence of program.sequences; index as sequenceIndex; first as isFirst\" class=\"tdm-sequence\"\n             fxLayout=\"row\">\n            <!-- component name -->\n            <div class=\"tdm-sequence-label\" fxFlex=\"20\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"left center\">\n                <div class=\"valign\" fxLayout=\"row\">\n                    <a (click)=\"removeSequence(sequence)\" class=\"tdm-sequence-remove-button\">\n                        <img src=\"/assets/images/delete-icon.png\" width=\"16px\" height=\"16px\">\n                    </a>\n                    <div class=\"tdm-component-label\">{{sequence.component.name}}</div>\n                </div>\n            </div>\n            <!-- phases -->\n            <div class=\"tdm-sequence-content\" fxFlex=\"70\" fxFlexAlign=\"stretch\" style=\"position: relative;\">\n                <div *ngFor=\"let phase of sequence.phases; index as phaseIndex;\" fxFlexAlign=\"stretch\" class=\"tdm-phase\"\n                     style.left=\"{{getPhaseStart(phase)}}px\"\n                     style.width=\"{{getPhaseWidth(phase)}}px\" (mousedown)=\"startMouseDragPhaseStart(phase, $event)\"\n                     (touchstart)=\"startTouchDragPhaseStart(phase, $event)\"\n                     (click)=\"phaseClicked(phase, $event)\" fxLayout=\"row\">\n                    <div class=\"tdm-phase-content\" fxLayoutAlign=\"left center\" fxFlex=\"calc(100% - 30px);\">\n                        <div class=\"tdm-phase-content-throughput\" style.height=\"{{phase.throughput}}%\"></div>\n                        <div class=\"tdm-phase-content-label\">{{getPhaseAmountLabel(phase)}}</div>\n                    </div>\n                    <div class=\"tdm-phase-throughput-handle\" (mousedown)=\"startMouseDragThroughputHandle(phase, $event)\"\n                         (touchstart)=\"startTouchDragThroughputHandle(phase, $event)\"\n                         fxLayoutAlign=\"center center\" fxFlex=\"30px\">\n                        <div class=\"tdm-phase-throughput-caret\"></div>\n                    </div>\n                </div>\n                <div *ngIf=\"snapLineOffset != -1\" class=\"tdm-sequence-snapline\"\n                     style.left=\"{{getSnapLineStart()}}px\"></div>\n            </div>\n            <!-- total amount of sequence -->\n            <div class=\"tdm-sequence-total-label\" fxFlex=\"10\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\">\n                <div class=\"valign total-label change-amount\">{{getSequenceAmountLabel(sequence)}}</div>\n            </div>\n        </div>\n\n        <!-- pauses -->\n        <div *ngIf=\"program.hasPause()\" class=\"tdm-sequence\" fxLayout=\"row\">\n            <div class=\"tdm-sequence-label\" fxFlex=\"20\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"left center\">\n                <div class=\"valign\" fxLayout=\"row\">\n                    <div class=\"tdm-component-label\" style=\"margin-left: 21px\">Pausen</div>\n                </div>\n            </div>\n            <!-- pause-phases -->\n            <div class=\"tdm-sequence-content\" fxFlex=\"70\" fxFlexAlign=\"stretch\" style=\"position: relative;\">\n                <div *ngFor=\"let phase of program.pauseSequence.phases; index as phaseIndex;\" fxFlexAlign=\"stretch\"\n                     class=\"tdm-pause-phase\"\n                     style.left=\"{{getPhaseStart(phase)}}px\" style.width=\"{{getPhaseWidth(phase)}}px\" fxLayout=\"row\">\n                    <div class=\"tdm-pause-phase-content\" fxLayoutAlign=\"left center\" fxFlex=\"calc(100% - 30px);\">\n                        <div class=\"tdm-pause-phase-content-label\">{{getPausePhaseLabel(phase)}}</div>\n                    </div>\n                </div>\n                <div *ngIf=\"snapLineOffset != -1\" class=\"tdm-sequence-snapline\"\n                     style.left=\"{{getSnapLineStart()}}px\"></div>\n            </div>\n            <!-- total amount of sequence -->\n            <div class=\"tdm-sequence-total-label\" fxFlex=\"10\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\">\n                <div class=\"valign total-label change-amount\" [ngClass]=\"{'tdm-error': hasTotalPauseError()}\">\n                    {{getTotalPauseLabel(program.pauseSequence)}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tdm-sequence\" fxLayout=\"row\">\n            <div class=\"tdm-footer-label\" fxFlex=\"20\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"left center\">\n                <div class=\"valign\" fxLayout=\"row\">\n                    <div class=\"tdm-component-label\" style=\"margin-left: 21px;\">\n                        <a (click)=\"openAddComponentDialog()\" class=\"tdm-link\">Zutat hinzufügen</a>\n                        <!-- <mat-form-field>\n                            <mat-select placeholder=\"Zutat hinzufügen\">\n                              <mat-option *ngFor=\"let component of components\" [value]=\"component.id\">\n                                {{ component.name }}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>           -->\n                    </div>\n                </div>\n            </div>\n            <!-- error messages -->\n            <div [innerHTML]=\"getErrorText()\" class=\"tdm-program-error\" fxFlex=\"70\" fxFlexAlign=\"stretch\"\n                 fxLayoutAlign=\"center center\"\n                 style=\"position: relative;\">\n            </div>\n            <!-- total amount -->\n            <div class=\"tdm-footer-total-label\" fxFlex=\"10\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\">\n                <div class=\"total-label\"\n                     [ngClass]=\"{'tdm-error': hasMaxTotalAmountError() || hasMinTotalAmountError()}\">\n                    {{getTotalAmountLabel(program)}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/juice-program-configurator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuiceProgramConfiguratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tdmprogram__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/models/tdmprogram.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_component_dialog_add_component_dialog_component__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/add-component-dialog/add-component-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase_dialog_phase_dialog_component__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/phase-dialog/phase-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var JuiceProgramConfiguratorComponent = (function () {
    function JuiceProgramConfiguratorComponent(elementRef, dialog) {
        this.elementRef = elementRef;
        this.dialog = dialog;
        this.program = new __WEBPACK_IMPORTED_MODULE_1__models_tdmprogram__["b" /* TdmProgram */]();
        this.components = [];
        this.validInterval = [-10000, 10000];
        this.pixelPerAmount = 1;
        this.snappingEpsilon = 3;
        this.snapLineOffset = -1;
        this.minPhaseAmount = 10;
        this.minTotalAmount = 100;
        this.maxTotalAmount = 120;
        this.maxTotalPause = 5000;
        // dragging
        this.draggingType = null;
        this.wasDragged = false;
        this.draggingStartValue = 0;
        this.draggingStartMouseX = 0;
    }
    JuiceProgramConfiguratorComponent.prototype.windowResized = function (event) {
        this.updateScale();
    };
    JuiceProgramConfiguratorComponent.prototype.windowTouchMove = function (event) {
        var clientX = event.touches[0].clientX;
        this.dragMoved(clientX);
    };
    JuiceProgramConfiguratorComponent.prototype.windowMouseMove = function (event) {
        var clientX = event.clientX;
        this.dragMoved(clientX);
    };
    JuiceProgramConfiguratorComponent.prototype.dragMoved = function (clientX) {
        var _this = this;
        if (this.draggingPhase != null) {
            this.wasDragged = true;
            var dx = clientX - this.draggingStartMouseX;
            var dxAmount = dx / this.pixelPerAmount;
            this.snapLineOffset = -1;
            if (this.draggingType == 'phase-start') {
                var draggingInterval = this.getDraggingInterval(this.draggingPhase);
                var newStart = Math.round(this.draggingStartValue + dxAmount);
                newStart = Math.max(draggingInterval[0], newStart);
                newStart = Math.min(draggingInterval[1], newStart);
                // check snapping
                var closestValue = null;
                var phaseEnd = newStart + this.draggingPhase.amount * 100 / this.draggingPhase.throughput;
                this.program.sequences.forEach(function (sequence) {
                    sequence.phases.forEach(function (p) {
                        if (p !== _this.draggingPhase) {
                            if (closestValue == null) {
                                closestValue = p.start;
                            }
                            var pEnd = p.start + p.amount * 100 / p.throughput;
                            // compare start with other starts
                            if (Math.abs(newStart - p.start) < Math.abs(newStart - closestValue)) {
                                closestValue = p.start;
                                _this.snapLineOffset = p.start;
                            }
                            // compare end with other starts
                            if (Math.abs(phaseEnd - p.start) < Math.abs(phaseEnd - (closestValue + _this.draggingPhase.amount * 100 / _this.draggingPhase.throughput))) {
                                closestValue = p.start - (_this.draggingPhase.amount * 100 / _this.draggingPhase.throughput);
                                _this.snapLineOffset = p.start;
                            }
                            // compare start with other ends
                            if (Math.abs(newStart - pEnd) < Math.abs(newStart - closestValue)) {
                                closestValue = pEnd;
                                _this.snapLineOffset = pEnd;
                            }
                            // compare end with other ends
                            if (Math.abs(phaseEnd - pEnd) < Math.abs(phaseEnd - (closestValue + _this.draggingPhase.amount * 100 / _this.draggingPhase.throughput))) {
                                closestValue = pEnd - (_this.draggingPhase.amount * 100 / _this.draggingPhase.throughput);
                                _this.snapLineOffset = pEnd;
                            }
                        }
                    });
                });
                if (Math.abs(newStart - closestValue) < this.snappingEpsilon) {
                    newStart = closestValue;
                }
                else {
                    this.snapLineOffset = -1;
                }
                this.draggingPhase.start = newStart;
                this.program.updatePauses();
                this.updateScale();
            }
            if (this.draggingType == 'phase-throughput') {
                // calculate minimum throughput
                var remainingInterval = this.getRemainingInterval(this.draggingPhase);
                var remainingSize = remainingInterval[1] - this.draggingPhase.start;
                var minimumThroughput = this.draggingPhase.amount * 100 / remainingSize;
                minimumThroughput = Math.max(30, minimumThroughput);
                minimumThroughput = Math.ceil(minimumThroughput);
                // calculate throughput
                var throughput = this.draggingStartValue;
                var x = this.draggingPhase.amount * 100 / this.draggingStartValue - this.draggingPhase.amount + dxAmount;
                if (x > 0) {
                    var tpd = this.draggingPhase.amount * 100 / (this.draggingPhase.amount + x) - this.draggingStartValue;
                    tpd = Math.round(tpd);
                    throughput = this.draggingStartValue + tpd;
                    // check snapping
                    var closestValue = null;
                    var phaseEnd = this.draggingPhase.start + this.draggingPhase.amount * 100 / throughput;
                    this.program.sequences.forEach(function (sequence) {
                        sequence.phases.forEach(function (p) {
                            if (p !== _this.draggingPhase) {
                                if (closestValue == null) {
                                    closestValue = p.start;
                                }
                                var pEnd = p.start + p.amount * 100 / p.throughput;
                                // compare end with other starts
                                if (Math.abs(phaseEnd - p.start) < Math.abs(phaseEnd - closestValue)) {
                                    closestValue = p.start;
                                    _this.snapLineOffset = p.start;
                                }
                                // compare end with other ends
                                if (Math.abs(phaseEnd - pEnd) < Math.abs(phaseEnd - closestValue)) {
                                    closestValue = pEnd;
                                    _this.snapLineOffset = pEnd;
                                }
                            }
                        });
                    });
                    if (Math.abs(phaseEnd - closestValue) < this.snappingEpsilon) {
                        throughput = Math.ceil(this.draggingPhase.amount * 100 / (closestValue - this.draggingPhase.start));
                    }
                    else {
                        this.snapLineOffset = -1;
                    }
                    throughput = Math.min(100, throughput);
                    throughput = Math.max(minimumThroughput, throughput);
                }
                else {
                    throughput = 100;
                }
                this.draggingPhase.throughput = throughput;
                this.program.updatePauses();
                this.updateScale();
            }
        }
    };
    JuiceProgramConfiguratorComponent.prototype.updateScale = function () {
        var content = this.elementRef.nativeElement.querySelector('.tdm-sequence-content');
        if (content != undefined) {
            var contentWidth = content.offsetWidth;
            var bounds = this.program.getBounds();
            var span = bounds[1] - bounds[0];
            if (span > 0) {
                var newPixelPerAmount = contentWidth / span;
                if (newPixelPerAmount != this.pixelPerAmount) {
                    this.pixelPerAmount = contentWidth / span;
                }
            }
        }
    };
    JuiceProgramConfiguratorComponent.prototype.convertAmountToPixel = function (amount) {
        this.updateScale();
        var pixels = amount * this.pixelPerAmount;
        return pixels;
    };
    JuiceProgramConfiguratorComponent.prototype.getRemainingInterval = function (phase) {
        for (var i = 0; i < this.program.sequences.length; i += 1) {
            var sequence = this.program.sequences[i];
            var processingPhase = null;
            var interval = [this.validInterval[0], this.validInterval[1]];
            for (var j = 0; j < sequence.phases.length; j += 1) {
                var p = sequence.phases[j];
                if (p == phase) {
                    processingPhase = p;
                }
                else {
                    if (processingPhase == null) {
                        interval[0] = p.start + p.amount * 100 / p.throughput;
                    }
                    else {
                        interval[1] = p.start;
                        break;
                    }
                }
            }
            if (processingPhase != null) {
                break;
            }
        }
        return interval;
    };
    JuiceProgramConfiguratorComponent.prototype.getDraggingInterval = function (phase) {
        var interval = this.getRemainingInterval(phase);
        interval[1] = interval[1] - phase.amount * 100 / phase.throughput;
        return interval;
    };
    JuiceProgramConfiguratorComponent.prototype.ngOnInit = function () {
    };
    JuiceProgramConfiguratorComponent.prototype.getPhaseAmountLabel = function (phase) {
        var title = phase.amount + " ml";
        if (phase.throughput != 100) {
            title = phase.amount + " ml (" + phase.throughput + " %)";
        }
        return title;
    };
    JuiceProgramConfiguratorComponent.prototype.getSequenceAmountLabel = function (sequence) {
        var label = sequence.getTotalAmount() + " ml";
        return label;
    };
    JuiceProgramConfiguratorComponent.prototype.getTotalAmountLabel = function (program) {
        var totalAmount = program.getTotalAmount();
        var label = totalAmount + " ml";
        return label;
    };
    JuiceProgramConfiguratorComponent.prototype.getPausePhaseLabel = function (phase) {
        var milliseconds = phase.amount / this.program.amountPerMillisecond;
        var seconds = Math.round(milliseconds / 100) / 10;
        var title = "" + seconds + " s";
        return title;
    };
    JuiceProgramConfiguratorComponent.prototype.getTotalPauseLabel = function (sequence) {
        var totalAmount = sequence.getTotalAmount();
        var milliseconds = totalAmount / this.program.amountPerMillisecond;
        var seconds = Math.round(milliseconds / 100) / 10;
        var label = seconds + " s";
        return label;
    };
    JuiceProgramConfiguratorComponent.prototype.getPhaseStart = function (phase) {
        var bounds = this.program.getBounds();
        var px = this.convertAmountToPixel(phase.start - bounds[0]);
        return px;
    };
    JuiceProgramConfiguratorComponent.prototype.getSnapLineStart = function () {
        var px = -1;
        if (this.snapLineOffset > 0) {
            var bounds = this.program.getBounds();
            px = this.convertAmountToPixel(this.snapLineOffset - bounds[0]);
        }
        return px;
    };
    JuiceProgramConfiguratorComponent.prototype.getThroughputHeight = function (phase) {
        var bounds = this.program.getBounds();
        var px = this.convertAmountToPixel(phase.start - bounds[0]);
        return px;
    };
    JuiceProgramConfiguratorComponent.prototype.getPhaseWidth = function (phase) {
        var width = phase.amount * 100 / phase.throughput;
        var px = this.convertAmountToPixel(width);
        return px;
    };
    JuiceProgramConfiguratorComponent.prototype.hasMinPhaseAmountError = function () {
        var error = false;
        var minPhaseAmount = this.minPhaseAmount;
        this.program.sequences.forEach(function (sequence) {
            sequence.phases.forEach(function (phase) {
                if (phase.amount < minPhaseAmount) {
                    error = true;
                }
            });
        });
        return error;
    };
    JuiceProgramConfiguratorComponent.prototype.hasMinTotalAmountError = function () {
        var error = false;
        var totalAmount = this.program.getTotalAmount();
        if (totalAmount < this.minTotalAmount) {
            error = true;
        }
        return error;
    };
    JuiceProgramConfiguratorComponent.prototype.hasMaxTotalAmountError = function () {
        var error = false;
        var totalAmount = this.program.getTotalAmount();
        if (totalAmount > this.maxTotalAmount) {
            error = true;
        }
        return error;
    };
    JuiceProgramConfiguratorComponent.prototype.hasTotalPauseError = function () {
        var error = false;
        var totalAmount = this.program.pauseSequence.getTotalAmount();
        var milliseconds = totalAmount / this.program.amountPerMillisecond;
        if (milliseconds > this.maxTotalPause) {
            error = true;
        }
        return error;
    };
    JuiceProgramConfiguratorComponent.prototype.getErrorText = function () {
        var errorText = "";
        if (this.hasMinPhaseAmountError()) {
            errorText += "Phase unterschreitet Mindestmenge(" + this.minPhaseAmount + " ml).<br>";
        }
        if (this.hasMinTotalAmountError()) {
            errorText += "Mindestmenge (" + this.minTotalAmount + " ml) unterschritten.<br>";
        }
        if (this.hasMaxTotalAmountError()) {
            errorText += "Höchstmenge (" + this.maxTotalAmount + " ml) überschritten.<br>";
        }
        if (this.hasTotalPauseError()) {
            errorText += "Zulässige Summe der Pausenzeiten (" + (this.maxTotalPause / 1000) + " s) überschritten.<br>";
        }
        return errorText;
    };
    JuiceProgramConfiguratorComponent.prototype.removeSequence = function (sequence) {
        this.program.removeSequence(sequence);
        this.updateScale();
    };
    JuiceProgramConfiguratorComponent.prototype.windowMouseUp = function (event) {
        this.draggingType = null;
        this.snapLineOffset = -1;
        if (this.draggingPhase != null) {
            this.program.normalize();
            this.updateScale();
        }
        this.draggingPhase = null;
    };
    // private getClientX(event: UIEvent) {
    //   var clientX = null;
    //   console.log("type:" + typeof(event));
    //   if (event instanceof TouchEvent) {
    //     clientX = event.touches[0].clientX;
    //   } else if (event instanceof MouseEvent) {
    //     clientX = event.clientX;
    //   }
    //   return clientX;
    // }
    JuiceProgramConfiguratorComponent.prototype.startMouseDragThroughputHandle = function (phase, event) {
        var clientX = event.clientX;
        this.startDragThroughputHandle(phase, clientX);
    };
    JuiceProgramConfiguratorComponent.prototype.startTouchDragThroughputHandle = function (phase, event) {
        var clientX = event.touches[0].clientX;
        this.startDragThroughputHandle(phase, clientX);
    };
    JuiceProgramConfiguratorComponent.prototype.startDragThroughputHandle = function (phase, clientX) {
        if (this.draggingType == null) {
            this.wasDragged = false;
            this.draggingType = 'phase-throughput';
            this.draggingPhase = phase;
            this.draggingStartMouseX = clientX;
            this.draggingStartValue = phase.throughput;
        }
    };
    JuiceProgramConfiguratorComponent.prototype.startMouseDragPhaseStart = function (phase, event) {
        var clientX = event.clientX;
        this.startDragPhaseStart(phase, clientX);
    };
    JuiceProgramConfiguratorComponent.prototype.startTouchDragPhaseStart = function (phase, event) {
        var clientX = event.touches[0].clientX;
        this.startDragPhaseStart(phase, clientX);
    };
    JuiceProgramConfiguratorComponent.prototype.startDragPhaseStart = function (phase, clientX) {
        if (this.draggingType == null) {
            this.wasDragged = false;
            this.draggingType = 'phase-start';
            this.draggingPhase = phase;
            this.draggingStartMouseX = clientX;
            this.draggingStartValue = phase.start;
        }
    };
    JuiceProgramConfiguratorComponent.prototype.phaseClicked = function (phase, event) {
        if (!this.wasDragged) {
            this.openPhaseDialog(phase);
        }
    };
    JuiceProgramConfiguratorComponent.prototype.addComponent = function (component) {
        var sequence = new __WEBPACK_IMPORTED_MODULE_1__models_tdmprogram__["c" /* TdmSequence */]();
        sequence.component = component;
        sequence.addPhase(new __WEBPACK_IMPORTED_MODULE_1__models_tdmprogram__["a" /* TdmPhase */](0, 50, 100));
        this.program.addSequence(sequence);
        this.phaseChanged();
    };
    JuiceProgramConfiguratorComponent.prototype.phaseChanged = function () {
        this.program.updatePauses();
        this.updateScale();
    };
    JuiceProgramConfiguratorComponent.prototype.openAddComponentDialog = function () {
        var _this = this;
        // filter already used components
        var availableComponents = this.components.filter(function (component) {
            var alreadyUsed = false;
            _this.program.sequences.forEach(function (sequence) {
                if (sequence.component === component) {
                    alreadyUsed = true;
                }
            });
            return !alreadyUsed;
        });
        // upen dialog
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_component_dialog_add_component_dialog_component__["a" /* AddComponentDialogComponent */], {
            // width: '250px',
            data: {
                components: availableComponents
            }
        });
        // handle dialog result
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != "") {
                _this.addComponent(result);
            }
        });
    };
    JuiceProgramConfiguratorComponent.prototype.openPhaseDialog = function (phase) {
        var _this = this;
        // upen dialog
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__phase_dialog_phase_dialog_component__["a" /* PhaseDialogComponent */], {
            // width: '250px',
            data: {
                phase: phase
            }
        });
        // handle dialog result
        dialogRef.afterClosed().subscribe(function (result) {
            var action = result['action'];
            var amount = result['amount'];
            var phase = result['phase'];
            if (action == 'remove') {
                if (phase.sequence != null) {
                    var sequence = phase.sequence;
                    sequence.removePhase(phase);
                    if (sequence.phases.length == 0) {
                        _this.program.removeSequence(sequence);
                    }
                }
            }
            if (action == 'split') {
                if (phase.sequence != null) {
                    var sequence = phase.sequence;
                    sequence.splitPhase(phase, amount);
                }
            }
            if (action == 'change') {
                if (phase.sequence != null) {
                    var sequence = phase.sequence;
                    sequence.changePhaseAmount(phase, amount);
                }
            }
            _this.phaseChanged();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tdmprogram__["b" /* TdmProgram */])
    ], JuiceProgramConfiguratorComponent.prototype, "program", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], JuiceProgramConfiguratorComponent.prototype, "components", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UIEvent]),
        __metadata("design:returntype", void 0)
    ], JuiceProgramConfiguratorComponent.prototype, "windowResized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UIEvent]),
        __metadata("design:returntype", void 0)
    ], JuiceProgramConfiguratorComponent.prototype, "windowTouchMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], JuiceProgramConfiguratorComponent.prototype, "windowMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('touchend', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UIEvent]),
        __metadata("design:returntype", void 0)
    ], JuiceProgramConfiguratorComponent.prototype, "windowMouseUp", null);
    JuiceProgramConfiguratorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'juice-program-configurator',
            template: __webpack_require__("../../../../../src/app/console/juice-program-configurator/juice-program-configurator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/console/juice-program-configurator/juice-program-configurator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]])
    ], JuiceProgramConfiguratorComponent);
    return JuiceProgramConfiguratorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/juice-program-configurator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuiceProgramConfiguratorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__juice_program_configurator_component__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/juice-program-configurator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_component_dialog_add_component_dialog_component__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/add-component-dialog/add-component-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__phase_dialog_phase_dialog_component__ = __webpack_require__("../../../../../src/app/console/juice-program-configurator/phase-dialog/phase-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Flex-Layout




var JuiceProgramConfiguratorModule = (function () {
    function JuiceProgramConfiguratorModule() {
    }
    JuiceProgramConfiguratorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["b" /* MatInputModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__juice_program_configurator_component__["a" /* JuiceProgramConfiguratorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_component_dialog_add_component_dialog_component__["a" /* AddComponentDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__phase_dialog_phase_dialog_component__["a" /* PhaseDialogComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__juice_program_configurator_component__["a" /* JuiceProgramConfiguratorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_component_dialog_add_component_dialog_component__["a" /* AddComponentDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__phase_dialog_phase_dialog_component__["a" /* PhaseDialogComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__add_component_dialog_add_component_dialog_component__["a" /* AddComponentDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__phase_dialog_phase_dialog_component__["a" /* PhaseDialogComponent */],
            ]
        })
    ], JuiceProgramConfiguratorModule);
    return JuiceProgramConfiguratorModule;
}());



/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/models/tdmprogram.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TdmProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TdmSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TdmPhase; });
var TdmProgram = (function () {
    function TdmProgram() {
        this.amountPerMillisecond = 0.01;
        this.sequences = [];
        this.pauseSequence = new TdmSequence();
    }
    TdmProgram.prototype.addSequence = function (sequence) {
        this.sequences.push(sequence);
        this.updatePauses();
    };
    TdmProgram.prototype.removeSequence = function (sequence) {
        var index = this.sequences.indexOf(sequence, 0);
        if (index > -1) {
            this.sequences.splice(index, 1);
        }
        this.updatePauses();
    };
    TdmProgram.prototype.getBounds = function () {
        var bounds = [10000, 0];
        this.sequences.forEach(function (sequence) {
            sequence.phases.forEach(function (phase) {
                bounds[0] = Math.min(bounds[0], phase.start);
                bounds[1] = Math.max(bounds[1], phase.start + phase.amount * 100 / phase.throughput);
            });
        });
        return bounds;
    };
    TdmProgram.prototype.getTotalAmount = function () {
        var total = 0;
        this.sequences.forEach(function (sequence) {
            total += sequence.getTotalAmount();
        });
        return total;
    };
    // moves phases so that the lowest phase starts at 0
    TdmProgram.prototype.normalize = function () {
        var bounds = this.getBounds();
        this.sequences.forEach(function (sequence) {
            sequence.phases.forEach(function (phase) {
                phase.start -= bounds[0];
            });
        });
        this.updatePauses();
    };
    TdmProgram.prototype.hasPause = function () {
        var value = this.pauseSequence.phases.length > 0;
        return value;
    };
    TdmProgram.prototype.updatePauses = function () {
        this.pauseSequence.clear();
        var bounds = this.getBounds();
        var span = bounds[1] - bounds[0];
        if (span > 0) {
            var pausePhases = [new TdmPhase(bounds[0], bounds[1] - bounds[0], 100)];
            this.sequences.forEach(function (sequence) {
                sequence.phases.forEach(function (phase) {
                    var temp = [];
                    var phaseEnd = phase.start + phase.amount * 100 / phase.throughput;
                    pausePhases.forEach(function (pause) {
                        var pauseStart = pause.start;
                        var pauseEnd = pauseStart + pause.amount; // always 100% throughput
                        if (pauseEnd <= phase.start) {
                            temp.push(pause);
                        }
                        else if (pauseStart >= phaseEnd) {
                            temp.push(pause);
                        }
                        else if (pauseStart >= phase.start && pauseEnd <= phaseEnd) {
                            // nothing to do
                        }
                        else if (pauseStart < phase.start && pauseEnd > phaseEnd) {
                            pause.start = pauseStart;
                            pause.amount = phase.start - pauseStart;
                            var pauseRight = new TdmPhase(phaseEnd, pauseEnd - phaseEnd, 100);
                            temp.push(pause);
                            temp.push(pauseRight);
                        }
                        else if (pauseStart < phase.start && pauseEnd <= phaseEnd) {
                            pause.start = pauseStart;
                            pause.amount = phase.start - pauseStart;
                            temp.push(pause);
                        }
                        else if (pauseStart < phaseEnd && pauseEnd > phaseEnd) {
                            pause.start = phaseEnd;
                            pause.amount = pauseEnd - phaseEnd;
                            temp.push(pause);
                        }
                    });
                    pausePhases = temp;
                });
            });
            pausePhases.forEach(function (phase) {
                this.pauseSequence.addPhase(phase);
            }.bind(this));
        }
    };
    return TdmProgram;
}());

var TdmSequence = (function () {
    function TdmSequence() {
        this.phases = [];
    }
    TdmSequence.prototype.clear = function () {
        this.phases = [];
    };
    TdmSequence.prototype.addPhase = function (phase) {
        this.phases.push(phase);
        phase.sequence = this;
    };
    TdmSequence.prototype.removePhase = function (phase) {
        var index = this.phases.indexOf(phase, 0);
        if (index > -1) {
            this.phases.splice(index, 1);
            phase.sequence = null;
        }
    };
    TdmSequence.prototype.changePhaseAmount = function (phase, amount) {
        var index = this.phases.indexOf(phase, 0);
        if (index > -1) {
            var offset = (amount - phase.amount) * 100 / phase.throughput;
            phase.amount = amount;
            // shift next phases by offset
            var shift = false;
            for (var i = 0; i < this.phases.length; i += 1) {
                var p = this.phases[i];
                if (p == phase) {
                    shift = true;
                }
                else if (shift) {
                    p.start += offset;
                }
            }
        }
    };
    TdmSequence.prototype.splitPhase = function (phase, amount) {
        if (phase.amount - amount > 0) {
            phase.amount -= amount;
            var newPhaseStart = phase.start + phase.amount * 100 / phase.throughput;
            var newPhase = new TdmPhase(newPhaseStart, amount, phase.throughput);
            newPhase.sequence = this;
            // insert new Phase into phase array
            for (var i = 0; i < this.phases.length; i += 1) {
                var p = this.phases[i];
                if (p == phase) {
                    this.phases.splice(i + 1, 0, newPhase);
                    break;
                }
            }
        }
    };
    TdmSequence.prototype.getTotalAmount = function () {
        var total = 0;
        this.phases.forEach(function (phase) {
            total += phase.amount;
        });
        return total;
    };
    return TdmSequence;
}());

var TdmPhase = (function () {
    function TdmPhase(start, amount, throughput) {
        this.start = start;
        this.amount = amount;
        this.throughput = throughput;
    }
    TdmPhase.prototype.getEnd = function () {
        var end = this.start + this.amount * 100 / this.throughput;
        return end;
    };
    return TdmPhase;
}());



/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/models/tdmrecipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TdmRecipe; });
var TdmRecipe = (function () {
    function TdmRecipe() {
    }
    return TdmRecipe;
}());



/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/phase-dialog/phase-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/phase-dialog/phase-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"clientForm\" novalidate (ngSubmit)=\"actionChangePhase($event)\">\n    <h1 mat-dialog-title>Phase bearbeiten</h1>\n\n    <div mat-dialog-content>\n        <mat-form-field style=\"width: 100%\">\n            <input onfocus=\"this.select()\" matInput type=\"number\" placeholder=\"Menge in Milliliter\"\n                   value=\"{{phase.amount}}\" [formControl]=\"amountFormControl\" [(ngModel)]=\"amount\">\n            <mat-error *ngIf=\"amountFormControl.hasError('email') && !amountFormControl.hasError('required')\">\n                Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"amountFormControl.hasError('required')\">\n                Email is <strong>required</strong>\n            </mat-error>\n        </mat-form-field>\n    </div>\n    <mat-dialog-actions>\n        <button mat-raised-button mat-dialog-close type=\"button\">Abbrechen</button>\n        <button mat-raised-button (click)=\"actionRemovePhase()\" type=\"button\">Löschen</button>\n        <button mat-raised-button (click)=\"actionSplitPhase()\" type=\"button\">Abtrennen</button>\n        <button mat-raised-button (click)=\"actionChangePhase($event)\" type=\"submit\">Menge ändern</button>\n    </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "../../../../../src/app/console/juice-program-configurator/phase-dialog/phase-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PhaseDialogComponent = (function () {
    function PhaseDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.amountFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].max(100),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(10),
        ]);
        this.phase = data.phase;
        this.amount = this.phase.amount;
    }
    PhaseDialogComponent.prototype.ngOnInit = function () {
    };
    PhaseDialogComponent.prototype.actionRemovePhase = function () {
        this.dialogRef.close({
            'action': 'remove',
            'phase': this.phase,
            'amount': this.amount
        });
    };
    PhaseDialogComponent.prototype.actionSplitPhase = function () {
        this.dialogRef.close({
            'action': 'split',
            'phase': this.phase,
            'amount': this.amount
        });
    };
    PhaseDialogComponent.prototype.actionChangePhase = function (event) {
        event.preventDefault();
        this.dialogRef.close({
            'action': 'change',
            'phase': this.phase,
            'amount': this.amount
        });
    };
    PhaseDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-phase-dialog',
            template: __webpack_require__("../../../../../src/app/console/juice-program-configurator/phase-dialog/phase-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/console/juice-program-configurator/phase-dialog/phase-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], PhaseDialogComponent);
    return PhaseDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/console/recipes/recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-column-revenue {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    text-align: right;\n    max-width: 75px;\n}\n\n.mat-column-licensefee {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    text-align: right;\n    max-width: 75px;\n}\n\n.mat-column-action {\n    max-width: 80px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n}\n\n.mat-column-position {\n    max-width: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/console/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"headline\">Getränke verwalten</h1>\n<div fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <mat-card fxFlex=\"100\" class=\"iuno-card\">\n        <mat-card-header>\n            <mat-card-title>\n                <span class=\"card-title\">Übersicht</span>\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <app-message-box type=\"error\" *ngIf=\"errorMaxRecipes\">Derzeit ist die Anzahl an Rezepten pro Benutzer\n                begrenzt. Bitte lösche ein bestehendes Rezept, falls du weitere Rezepte\n                auf dem Marktplatz veröffentlichen möchtest.\n            </app-message-box>\n            <div *ngIf=\"dataSource.data.length == 0\" class=\"no-recipes-available\">\n                Keine Getränke vorhanden\n            </div>\n            <div *ngIf=\"dataSource.data.length > 0\">\n                <mat-table #table [dataSource]=\"dataSource\">\n\n                    <ng-container matColumnDef=\"position\">\n                        <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\n                        <mat-cell *matCellDef=\"let i = index;\"> {{i}}</mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"name\">\n                        <mat-header-cell *matHeaderCellDef>Getränkename</mat-header-cell>\n                        <mat-cell *matCellDef=\"let recipe\"> {{recipe.technologydataname}}</mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"description\">\n                        <mat-header-cell *matHeaderCellDef>Beschreibung</mat-header-cell>\n                        <mat-cell *matCellDef=\"let recipe\"> {{recipe.technologydatadescription}}</mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"revenue\">\n                        <mat-header-cell *matHeaderCellDef>Gesamtumsatz (IUNOs)</mat-header-cell>\n                        <mat-cell *matCellDef=\"let recipe\"> {{recipe.revenue | number:'1.2'}}</mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"licensefee\">\n                        <mat-header-cell *matHeaderCellDef>Lizenzgebühr (IUNOs)</mat-header-cell>\n                        <mat-cell *matCellDef=\"let recipe\"> {{(recipe.licensefee / 100000).toFixed(2)}}</mat-cell>\n                    </ng-container>\n\n                    <!-- <ng-container matColumnDef=\"li\">\n                      <mat-header-cell *matHeaderCellDef>Lizenzgebühr <small>(IUNOs)</small></mat-header-cell>\n                      <mat-cell *matCellDef=\"let recipe\"> {{(recipe.licensefee / 100000).toFixed(2)}} </mat-cell>\n                    </ng-container> -->\n\n                    <ng-container matColumnDef=\"action\">\n                        <mat-header-cell *matHeaderCellDef>Aktion</mat-header-cell>\n                        <mat-cell *matCellDef=\"let recipe\">\n                            <button (click)=\"deleteRecipe(recipe)\" mat-raised-button color=\"primary\">Löschen</button>\n                        </mat-cell>\n                    </ng-container>\n\n                    <!-- <ng-container matColumnDef=\"sales\">\n                      <mat-header-cell *matHeaderCellDef>Gesamtumsatz (IUNOs)</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"licensefee\">\n                      <mat-header-cell *matHeaderCellDef>Lizenzgebühr (IUNOs)</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"components\">\n                      <mat-header-cell *matHeaderCellDef>Komponenten</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"description\">\n                      <mat-header-cell *matHeaderCellDef>Beschreibung</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                      <mat-header-cell *matHeaderCellDef>Aktion</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n                    </ng-container>\n                   -->\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                </mat-table>\n            </div>\n        </mat-card-content>\n    </mat-card>\n    <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/console/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipe_service__ = __webpack_require__("../../../../../src/app/console/services/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/console/services/user.service.ts");
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
    function RecipesComponent(recipeService, route, accessGuard) {
        var _this = this;
        this.recipeService = recipeService;
        this.route = route;
        this.accessGuard = accessGuard;
        this.displayedColumns = ["position", "name", "description", "licensefee", "revenue", "action"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTableDataSource */]();
        this.errorMaxRecipes = false;
        this.route.params.subscribe(function (params) {
            _this.errorMaxRecipes = params['errorMaxRecipes'] ? true : false;
        });
        this.recipeService.recipes.subscribe(function (recipes) {
            _this.dataSource.data = recipes;
        });
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent.prototype.deleteRecipe = function (recipe) {
        var _this = this;
        this.accessGuard.guardLoggedIn().subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.recipeService.deleteRecipe(recipe);
            }
        });
    };
    RecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipes',
            template: __webpack_require__("../../../../../src/app/console/recipes/recipes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/console/recipes/recipes.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_recipe_service__["a" /* RecipeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* AccessGuard */]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/console/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getTopRecipeForUser = function () {
        var limit = 1;
        var fromDate = __WEBPACK_IMPORTED_MODULE_2_moment__().utc().year(2000).format();
        var toDate = __WEBPACK_IMPORTED_MODULE_2_moment__().utc().format();
        var url = '/api/users/me/reports/recipes/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate;
        return this.http.get(url).flatMap(function (recipes) {
            if (recipes.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(recipes[0] || 0);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
    };
    DashboardService.prototype.getTopRecipes = function (limit) {
        var fromDate = __WEBPACK_IMPORTED_MODULE_2_moment__().utc().year(2000).format();
        var toDate = __WEBPACK_IMPORTED_MODULE_2_moment__().utc().format();
        var url = '/api/reports/recipes/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate;
        var result = this.http.get(url);
        console.log("Top Recipes:");
        console.log(result);
        return result;
    };
    DashboardService.prototype.getRevenueHistoryForUser = function () {
        console.log("Hallo?");
        var fromDate = __WEBPACK_IMPORTED_MODULE_2_moment__().utc().year(2000).format();
        var toDate = __WEBPACK_IMPORTED_MODULE_2_moment__().utc().endOf('day').format();
        var url = '/api/users/me/reports/revenue/history?from=' + fromDate + '&to=' + toDate;
        console.log(url);
        var result = this.http.get(url);
        return result;
    };
    DashboardService.prototype.getRevenueTodayForUser = function () {
        var fromDate = __WEBPACK_IMPORTED_MODULE_2_moment__().utc().startOf('day').format();
        var toDate = __WEBPACK_IMPORTED_MODULE_2_moment__().utc().endOf('day').format();
        var url = '/api/users/me/reports/revenue?from=' + fromDate + '&to=' + toDate;
        return this.http.get(url).flatMap(function (res) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(res[0].revenue || 0);
        });
    };
    DashboardService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/console/services/marketplace.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpModule, Http, Response } from '@angular/http';


var MarketplaceService = (function () {
    function MarketplaceService(http) {
        this.http = http;
        this._components = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.components = this._components.asObservable();
        this.updateComponents();
    }
    MarketplaceService.prototype.updateComponents = function () {
        var _this = this;
        this.http.get('/api/components').subscribe(function (components) {
            _this._components.next(components);
        });
    };
    MarketplaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MarketplaceService);
    return MarketplaceService;
}());



/***/ }),

/***/ "../../../../../src/app/console/services/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        // @see https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
        // This is to prevent the service clients from themselves emitting store values directly instead of calling action methods and therefore bypassing the store.
        this._recipes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.recipes = this._recipes.asObservable();
        this.recipesUrl = '/api/users/me/recipes';
        this.updateRecipes();
    }
    RecipeService.prototype.updateRecipes = function () {
        var _this = this;
        console.log("Updating recipes");
        this.http.get(this.recipesUrl).subscribe(function (recipes) {
            _this._recipes.next(recipes);
        }, function (error) {
            _this.handleError(error);
        });
    };
    RecipeService.prototype.deleteRecipe = function (recipe) {
        var _this = this;
        this.http.delete(this.recipesUrl + "/" + recipe.technologydatauuid, {
            responseType: 'text',
        }).subscribe(function (response) {
            _this.updateRecipes();
        });
    };
    RecipeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "../../../../../src/app/console/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessGuard; });
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function () {
        return this.http.get("/api/users/me");
    };
    UserService.prototype.isLoggedIn = function () {
        return this.http.get("/auth/loggedin").flatMap(function (loggedin) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(loggedin);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

var AccessGuard = (function () {
    function AccessGuard(http, router) {
        this.http = http;
        this.router = router;
    }
    AccessGuard.prototype.canActivate = function (route) {
        return this.http.get("/auth/loggedin").flatMap(function (loggedin) {
            if (!loggedin) {
                window.location.href = "/";
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(loggedin);
        });
    };
    AccessGuard.prototype.guardLoggedIn = function () {
        console.log("guardLoggedIn");
        return this.http.get("/auth/loggedin").flatMap(function (loggedin) {
            console.log("loggedin = " + loggedin);
            if (!loggedin) {
                window.location.href = "/";
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(loggedin);
        });
    };
    AccessGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AccessGuard);
    return AccessGuard;
}());

var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"inner-footer\">\n\n        <a href=\"/terms-of-service\" target=\"_blank\">Nutzungsbedingungen</a> | <a href=\"/privacy\"\n                                                                                 target=\"_blank\">Datenschutz</a> | <a\n            href=\"/imprint\" target=\"_blank\">Impressum</a><br>\n        <br>\n        &copy; 2017 Trumpf Werkzeugmaschinen GmbH &amp; Co KG\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-form-field {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-form-field-label {\n  top: 1.28125em; }\n\n.mat-form-field-underline {\n  bottom: 1.25em; }\n\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  height: 1.125em; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n  .mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 100%;\n  box-sizing: border-box;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-text {\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.mat-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #cddc39; }\n  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #ff4081; }\n  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #f44336; }\n  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff4081; }\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #cddc39; }\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(205, 220, 57, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #cddc39; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #ff4081; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #f44336; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #cddc39; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #ff4081; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(205, 220, 57, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(205, 220, 57, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 64, 129, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #cddc39; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff4081; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(205, 220, 57, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #cddc39;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #ff4081;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #cddc39;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(205, 220, 57, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-focused .mat-form-field-label {\n  color: #cddc39; }\n  .mat-focused .mat-form-field-label.mat-accent {\n    color: #ff4081; }\n  .mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n\n.mat-focused .mat-form-field-required-marker {\n  color: #ff4081; }\n\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n\n.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n\n.mat-form-field-ripple {\n  background-color: #cddc39; }\n  .mat-form-field-ripple.mat-accent {\n    background-color: #ff4081; }\n  .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n\n.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n  .mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f44336; }\n\n.mat-error {\n  color: #f44336; }\n\n.mat-icon.mat-primary {\n  color: #cddc39; }\n\n.mat-icon.mat-accent {\n  color: #ff4081; }\n\n.mat-icon.mat-warn {\n  color: #f44336; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-list-option {\n  outline: none; }\n  .mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-panel {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23f0f4c3%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #f0f4c3; }\n\n.mat-progress-bar-fill::after {\n  background-color: #cddc39; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ff80ab%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ff80ab; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff4081; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #cddc39; }\n\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #ff4081; }\n\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #cddc39; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #cddc39; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(205, 220, 57, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff4081; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #ff4081; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #cddc39; }\n\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #ff4081; }\n\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-drawer.mat-drawer-push {\n    background-color: white; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #e91e63; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(233, 30, 99, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #cddc39; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(205, 220, 57, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(205, 220, 57, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #cddc39; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff4081; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(255, 64, 129, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-step-header .mat-step-icon {\n  background-color: #cddc39;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n\n.mat-tab-group.mat-primary .mat-tab-label:focus, .mat-tab-group.mat-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-primary .mat-tab-link:focus {\n  background-color: rgba(240, 244, 195, 0.3); }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #cddc39; }\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-group.mat-accent .mat-tab-label:focus, .mat-tab-group.mat-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-accent .mat-tab-link:focus {\n  background-color: rgba(255, 128, 171, 0.3); }\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ff4081; }\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-warn .mat-tab-label:focus, .mat-tab-group.mat-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-warn .mat-tab-link:focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label:focus, .mat-tab-group.mat-background-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus {\n  background-color: rgba(240, 244, 195, 0.3); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #cddc39; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group.mat-background-accent .mat-tab-label:focus, .mat-tab-group.mat-background-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus {\n  background-color: rgba(255, 128, 171, 0.3); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #ff4081; }\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-warn .mat-tab-label:focus, .mat-tab-group.mat-background-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #cddc39;\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-accent {\n    background: #ff4081;\n    color: white; }\n  .mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n\n.mat-simple-snackbar-action {\n  color: #ff4081; }\n\n.footer {\n  position: relative;\n  background-color: #cddc39;\n  padding: 30px;\n  z-index: 0; }\n\n.footer::after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: url(/assets/images/footer_bg.svg) top 0 left 0 repeat, url(/assets/images/footer_bg.svg) top 35px left 35px repeat;\n  background-size: 70px 70px;\n  z-index: -1;\n  content: '';\n  opacity: 0.3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/console/console-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-button {\n    text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/console/console-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"\">\n    <button (click)=\"openDashboard()\" mat-button class=\"nav-button\">Dashboard\n        <span flex></span>\n    </button>\n    <button (click)=\"openCreateRecipe()\" mat-button class=\"nav-button\">Neues Getränk anlegen\n        <span flex></span>\n    </button>\n    <button (click)=\"openRecipes()\" mat-button class=\"nav-button\">Getränke verwalten\n        <span flex></span>\n    </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/console/console-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsoleMenuComponent = (function () {
    function ConsoleMenuComponent(router) {
        this.router = router;
    }
    ConsoleMenuComponent.prototype.ngOnInit = function () {
    };
    ConsoleMenuComponent.prototype.openDashboard = function () {
        this.router.navigateByUrl('/console/dashboard');
    };
    ConsoleMenuComponent.prototype.openCreateRecipe = function () {
        this.router.navigateByUrl('/console/create-recipe');
    };
    ConsoleMenuComponent.prototype.openRecipes = function () {
        this.router.navigateByUrl('/console/recipes');
    };
    ConsoleMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-console-menu',
            template: __webpack_require__("../../../../../src/app/sidebar/console/console-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/console/console-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ConsoleMenuComponent);
    return ConsoleMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-button {\n    text-align: left;\n}\n\n.index {\n    font-size: 16px;\n    font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"\">\n    <button (click)=\"openLandingPage()\" mat-button class=\"nav-button index\">Start\n        <span flex></span>\n    </button>\n    <button (click)=\"openConsole()\" mat-button class=\"nav-button index\">Marktplatz\n        <span flex></span>\n    </button>\n    <app-console-menu></app-console-menu>\n    <button (click)=\"openStatistics()\" mat-button class=\"nav-button index\">Statistiken\n        <span flex></span>\n    </button>\n    <app-statistics></app-statistics>\n    <button (click)=\"openNews()\" mat-button class=\"nav-button index\">Neuigkeiten\n        <span flex></span>\n    </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent(router) {
        this.router = router;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.openLandingPage = function () {
        this.router.navigateByUrl('');
    };
    IndexComponent.prototype.openConsole = function () {
        this.router.navigateByUrl('/console');
    };
    IndexComponent.prototype.openStatistics = function () {
        this.router.navigateByUrl('/statistics');
    };
    IndexComponent.prototype.openNews = function () {
        this.router.navigateByUrl('/news');
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/sidebar/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__console_console_menu_component__ = __webpack_require__("../../../../../src/app/sidebar/console/console-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__statistics_statistics_component__ = __webpack_require__("../../../../../src/app/sidebar/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__("../../../../../src/app/sidebar/index/index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__console_console_menu_component__["a" /* ConsoleMenuComponent */], __WEBPACK_IMPORTED_MODULE_5__statistics_statistics_component__["a" /* StatisticsComponent */], __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/statistics/statistics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-button {\n    text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"\">\n    <button (click)=\"openOverview()\" mat-button class=\"nav-button\">Überblick\n        <span flex></span>\n    </button>\n    <button (click)=\"openRecipes()\" mat-button class=\"nav-button\">Rezepte\n        <span flex></span>\n    </button>\n    <button (click)=\"openCreators()\" mat-button class=\"nav-button\">Hersteller\n        <span flex></span>\n    </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/statistics/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = (function () {
    function StatisticsComponent(router) {
        this.router = router;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent.prototype.openOverview = function () {
        this.router.navigateByUrl('/statistics/overview');
    };
    StatisticsComponent.prototype.openCreators = function () {
        this.router.navigateByUrl('/statistics/creators');
    };
    StatisticsComponent.prototype.openRecipes = function () {
        this.router.navigateByUrl('/statistics/recipes');
    };
    StatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-statistics',
            template: __webpack_require__("../../../../../src/app/sidebar/statistics/statistics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utilities/message-box/message-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"type\" fxLayoutAlign=\"left center\">\n    <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/message-box/message-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.base, .error, .info, .success {\n  border-radius: 8px;\n  margin: 10px 0px;\n  padding: 10px 15px;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.error {\n  background-color: #fcc;\n  border: 2px solid #d66; }\n\n.info {\n  background-color: #ffc;\n  border: 2px solid #dd6; }\n\n.success {\n  background-color: #cfc;\n  border: 2px solid #6d6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/message-box/message-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
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

var MessageBoxComponent = (function () {
    function MessageBoxComponent() {
        this.type = "error";
    }
    MessageBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageBoxComponent.prototype, "type", void 0);
    MessageBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-box',
            template: __webpack_require__("../../../../../src/app/utilities/message-box/message-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/utilities/message-box/message-box.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utilities/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.9);\n    z-index: 1000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"counter > 0\" class=\"loading\" fxLayoutAlign=\"center center\">\n    <mat-progress-spinner mode=\"indeterminate\" diameter=\"30\" strokeWidth=\"3\"></mat-progress-spinner>\n    <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
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

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.counter = 0;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "counter", void 0);
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spinner',
            template: __webpack_require__("../../../../../src/app/utilities/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/utilities/spinner/spinner.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utilities/utilities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_box_message_box_component__ = __webpack_require__("../../../../../src/app/utilities/message-box/message-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinner_spinner_component__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Flex-Layout




var UtilitiesModule = (function () {
    function UtilitiesModule() {
    }
    UtilitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__message_box_message_box_component__["a" /* MessageBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_5__spinner_spinner_component__["a" /* SpinnerComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__message_box_message_box_component__["a" /* MessageBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_5__spinner_spinner_component__["a" /* SpinnerComponent */],
            ]
        })
    ], UtilitiesModule);
    return UtilitiesModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map