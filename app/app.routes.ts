import { provideRouter, RouterConfig } from '@angular/router';
import {DashboardComponent} from './dashboard.component';

import { ClaimsComponent } from './claims.component';
import { ClaimEditComponent } from './claims.component.edit';

import { ApplicationsComponent } from './applications.component';
import { ApplicationEditComponent } from './applications.component.edit';

import { RolesComponent } from './roles.component';
import { RoleEditComponent } from './roles.component.edit';


export const routes: RouterConfig = [
  
  	/* Claims */
	{ path: 'claims', component: ClaimsComponent },  
	{ path: 'claim/:id', component: ClaimEditComponent },  
	{ path: 'create-claim', component: ClaimEditComponent},

	/* Applications */
	{ path: 'applications', component: ApplicationsComponent },  
	{ path: 'application/:id', component: ApplicationEditComponent },  
	{ path: 'create-application', component: ApplicationEditComponent},

	/* IDPs */

	/* Trusted IDPs */

	/* Roles */
	{ path: 'roles', component: RolesComponent },  
	{ path: 'role/:id', component: RoleEditComponent },  
	{ path: 'create-role', component: RoleEditComponent },



	{ path: 'dashboard', component: DashboardComponent },  
	{ path: '', component: DashboardComponent },  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];