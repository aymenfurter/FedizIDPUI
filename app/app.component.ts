import {Component} from '@angular/core';
import {ClaimsComponent} from './claims.component';
import {DashboardComponent} from './dashboard.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'init-app',
    template: `<div class="row">                    
    			<router-outlet></router-outlet>
              </div>`,
	directives: [DashboardComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }
