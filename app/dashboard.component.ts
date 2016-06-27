import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'dashboard',    
    template: `        
        <div class="col-lg-12">
            <h1 class="page-header">Welcome</h1>           
        </div>
        <div class="content">
            Welcome to the Fediz IDP Administration UI. Later on, we will show some fance statistics here!
            <a [routerLink]="['/claims']"><i class="fa fa-fw"></i> Go to Roles</a>
        </div>`,    
        directives: [ROUTER_DIRECTIVES]
})
export class DashboardComponent {
    
}