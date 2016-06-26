import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ClaimsComponent} from './claims.component';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'main-nav',  
    templateUrl: 'app/templates/navigation.component.template.html' ,  
    directives: [ROUTER_DIRECTIVES]      
})
export class NavigationComponent {
    
    ngOnInit() {
        
    }    
 
}