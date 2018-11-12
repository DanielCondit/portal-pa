//native imports 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//my imports
import { CommonModule } from '@angular/common';
import { PaHomeComponent }      from './pa-home/pa-home.component';
import { Form833Component }      from './form833/form833.component';
import { EquipFormComponent }      from './equip-form/equip-form.component';
import { AdminComponent }      from './admin/admin.component';

const routes: Routes = [
	//my routes
  // { path: '', redirectTo: '/PA_Portal', pathMatch: 'full' },
  { path: 'PA_Portal', component: PaHomeComponent },
	{ path: 'Form_833', component: Form833Component },
	{ path: 'Equip_Form', component: EquipFormComponent },
  { path: 'Admin', component: AdminComponent },
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
  	CommonModule
  	],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
