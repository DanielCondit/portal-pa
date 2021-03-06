// native imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// my imports
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule
} from '@angular/material';
import { Form833Component } from './form833/form833.component';
import { EquipFormComponent } from './equip-form/equip-form.component';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from './material-module';
import { PaHomeComponent } from './pa-home/pa-home.component';
import { AngularFirestore} from '@angular/fire/firestore';
import { AdminComponent } from './admin/admin.component';
// import { form833 } from './app.model';


@NgModule({
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
  providers: [AngularFirestore,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }
