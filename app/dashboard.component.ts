import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ApplicationsService} from './applications-service';
import {ClaimsService} from './claims-service';

@Component({
    selector: 'dashboard',    
    templateUrl: 'app/templates/dashboard.component.template.html',    
    providers: [ClaimsService, ApplicationsService],
    directives: [ROUTER_DIRECTIVES]
})
export class DashboardComponent {
    private sizeClaims;
    private sizeApps;

    constructor(private claimsService:ClaimsService, private applicationsService:ApplicationsService) {

    }

    ngOnInit() {
        this.claimsService.findAll().subscribe(
            data => this.sizeClaims = data.claims.length
        );    
        this.applicationsService.findAll().subscribe(
            data => this.sizeApps = data.applications.length
        );    
    }    
}