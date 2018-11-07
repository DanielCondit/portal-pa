//native imports 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//my imports
import { CommonModule } from '@angular/common';
import { PortalNavComponent }      from './portal-nav/portal-nav.component';
import { Form833Component }      from './form833/form833.component';
import { EquipFormComponent }      from './equip-form/equip-form.component';

const routes: Routes = [
	//my routes
	{ path: 'PA_Portal', component: PortalNavComponent },
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
export class AppRoutingModule { }
