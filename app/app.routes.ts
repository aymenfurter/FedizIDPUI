import { provideRouter, RouterConfig } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ClaimsComponent} from './claims.component';


export const routes: RouterConfig = [
  { path: 'claims', component: ClaimsComponent },  
  { path: 'dashboard', component: DashboardComponent },  
  { path: '', component: DashboardComponent },  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];