var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// native imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// my imports
import { CommonModule } from '@angular/common';
import { PaHomeComponent } from './pa-home/pa-home.component';
import { Form833Component } from './form833/form833.component';
import { EquipFormComponent } from './equip-form/equip-form.component';
var routes = [
    // my routes
    // { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'PA_Home', component: PaHomeComponent },
    { path: 'Form_833', component: Form833Component },
    { path: 'Equip_Form', component: EquipFormComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes),
                CommonModule
            ],
            declarations: [],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map