(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Admin Portal</h2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n  [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n  [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n  [opened]=\"!(isHandset$ | async)\">\n  <mat-toolbar>\n    <a *ngIf=\"router.url!='/Admin'\" routerLink=\"/Admin\" mat-list-item title=\"Admnin Login\">\n      <img src=\"./assets/admin.png\">\n    </a>\n    Menu\n  </mat-toolbar>\n  <mat-nav-list>\n    <a *ngIf=\"router.url!='/'\" style=\"font-weight: bold\" routerLink=\"/\" mat-list-item >Home</a>\n    <a *ngIf=\"router.url!='/Form_833'\" routerLink=\"/Form_833\" mat-list-item>Service Request</a>\n    <a *ngIf=\"router.url!='/Equip_Form'\" routerLink=\"/Equip_Form\" mat-list-item>Equipment Request</a>\n  </mat-nav-list>\n</mat-sidenav>\n<mat-sidenav-content>\n  <mat-toolbar style=\"background-color: #5D8AA8\">\n    <button\n    type=\"button\"\n    aria-label=\"Toggle sidenav\"\n    mat-icon-button\n    (click)=\"drawer.toggle()\"\n    *ngIf=\"isHandset$ | async\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  <span style=\"color: white; font-weight: bold; font-size: 25px\">188th Public Affairs Portal</span>\n</mat-toolbar>\n<ul>\n  <li class=\"text\" *ngFor=\"let item of items | async\">\n    {{item.name}}\n  </li>\n</ul>\n  <router-outlet></router-outlet>\n  <!-- Welcome logo -->\n  <div *ngIf=\"router.url=='/'\" class=\"splash_page ui-view\">\n    <div class=\"patch\">\n      <img width=\"45%\" src=\"assets/WingPatch.svg\">\n    </div>\n    <div class=\"notice\">\n      <h1>NOTICE</h1>\n      <p>\n        This system is not secured. Do not upload information considered FOR OFFICIAL USE ONLY (FOUO) or PERSONALLY IDENTIFIABLE INFORMATION (PII), which must be protected under the Freedom of Information Act (5 U.S.C. 552) and/or the Privacy Act of 1974 (5 U.S.C. 552a). Unauthorized disclosure or misuse of such information may result in disciplinary action, criminal and/or civil penalties.\n      </p>\n    </div>\n  </div>\n  <!-- Welcome logo -->\n</mat-sidenav-content>\n</mat-sidenav-container>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/equip-form/equip-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equip-form/equip-form.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Equipment Request Form</h2>\n\n<div class=\"form-container\">\n\t\t<form class=\"form-wrap\" #f='ngForm'>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='date' name='date' matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" required>\n\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='fname' name='fname'matInput #input maxlength=\"20\" placeholder=\"First Name\" required>\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='lname' name='lname' matInput #input maxlength=\"20\" placeholder=\"Last Name\" required>\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-select [(ngModel)]='grade' name='grade' placeholder=\"Grade\" required>\n\t\t\t\t\t<mat-option value=\"E-1\">E-1</mat-option>\n\t\t\t\t\t<mat-option value=\"E-2\">E-2</mat-option>\n\t\t\t\t\t<mat-option value=\"E-3\">E-3</mat-option>\n\t\t\t\t\t<mat-option value=\"E-4\">E-4</mat-option>\n\t\t\t\t\t<mat-option value=\"E-5\">E-5</mat-option>\n\t\t\t\t\t<mat-option value=\"E-6\">E-6</mat-option>\n\t\t\t\t\t<mat-option value=\"E-7\">E-7</mat-option>\n\t\t\t\t\t<mat-option value=\"E-8\">E-8</mat-option>\n\t\t\t\t\t<mat-option value=\"W-1\">W-1</mat-option>\n\t\t\t\t\t<mat-option value=\"w-2\">w-2</mat-option>\n\t\t\t\t\t<mat-option value=\"W-3\">W-3</mat-option>\n\t\t\t\t\t<mat-option value=\"W-4\">W-4</mat-option>\n\t\t\t\t\t<mat-option value=\"W-5\">W-5</mat-option>\n\t\t\t\t\t<mat-option value=\"O-1\">O-1</mat-option>\n\t\t\t\t\t<mat-option value=\"O-2\">O-2</mat-option>\n\t\t\t\t\t<mat-option value=\"O-3\">O-3</mat-option>\n\t\t\t\t\t<mat-option value=\"O-4\">O-4</mat-option>\n\t\t\t\t\t<mat-option value=\"O-5\">O-5</mat-option>\n\t\t\t\t\t<mat-option value=\"O-6\">O-6</mat-option>\n\t\t\t\t\t<mat-option value=\"O-7\">O-7</mat-option>\n\t\t\t\t\t<mat-option value=\"O-8\">O-8</mat-option>\n\t\t\t\t\t<mat-option value=\"O-9\">O-9</mat-option>\n\t\t\t\t\t<mat-option value=\"O-10\">O-10</mat-option>\n\t\t\t\t\t<mat-option value=\"Civilian\">Civilian</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='phone' name='phone'matInput placeholder=\"Phone Number\">\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='emails' name='emails' matInput placeholder=\"E-mail\" [formControl]=\"email\" required>\n\t\t\t\t<mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='org' name='org' matInput #input maxlength=\"20\" placeholder=\"Organization\" required>\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='osymbol' name='osymbol' matInput #input maxlength=\"20\" placeholder=\"Office Symbol\">\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-select [(ngModel)]='equip' name='equipment' placeholder=\"Equipment\" required>\n\t\t\t\t\t<mat-option value=\"Camera Kit\">Camera Kit</mat-option>\n\t\t\t\t\t<mat-option value=\"PA System\">PA System</mat-option>\n\t\t\t\t\t<mat-option value=\"Other\">Other</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<textarea [(ngModel)]='desc' name='desc' matInput #input maxlength=\"200\" placeholder=\"Description of Use\" required></textarea>\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/200</mat-hint>\n\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t<button type=\"button\" ngclass='btn btn-primary' [disabled]='!f.valid' (click)='saveForm()' mat-raised-button>Submit</button>\n\n\t\t</form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form833/form833.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form833/form833.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Service Request From</h2>\n\n<div class=\"form-container\">\n\t\t<form class=\"form-wrap\" #f='ngForm'>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='date' name='date' matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" required>\n\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='fname' name='fname'matInput #input maxlength=\"20\" placeholder=\"First Name\" required>\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='lname' name='lname' matInput #input maxlength=\"20\" placeholder=\"Last Name\" required>\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-select [(ngModel)]='grade' name='grade' placeholder=\"Grade\" required>\n\t\t\t\t\t<mat-option value=\"E-1\">E-1</mat-option>\n\t\t\t\t\t<mat-option value=\"E-2\">E-2</mat-option>\n\t\t\t\t\t<mat-option value=\"E-3\">E-3</mat-option>\n\t\t\t\t\t<mat-option value=\"E-4\">E-4</mat-option>\n\t\t\t\t\t<mat-option value=\"E-5\">E-5</mat-option>\n\t\t\t\t\t<mat-option value=\"E-6\">E-6</mat-option>\n\t\t\t\t\t<mat-option value=\"E-7\">E-7</mat-option>\n\t\t\t\t\t<mat-option value=\"E-8\">E-8</mat-option>\n\t\t\t\t\t<mat-option value=\"E-9\">E-9</mat-option>\n\t\t\t\t\t<mat-option value=\"W-1\">W-1</mat-option>\n\t\t\t\t\t<mat-option value=\"w-2\">w-2</mat-option>\n\t\t\t\t\t<mat-option value=\"W-3\">W-3</mat-option>\n\t\t\t\t\t<mat-option value=\"W-4\">W-4</mat-option>\n\t\t\t\t\t<mat-option value=\"W-5\">W-5</mat-option>\n\t\t\t\t\t<mat-option value=\"O-1\">O-1</mat-option>\n\t\t\t\t\t<mat-option value=\"O-2\">O-2</mat-option>\n\t\t\t\t\t<mat-option value=\"O-3\">O-3</mat-option>\n\t\t\t\t\t<mat-option value=\"O-4\">O-4</mat-option>\n\t\t\t\t\t<mat-option value=\"O-5\">O-5</mat-option>\n\t\t\t\t\t<mat-option value=\"O-6\">O-6</mat-option>\n\t\t\t\t\t<mat-option value=\"O-7\">O-7</mat-option>\n\t\t\t\t\t<mat-option value=\"O-8\">O-8</mat-option>\n\t\t\t\t\t<mat-option value=\"O-9\">O-9</mat-option>\n\t\t\t\t\t<mat-option value=\"O-10\">O-10</mat-option>\n\t\t\t\t\t<mat-option value=\"Civilian\">Civilian</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='phone' name='phone'matInput placeholder=\"Phone Number\" required>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='emails' name='emails' matInput placeholder=\"E-mail\" [formControl]=\"email\" required>\n\t\t\t\t<mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-select [(ngModel)]='state' name='state' placeholder=\"State/Territory\" required>\n\t\t\t\t\t<mat-option value=\"AL\">AL</mat-option>\n\t\t\t\t\t<mat-option value=\"AK\">AK</mat-option>\n\t\t\t\t\t<mat-option value=\"AZ\">AZ</mat-option>\n\t\t\t\t\t<mat-option value=\"AR\">AR</mat-option>\n\t\t\t\t\t<mat-option value=\"CA\">CA</mat-option>\n\t\t\t\t\t<mat-option value=\"CO\">CO</mat-option>\n\t\t\t\t\t<mat-option value=\"CT\">CT</mat-option>\n\t\t\t\t\t<mat-option value=\"DE\">DE</mat-option>\n\t\t\t\t\t<mat-option value=\"FL\">FL</mat-option>\n\t\t\t\t\t<mat-option value=\"GA\">GA</mat-option>\n\t\t\t\t\t<mat-option value=\"HI\">HI</mat-option>\n\t\t\t\t\t<mat-option value=\"ID\">ID</mat-option>\n\t\t\t\t\t<mat-option value=\"IL\">IL</mat-option>\n\t\t\t\t\t<mat-option value=\"IN\">IN</mat-option>\n\t\t\t\t\t<mat-option value=\"IA\">IA</mat-option>\n\t\t\t\t\t<mat-option value=\"KS\">KS</mat-option>\n\t\t\t\t\t<mat-option value=\"KY\">KY</mat-option>\n\t\t\t\t\t<mat-option value=\"LA\">LA</mat-option>\n\t\t\t\t\t<mat-option value=\"ME\">ME</mat-option>\n\t\t\t\t\t<mat-option value=\"MD\">MD</mat-option>\n\t\t\t\t\t<mat-option value=\"MA\">MA</mat-option>\n\t\t\t\t\t<mat-option value=\"MI\">MI</mat-option>\n\t\t\t\t\t<mat-option value=\"MN\">MN</mat-option>\n\t\t\t\t\t<mat-option value=\"MS\">MS</mat-option>\n\t\t\t\t\t<mat-option value=\"MO\">MO</mat-option>\n\t\t\t\t\t<mat-option value=\"MT\">MT</mat-option>\n\t\t\t\t\t<mat-option value=\"NE\">NE</mat-option>\n\t\t\t\t\t<mat-option value=\"NV\">NV</mat-option>\n\t\t\t\t\t<mat-option value=\"NH\">NH</mat-option>\n\t\t\t\t\t<mat-option value=\"NJ\">NJ</mat-option>\n\t\t\t\t\t<mat-option value=\"NM\">NM</mat-option>\n\t\t\t\t\t<mat-option value=\"NY\">NY</mat-option>\n\t\t\t\t\t<mat-option value=\"NC\">NC</mat-option>\n\t\t\t\t\t<mat-option value=\"ND\">ND</mat-option>\n\t\t\t\t\t<mat-option value=\"OH\">OH</mat-option>\n\t\t\t\t\t<mat-option value=\"OK\">OK</mat-option>\n\t\t\t\t\t<mat-option value=\"OR\">OR</mat-option>\n\t\t\t\t\t<mat-option value=\"PA\">PA</mat-option>\n\t\t\t\t\t<mat-option value=\"RI\">RI</mat-option>\n\t\t\t\t\t<mat-option value=\"SC\">SC</mat-option>\n\t\t\t\t\t<mat-option value=\"SD\">SD</mat-option>\n\t\t\t\t\t<mat-option value=\"TN\">TN</mat-option>\n\t\t\t\t\t<mat-option value=\"TX\">TX</mat-option>\n\t\t\t\t\t<mat-option value=\"UT\">UT</mat-option>\n\t\t\t\t\t<mat-option value=\"VT\">VT</mat-option>\n\t\t\t\t\t<mat-option value=\"VA\">VA</mat-option>\n\t\t\t\t\t<mat-option value=\"WA\">WA</mat-option>\n\t\t\t\t\t<mat-option value=\"WV\">WV</mat-option>\n\t\t\t\t\t<mat-option value=\"WI\">WI</mat-option>\n\t\t\t\t\t<mat-option value=\"WY\">WY</mat-option>\n\t\t\t\t\t<mat-option value=\"AS\">AS</mat-option>\n\t\t\t\t\t<mat-option value=\"DC\">DC</mat-option>\n\t\t\t\t\t<mat-option value=\"FM\">FM</mat-option>\n\t\t\t\t\t<mat-option value=\"GU\">GU</mat-option>\n\t\t\t\t\t<mat-option value=\"MH\">MH</mat-option>\n\t\t\t\t\t<mat-option value=\"MP\">MP</mat-option>\n\t\t\t\t\t<mat-option value=\"PW\">PW</mat-option>\n\t\t\t\t\t<mat-option value=\"PR\">PR</mat-option>\n\t\t\t\t\t<mat-option value=\"VI\">VI</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='org' name='org' matInput #input maxlength=\"20\" placeholder=\"Organization\" required>\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input [(ngModel)]='osymbol' name='osymbol' matInput #input maxlength=\"20\" placeholder=\"Office Symbol\">\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-select [(ngModel)]='support' name='support' placeholder=\"Type of Support\" required>\n\t\t\t\t\t<mat-option value=\"option\">Photo Support</mat-option>\n\t\t\t\t\t<mat-option value=\"Photo Support\">Graphics</mat-option>\n\t\t\t\t\t<mat-option value=\"Video\">Video</mat-option>\n\t\t\t\t\t<mat-option value=\"Studio Photo\">Studio Photo</mat-option>\n\t\t\t\t\t<mat-option value=\"Other\">Other</mat-option>    \n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\n\t\t\t<br>\n\t\t\t<mat-form-field>\n\t\t\t\t<textarea [(ngModel)]='desc' name='desc' matInput #input maxlength=\"200\" placeholder=\"Description of Support\" required></textarea>\n\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/200</mat-hint>\n\t\t\t</mat-form-field>\n\t\t\t<button type=\"button\" ngclass='btn btn-primary' [disabled]='!f.valid' (click)='saveForm()' mat-raised-button>Submit</button>\n\n\t\t</form>\n</div>\n\n<!-- <div style=\"margin-left: 20%\">\n<h1>should be some shit displaying below </h1>\n<tr *ngFor='let form of serviceForms | async; let i = index' [attr.data-index]='i'>\n   <td>{{i + 1}}</td>\n   <td>{{form.fname}}</td>\n   <td>{{form.lname}}</td>\n   <td>{{form.grade}}</td>\n</tr>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pa-home/pa-home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pa-home/pa-home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"backgroud_img\">\n    <div class=\"notice\">\n    <h1>NOTICE</h1>\n    <p>\n      This system is not secured. Do not upload information considered FOR OFFICIAL USE ONLY (FOUO) or PERSONALLY IDENTIFIABLE INFORMATION (PII), which must be protected under the Freedom of Information Act (5 U.S.C. 552) and/or the Privacy Act of 1974 (5 U.S.C. 552a). Unauthorized disclosure or misuse of such information may result in disciplinary action, criminal and/or civil penalties.\n    </p>\n  </div>\n  <div class=\"patch\">\n    <img width=\"45%\" src=\"assets/188th.png\">\n  </div>\n</div> -->");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.ctorParameters = function () { return []; };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _form833_form833_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form833/form833.component */ "./src/app/form833/form833.component.ts");
/* harmony import */ var _equip_form_equip_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equip-form/equip-form.component */ "./src/app/equip-form/equip-form.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//native imports 


//my imports




var routes = [
    //my routes
    // { path: '', redirectTo: '/PA_Portal', pathMatch: 'full' },
    // { path: 'PA_Portal', component: PaHomeComponent },
    { path: 'Form_833', component: _form833_form833_component__WEBPACK_IMPORTED_MODULE_3__["Form833Component"] },
    { path: 'Equip_Form', component: _equip_form_equip_form_component__WEBPACK_IMPORTED_MODULE_4__["EquipFormComponent"] },
    { path: 'Admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-toolbar a {\n  padding-right: 5px;\n}\n.mat-toolbar a img {\n  width: 30px;\n}\n.sidenav {\n  width: 200px;\n}\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.sidenav-container {\n  height: 100%;\n}\n.sidenav {\n  width: 200px;\n}\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.splash_page {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  margin-top: 5%;\n}\n.patch {\n  position: absolute;\n  opacity: 0.5;\n}\n.notice {\n  position: absolute;\n  margin-left: 14%;\n  margin-top: 10%;\n  width: 70%;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: 5px solid red;\n}\n.notice h1 {\n  color: red;\n}\n@media only screen and (max-width: 960px) {\n  .splash_page {\n    position: absolute;\n    width: 100% !important;\n    text-align: center;\n  }\n  .splash_page .notice {\n    position: absolute;\n    margin: 0px !important;\n    padding: 0px 10px 0px 10px;\n    background-color: rgba(255, 255, 255, 0.9);\n    border: 5px solid red;\n    width: 93% !important;\n  }\n  .splash_page .notice h1 {\n    color: red;\n  }\n  .splash_page .patch {\n    display: block;\n    opacity: 1;\n    z-index: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msa0JBQUE7QUFBRjtBQUNFO0VBQ0MsV0FBQTtBQUNIO0FBT0E7RUFDRSxZQUFBO0FBSkY7QUFPQTtFQUNFLG1CQUFBO0FBSkY7QUFPQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0FBSkY7QUFPQTtFQUNFLFlBQUE7QUFKRjtBQU9BO0VBQ0UsbUJBQUE7QUFKRjtBQU9BO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBSkY7QUFPQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUpEO0FBTUM7RUFDQyxrQkFBQTtFQUNBLFlBQUE7QUFIRjtBQUtDO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtBQUZGO0FBR0U7RUFDQyxVQUFBO0FBREg7QUFPQTtFQUNDO0lBQ0Msa0JBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0VBTEE7RUFNQTtJQUNDLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLDBDQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtFQUpEO0VBS0M7SUFDQyxVQUFBO0VBSEY7RUFNQTtJQUNDLGNBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQUpEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XG5cdGF7XG5cdFx0cGFkZGluZy1yaWdodDogNXB4O1xuXHRcdGltZ3tcblx0XHRcdHdpZHRoOiAzMHB4XG5cdFx0fVxuXHR9XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLnNwbGFzaF9wYWdle1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi10b3A6IDUlO1xuXHRcdH1cblx0LnBhdGNoe1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRvcGFjaXR5OiAwLjU7XG5cdH1cblx0Lm5vdGljZXtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bWFyZ2luLWxlZnQ6IDE0JTtcblx0XHRtYXJnaW4tdG9wOiAxMCU7XG5cdFx0d2lkdGg6IDcwJTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpO1xuXHRcdGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcblx0XHRoMXtcblx0XHRcdGNvbG9yOiByZWRcblx0XHR9XG5cdFx0cHtcblx0XHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcblx0LnNwbGFzaF9wYWdle1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQubm90aWNle1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcblx0XHRcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMC45KTtcblx0XHRcdGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcblx0XHRcdHdpZHRoOiA5MyUgIWltcG9ydGFudDtcblx0XHRcdGgxe1xuXHRcdFx0XHRjb2xvcjogcmVkXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5wYXRjaHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdHotaW5kZXg6IDA7XG5cdFx0XHR9XG5cdFx0fVx0XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//Native imports

//My Imports




var AppComponent = /** @class */ (function () {
    // private router: Router;
    function AppComponent(breakpointObserver, router, db) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.title = 'portal-pa';
        //My adds
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.items = db.collection('items').valueChanges();
        this.router = router;
    }
    ;
    AppComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.js":
/*!*******************************!*\
  !*** ./src/app/app.config.js ***!
  \*******************************/
/*! exports provided: formConfig, equipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formConfig", function() { return formConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equipConfig", function() { return equipConfig; });
var formConfig = {
  collection_endpoint: 'Form_833'
};
var equipConfig = {
  collection_endpoint: 'Equip_Form'
};

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _form833_form833_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form833/form833.component */ "./src/app/form833/form833.component.ts");
/* harmony import */ var _equip_form_equip_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./equip-form/equip-form.component */ "./src/app/equip-form/equip-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _pa_home_pa_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pa-home/pa-home.component */ "./src/app/pa-home/pa-home.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// native imports






// my imports











// import { form833 } from './app.model';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _equip_form_equip_form_component__WEBPACK_IMPORTED_MODULE_11__["EquipFormComponent"],
                _pa_home_pa_home_component__WEBPACK_IMPORTED_MODULE_14__["PaHomeComponent"],
                _form833_form833_component__WEBPACK_IMPORTED_MODULE_10__["Form833Component"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                // my imports
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_13__["MyMaterialModule"],
            ],
            exports: [
                // My exports
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _form833_form833_component__WEBPACK_IMPORTED_MODULE_10__["Form833Component"],
            ],
            providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestore"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(db) {
        this.db = db;
        // Get the Form_833 collection
        this.serviceForms = db.collection(_app_config__WEBPACK_IMPORTED_MODULE_1__["formConfig"].collection_endpoint);
        this.equipmentForms = db.collection(_app_config__WEBPACK_IMPORTED_MODULE_1__["equipConfig"].collection_endpoint);
    }
    AppService.prototype.addForm833 = function (form) {
        // Add the new Form_833 to the collection
        this.serviceForms.add(form);
    }; // addForm_833
    AppService.prototype.updateForm833 = function (id, update) {
        // Get the Form_833 document
        this.serviceDoc = this.db.doc(_app_config__WEBPACK_IMPORTED_MODULE_1__["formConfig"].collection_endpoint + "/" + id);
        this.serviceDoc.update(update);
    }; // updateForm_833
    AppService.prototype.deleteForm833 = function (id) {
        // Get the Form_833 document
        this.serviceDoc = this.db.doc(_app_config__WEBPACK_IMPORTED_MODULE_1__["formConfig"].collection_endpoint + "/" + id);
        // Delete the document
        this.serviceDoc.delete();
    }; // deleteTask
    AppService.prototype.addEquipForm = function (form) {
        // Add the new Form_833 to the collection
        this.equipmentForms.add(form);
    }; // addForm_833
    AppService.prototype.updateEquipForm = function (id, update) {
        // Get the Form_833 document
        this.equipmentDoc = this.db.doc(_app_config__WEBPACK_IMPORTED_MODULE_1__["equipConfig"].collection_endpoint + "/" + id);
        this.equipmentDoc.update(update);
    }; // updateForm_833
    AppService.prototype.deleteEquipForm = function (id) {
        // Get the Form_833 document
        this.equipmentDoc = this.db.doc(_app_config__WEBPACK_IMPORTED_MODULE_1__["equipConfig"].collection_endpoint + "/" + id);
        // Delete the document
        this.equipmentDoc.delete();
    }; // deleteTask
    AppService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/equip-form/equip-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/equip-form/equip-form.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n.form-container {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.form-container .form-wrap {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding: 0;\n  z-index: 1;\n  margin: 0 0 5% 24%;\n}\n\n.footer {\n  text-align: center;\n  width: 100%;\n  margin-top: 100px;\n}\n\n@media only screen and (max-width: 960px) {\n  .form-container {\n    width: 90%;\n    padding: 0;\n    text-align: center !important;\n  }\n\n  .form-wrap {\n    width: 100% !important;\n    margin: 0px !important;\n    margin-left: 5% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1aXAtZm9ybS9lcXVpcC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUFFO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFFTjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsNkJBQUE7RUFDRjs7RUFDRTtJQUNFLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtFQUVKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lcXVpcC1mb3JtL2VxdWlwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0tY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICAuZm9ybS13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgbWFyZ2luOiAwIDAgNSUgMjQlO1xuICB9XG59XG5cbi5mb290ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KXtcbiAgLmZvcm0tY29udGFpbmVye1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9ICAgXG4gICAgLmZvcm0td3JhcCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi8vIC5mb3JtLWNvbnRhaW5lciA+ICoge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH0iXX0= */");

/***/ }),

/***/ "./src/app/equip-form/equip-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/equip-form/equip-form.component.ts ***!
  \****************************************************/
/*! exports provided: EquipFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipFormComponent", function() { return EquipFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var EquipFormComponent = /** @class */ (function () {
    function EquipFormComponent(db, equipFormService, router) {
        this.db = db;
        this.equipFormService = equipFormService;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.editMode = false;
        this.formToEdit = {};
    }
    EquipFormComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    EquipFormComponent.prototype.ngOnInit = function () {
        this.equipmentForms = this.db.collection(_app_config__WEBPACK_IMPORTED_MODULE_4__["equipConfig"].collection_endpoint).valueChanges();
        this.equipmentForms = this.db
            .collection(_app_config__WEBPACK_IMPORTED_MODULE_4__["equipConfig"].collection_endpoint)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the lname to the document data
                return __assign({ id: id }, data);
            });
        }));
    };
    EquipFormComponent.prototype.edit = function (form) {
        console.log(form);
        //Set formToEdit and editMode
        this.formToEdit = form;
        this.editMode = true;
        //Set form value
        this.fname = form.fname;
    }; //edit
    EquipFormComponent.prototype.saveForm = function () {
        if (this.date, this.desc, this.emails, this.fname, this.grade, this.lname, this.org, this.osymbol, this.phone, this.equip !== null) {
            //Get the input value
            var form = {
                desc: this.desc,
                date: this.date,
                emails: this.emails,
                fname: this.fname,
                grade: this.grade,
                lname: this.lname,
                org: this.org,
                osymbol: this.osymbol,
                phone: this.phone,
                equip: this.equip,
            };
            if (!this.editMode) {
                console.log(form);
                this.equipFormService.addEquipForm(form);
            }
            else {
                //Get the form id
                var formID = this.formToEdit.id;
                //update the task
                this.equipFormService.updateEquipForm(formID, form);
            }
            //set edit mode to false and clear form
            this.editMode = false;
            this.desc = '';
            this.date = '';
            this.emails = '';
            this.fname = '';
            this.grade = '';
            this.lname = '';
            this.org = '';
            this.osymbol = '';
            this.equip = '';
            this.router.navigateByUrl('/PA_Portal');
        }
    }; //saveTask
    EquipFormComponent.prototype.deleteTask = function (form) {
        //Get the task lname
        var formId = form.id;
        //delete the task
        this.equipFormService.deleteEquipForm(formId);
    }; //deleteTask
    EquipFormComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    EquipFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equip-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./equip-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/equip-form/equip-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./equip-form.component.scss */ "./src/app/equip-form/equip-form.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EquipFormComponent);
    return EquipFormComponent;
}());



