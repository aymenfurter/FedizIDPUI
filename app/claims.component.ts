import {Component} from '@angular/core';
import {ClaimsService} from './claims-service';
import {Claim} from './claim';


@Component({
    selector: 'claims',  
    templateUrl: 'app/templates/claims.component.template.list.html' ,    
    providers: [ClaimsService],
})
export class ClaimsComponent {
    private entries: Claim;
 
    constructor(private claimsService:ClaimsService) {        
    }
 
    ngOnInit() {
        this.claimsService.findAll().subscribe(
            data => this.entries = data.claims
        );
    }    
 
}