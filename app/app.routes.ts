import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { ClaimsComponent } from './claims.component';
import { ClaimEditComponent } from './claims.component.edit';

import { ApplicationsComponent } from './applications.component';
import { ApplicationEditComponent } from './applications.component.edit';

import { RolesComponent } from './roles.component';
import { RoleEditComponent } from './roles.component.edit';

import { TrustedIdpsComponent } from './trustedIdp.component';
import { TrustedIdpEditComponent } from './trustedIdps.component.edit';

import { IdpsComponent } from './idps.component';
import { IDPEditComponent } from './idps.component.edit';


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
	{ path: 'trustedIdps', component: TrustedIdpsComponent },  
	{ path: 'trustedIdp/:id', component: TrustedIdpEditComponent },  
	{ path: 'create-trustedIdp', component: TrustedIdpEditComponent},


	/* Trusted IDPs */
	{ path: 'idps', component: IdpsComponent },  
	{ path: 'idp/:id', component: IDPEditComponent },  
	{ path: 'create-idp', component: IDPEditComponent},

	/* Roles */
	{ path: 'roles', component: RolesComponent },  
	{ path: 'role/:id', component: RoleEditComponent },  
	{ path: 'create-role', component: RoleEditComponent },


	/* General */
	{ path: 'dashboard', component: DashboardComponent },  
	{ path: '', component: DashboardComponent }, 
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];