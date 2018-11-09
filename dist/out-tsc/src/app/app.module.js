var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// native imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// my imports
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatListModule } from '@angular/material';
import { Form833Component } from './form833/form833.component';
import { EquipFormComponent } from './equip-form/equip-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from './material-module';
import { PaHomeComponent } from './pa-home/pa-home.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminComponent } from './admin/admin.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                EquipFormComponent,
                PaHomeComponent,
                Form833Component,
                AdminComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                // my imports
                AngularFireModule.initializeApp(environment.firebase),
                LayoutModule,
                MatToolbarModule,
                MatButtonModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                MatFormFieldModule,
                MatInputModule,
                MatRippleModule,
                FormsModule,
                ReactiveFormsModule,
                MyMaterialModule,
            ],
            exports: [
                // My exports
                LayoutModule,
                MatToolbarModule,
                MatButtonModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                MatFormFieldModule,
                MatInputModule,
                MatRippleModule,
                FormsModule,
                ReactiveFormsModule,
                Form833Component,
            ],
            providers: [AngularFirestore],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=app.module.js.map