/***/ }),

/***/ "./src/app/form833/form833.component.scss":
/*!************************************************!*\
  !*** ./src/app/form833/form833.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n}\n\n.form-container {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 4%;\n}\n\n.form-container .form-wrap {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding: 0;\n  z-index: 1;\n  margin: 0 0 5% 24%;\n}\n\n.footer {\n  text-align: center;\n  width: 100%;\n  margin-top: 100px;\n}\n\n@media only screen and (max-width: 960px) {\n  .form-container {\n    width: 90%;\n    padding: 0;\n    text-align: center !important;\n  }\n\n  .form-wrap {\n    width: 100% !important;\n    margin: 0px !important;\n    margin-left: 5% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybTgzMy9mb3JtODMzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQUU7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUVOOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7SUFDQSw2QkFBQTtFQUNGOztFQUNFO0lBQ0Usc0JBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm04MzMvZm9ybTgzMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICAuZm9ybS13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgbWFyZ2luOiAwIDAgNSUgMjQlO1xuICB9XG59XG5cbi5mb290ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KXtcbiAgLmZvcm0tY29udGFpbmVye1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9ICAgXG4gICAgLmZvcm0td3JhcCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi8vIC5mb3JtLWNvbnRhaW5lciA+ICoge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH0iXX0= */");

