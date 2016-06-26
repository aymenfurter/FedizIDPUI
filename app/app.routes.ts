import { provideRouter, RouterConfig } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ClaimsComponent} from './claims.component';
import {ClaimEditComponent} from './claims.component.edit';


export const routes: RouterConfig = [
  { path: 'claims', component: ClaimsComponent },  
  { path: 'claim/:id', component: ClaimEditComponent },  
  { path: 'create-claim', component: ClaimEditComponent}, 
  { path: 'dashboard', component: DashboardComponent },  
  { path: '', component: DashboardComponent },  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];