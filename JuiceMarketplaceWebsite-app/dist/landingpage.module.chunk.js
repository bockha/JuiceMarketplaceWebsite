webpackJsonp(["landingpage.module"],{

/***/ "../../../../../src/app/landingpage/landingpage-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingpageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start_component__ = __webpack_require__("../../../../../src/app/landingpage/start/start.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: 'start', component: __WEBPACK_IMPORTED_MODULE_2__start_start_component__["a" /* StartComponent */] }
];
var LandingpageRoutingModule = (function () {
    function LandingpageRoutingModule() {
    }
    LandingpageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LandingpageRoutingModule);
    return LandingpageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/landingpage/landingpage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageModule", function() { return LandingpageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start_component__ = __webpack_require__("../../../../../src/app/landingpage/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landingpage_routing_module__ = __webpack_require__("../../../../../src/app/landingpage/landingpage-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LandingpageModule = (function () {
    function LandingpageModule() {
    }
    LandingpageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__landingpage_routing_module__["a" /* LandingpageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCardModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__start_start_component__["a" /* StartComponent */]]
        })
    ], LandingpageModule);
    return LandingpageModule;
}());



/***/ }),

/***/ "../../../../../src/app/landingpage/start/start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-background {\n  background-color: #1976d2;\n  background: linear-gradient(95deg, #42a5f5, #0d47a1);\n  color: #fff;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  width: 100%;\n  min-height: 480px;\n  height: 80vh;\n  max-height: 560px;\n  overflow: visible;\n  -webkit-transform: skewY(5deg);\n          transform: skewY(5deg);\n  -webkit-transform-origin: 100%;\n          transform-origin: 100%;\n  box-sizing: border-box;\n}\n\n@media only screen and (max-width: 599px) {\n  .header-background {\n    background: linear-gradient(180deg, #42a5f5, #0d47a1);\n    -webkit-transform: skewY(0deg);\n            transform: skewY(0deg);\n  }\n}\n\n.intro {\n  height: 480px;\n  position: relative;\n  color: white;\n}\n\n.intro-logo {\n  padding: 10px;\n}\n\n.intro-logo img {\n  width: 100%;\n  height: 100%;\n\n}\n\n.intro-text {\n  padding: 10px;\n  text-align: center;\n}\n\n.intro-text h1 {\n  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif !important;\n  text-transform: uppercase !important;\n  font-size: 30px !important;\n  font-weight: 200 !important;\n  letter-spacing: 2px !important;\n}\n\n@media only screen and (max-width: 400px) {\n  .intro-text h1 {\n    font-size: 7.5vw !important;\n  }\n}\n\nhr {\n  border: none;\n  background: #dbdbdb;\n  height: 1px;\n  width: 100%;\n}\n\n.start-section {\n  margin-bottom: 20px;\n  margin-top: 20px;\n  max-width: 920px;\n  width: 100%;\n}\n\n.start-section-image {\n  padding: 30px;\n  max-width:100%;\n\n}\n\n.start-section-image img {\n\n  max-height: 200px;\n\n}\n\n.start-section-text {\n  padding: 30px;\n}\n\n.news-card {\n  max-width: 500px;\n}\n\n.news-text {\n  padding: 10px\n}\n\n.news-card img {\n  padding: 10px\n}\n\n.text-headline {\n  font-size: 20px;\n  font-weight: 500;\n  color: #1976d2;\n  margin-top: 10px;\n  text-transform: uppercase;\n}\n\narticle {\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landingpage/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"header-background\"></div>\n  <section class=\"intro\" fxLayout.lt-md=\"column\" fxLayoutAlign.lt-md=\"center stretch\" fxLayoutAlign=\"center center\">\n    <div class=\"intro-logo\" fxFlex=\"40\">\n      <img src=\"./assets/images/tdm_text.svg\">\n    </div>\n    <div class=\"intro-text\" fxFlex=\"40\">\n      <h1>\n        Der Technologiedaten-Marktplatz<br>\n        für die<br>\n        Lizenz zum Mixen\n      </h1>\n    </div>\n  </section>\n</header>\n\n<article class=\"start-article\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n  <section class=\"start-section news\">\n    <!--<h2>Neuigkeiten</h2>-->\n    <div fxLayoutAlign=\"space-around center\">\n      <mat-card class=\"news-card\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutAlign=\"space-evenly center\" >\n      <!--<mat-card class=\"news-card\" fxLayoutAlign.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutAlign=\"space-evenly center\" >-->\n        <img src=\"./assets/images/SPS.svg\" fxFlex=\"50\">\n\n        <div class=\"news-text\" fxFlex=\"50\">\n          Besuchen Sie uns auf der SPS IPC Drives 2017!\n        </div>\n      </mat-card>\n    </div>\n  </section>\n\n  <section class=\"start-section iuno-general\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutAlign=\"space-evenly center\">\n\n    <div class=\"start-section-image\" fxFlex=\"50\">\n      <img src=\"./assets/images/iuno.svg\">\n    </div>\n    <div class=\"start-section-text\" fxFlex=\"50\">\n      <div class=\"text-headline\">Was macht IUNO?</div>\n      <p>\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, con\n      </p>\n    </div>\n  </section>\n  <hr>\n  <section class=\"start-section marketplace\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutAlign=\"space-evenly center\">\n    <div class=\"start-section-text\" fxFlex=\"50\">\n      <div class=\"text-headline\">Marktplatz</div>\n      <p>\n        Hier ein paar Wörter zum Thema Markplatz...datenagnostisch...buzzword...\n      </p>\n    </div>\n\n    <div class=\"start-section-image\" fxFlex=\"50\">\n      <img src=\"./assets/images/lnr-marketplace.svg\">\n    </div>\n\n  </section>\n  <hr>\n  <section class=\"start-section juice\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutAlign=\"space-evenly center\">\n    <div class=\"start-section-image\" fxFlex=\"50\">\n      <img src=\"./assets/images/cocktail.svg\">\n    </div>\n    <div class=\"start-section-text\" fxFlex=\"50\">\n      <div class=\"text-headline\">Cocktailrezepte</div>\n      <p>\n        Wir demonstrieren Technologiedaten in Form von Cocktailrezepten ... werden sie selbst zum Technologiedatenhersteller...\n      </p>\n    </div>\n\n\n\n  </section>\n  <hr>\n  <section class=\"start-section statistics\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutAlign=\"space-evenly center\">\n\n    <div class=\"start-section-text\" fxFlex=\"50\">\n      <div class=\"text-headline\">Der Marktplatz ist live!</div>\n      <p>\n        Um das zu beweisen haben wir auch ein paar Statistiken aufbereitet...\n      </p>\n    </div>\n    <div class=\"start-section-image\" fxFlex=\"50\">\n      <img src=\"./assets/images/statistics.svg\">\n    </div>\n  </section>\n  <hr>\n  <section class=\"start-section machineoperator\" ffxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutAlign=\"space-evenly center\">\n\n\n    <div class=\"start-section-image\" fxFlex=\"50\">\n      <img src=\"./assets/images/Saftmischer.svg\">\n    </div>\n    <div class=\"start-section-text\" fxFlex=\"50\">\n      <div class=\"text-headline\">Lust am Ausprobieren?</div>\n      <p>\n        Das ganze Projekt ist OpenSource. Und wenn Sie selbst eine Maschine bauen möchten, dann wenden Sie sich doch an\n        uns....\n      </p>\n    </div>\n  </section>\n\n</article>\n"

/***/ }),

/***/ "../../../../../src/app/landingpage/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
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

var StartComponent = (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start',
            template: __webpack_require__("../../../../../src/app/landingpage/start/start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landingpage/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ })

});
//# sourceMappingURL=landingpage.module.chunk.js.map