/***/ }),

/***/ "./src/app/form833/form833.component.ts":
/*!**********************************************!*\
  !*** ./src/app/form833/form833.component.ts ***!
  \**********************************************/
/*! exports provided: Form833Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form833Component", function() { return Form833Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var Form833Component = /** @class */ (function () {
    function Form833Component(db, form833Service, router) {
        this.db = db;
        this.form833Service = form833Service;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.editMode = false;
        this.formToEdit = {};
    }
    Form833Component.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    Form833Component.prototype.ngOnInit = function () {
        this.serviceForms = this.db.collection(_app_config__WEBPACK_IMPORTED_MODULE_4__["formConfig"].collection_endpoint).valueChanges();
        this.serviceForms = this.db
            .collection(_app_config__WEBPACK_IMPORTED_MODULE_4__["formConfig"].collection_endpoint)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the lname to the document data
                return __assign({ id: id }, data);
            });
        }));
    };
    Form833Component.prototype.edit = function (form) {
        console.log(form);
        //Set formToEdit and editMode
        this.formToEdit = form;
        this.editMode = true;
        //Set form value
        this.fname = form.fname;
    }; //edit
    Form833Component.prototype.saveForm = function () {
        if (this.date, this.desc, this.emails, this.fname, this.grade, this.lname, this.org, this.osymbol, this.phone, this.support !== null) {
            //Get the input value
            var form = {
                desc: this.desc,
                date: this.date,
                emails: this.emails,
                fname: this.fname,
                grade: this.grade,
                lname: this.lname,
                org: this.org,
                osymbol: this.osymbol,
                phone: this.phone,
                support: this.support,
            };
            if (!this.editMode) {
                console.log(form);
                this.form833Service.addForm833(form);
            }
            else {
                //Get the form id
                var formID = this.formToEdit.id;
                //update the task
                this.form833Service.updateForm833(formID, form);
            }
            //set edit mode to false and clear form
            this.editMode = false;
            this.desc = '';
            this.date = '';
            this.emails = '';
            this.fname = '';
            this.grade = '';
            this.lname = '';
            this.org = '';
            this.osymbol = '';
            this.support = '';
            this.router.navigateByUrl('/PA_Portal');
        }
    }; //saveTask
    Form833Component.prototype.deleteTask = function (form) {
        //Get the task lname
        var formId = form.id;
        //delete the task
        this.form833Service.deleteForm833(formId);
    }; //deleteTask
    Form833Component.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    Form833Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form833',
            template: __importDefault(__webpack_require__(/*! raw-loader!./form833.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form833/form833.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./form833.component.scss */ "./src/app/form833/form833.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], Form833Component);
    return Form833Component;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function() { return MyMaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MyMaterialModule = /** @class */ (function () {
    function MyMaterialModule() {
    }
    MyMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MyMaterialModule);
    return MyMaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/pa-home/pa-home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pa-home/pa-home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhLWhvbWUvcGEtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pa-home/pa-home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pa-home/pa-home.component.ts ***!
  \**********************************************/
/*! exports provided: PaHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaHomeComponent", function() { return PaHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PaHomeComponent = /** @class */ (function () {
    function PaHomeComponent() {
    }
    PaHomeComponent.prototype.ngOnInit = function () {
    };
    PaHomeComponent.ctorParameters = function () { return []; };
    PaHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pa-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pa-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pa-home/pa-home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pa-home.component.scss */ "./src/app/pa-home/pa-home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PaHomeComponent);
    return PaHomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyApjdNsx_V4AQgWeRxiZTnhUoC_v0dwHNA",
        authDomain: "pa-portal.firebaseapp.com",
        databaseURL: "https://pa-portal.firebaseio.com",
        projectId: "pa-portal-d171a",
        storageBucket: "pa-portal.appspot.com",
        messagingSenderId: "877270573995"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/condit/projects/portal-pa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map