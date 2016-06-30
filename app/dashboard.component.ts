import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ApplicationsService} from './applications-service';
import {ClaimsService} from './claims-service';
import {RolesService} from './roles-service';

@Component({
    selector: 'dashboard',    
    templateUrl: 'app/templates/dashboard.component.template.html',    
    providers: [ClaimsService, ApplicationsService, RolesService],
    directives: [ROUTER_DIRECTIVES]
})
export class DashboardComponent {
    private sizeClaims;
    private sizeApps;
    private sizeRoles;

    constructor(private claimsService:ClaimsService, private applicationsService:ApplicationsService, private rolesService:RolesService) {

    }

    ngOnInit() {
        this.claimsService.findAll().subscribe(
            data => this.sizeClaims = data.claims.length
        );    

        this.applicationsService.findAll().subscribe(
            data => this.sizeApps = data.applications.length
        );    

        this.rolesService.findAll().subscribe(
            data => this.sizeRoles = data.roles.length
        );    
    }    
}