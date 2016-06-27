import {Component} from '@angular/core';

import {ClaimsComponent} from './claims.component';
import {ClaimEditComponent} from './claims.component.edit';

import {ApplicationsComponent} from './applications.component';
import {ApplicationEditComponent} from './applications.component.edit';

import {DashboardComponent} from './dashboard.component';
import {NavigationComponent} from './navigation.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'init-app',
    templateUrl: 'app/templates/app.component.template.html' ,        
	directives: [DashboardComponent, ROUTER_DIRECTIVES, NavigationComponent, ClaimEditComponent, ApplicationEditComponent]
})
export class AppComponent { }
