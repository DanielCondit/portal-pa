// native imports
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, ActivatedRoute, RouterOutlet} from '@angular/router';

// my imports
import { CommonModule } from '@angular/common';
import { PaHomeComponent } from './pa-home/pa-home.component';
import { Form833Component } from './form833/form833.component';
import { EquipFormComponent } from './equip-form/equip-form.component';
import { Component, OnInit } from 'node_modules/@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
// my routes
 { path: 'PA_Home', component: PaHomeComponent },
 { path: 'Form_833', component: Form833Component },
 { path: 'Equip_Form', component: EquipFormComponent }
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes),
   CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {}
