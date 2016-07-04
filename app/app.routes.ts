import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { ClaimsComponent } from './claims.component';
import { ClaimEditComponent } from './claims.component.edit';

import { ApplicationsComponent } from './applications.component';
import { ApplicationEditComponent } from './applications.component.edit';
import { ApplicationMapClaimsComponent } from './applications.component.mapClaims';

import { RolesComponent } from './roles.component';
import { RoleEditComponent } from './roles.component.edit';

import { TrustedIdpsComponent } from './trustedIdp.component';
import { TrustedIdpEditComponent } from './trustedIdps.component.edit';

import { IdpsComponent } from './idps.component';
import { IDPEditComponent } from './idps.component.edit';
import { IdpMapClaimsComponent } from './idps.component.mapClaims';
import { IdpMapApplicationsComponent } from './idps.component.mapApplications';
import { IdpMapTrustedIdpComponent } from './idps.component.mapTrustedIdps';


export const routes: RouterConfig = [  
  	/* Claims */
	{ path: 'claims', component: ClaimsComponent },  
	{ path: 'claim/:id', component: ClaimEditComponent },  
	{ path: 'create-claim', component: ClaimEditComponent},

	/* Applications */
	{ path: 'applications', component: ApplicationsComponent },  
	{ path: 'application/:id', component: ApplicationEditComponent },  
	{ path: 'claims2application/:id', component: ApplicationMapClaimsComponent },  	
	{ path: 'create-application', component: ApplicationEditComponent},

	/* Trusted IDPs */
	{ path: 'trustedIdps', component: TrustedIdpsComponent },  
	{ path: 'trustedIdp/:id', component: TrustedIdpEditComponent },  	
	{ path: 'create-trustedIdp', component: TrustedIdpEditComponent},

	/* IDPs */
	{ path: 'idps', component: IdpsComponent },  
	{ path: 'idp/:id', component: IDPEditComponent },  
	{ path: 'claims2idp/:id', component: IdpMapClaimsComponent },  	
	{ path: 'applications2idp/:id', component: IdpMapApplicationsComponent },  		
	{ path: 'trustedIdps2idp/:id', component: IdpMapTrustedIdpComponent },  		
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