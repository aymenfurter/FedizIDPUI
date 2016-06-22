import {Component} from '@angular/core';
import {ClaimsService} from './claims-service';
import {Claim} from './claim';


@Component({
    selector: 'claims',    
    template: `        
        <div class="col-lg-12">
            <h1 class="page-header">Claims</h1>
        </div>
        <div class="content">
            <ul class="contacts">
                <li *ngFor="#entry of entries" (click)="onSelect(contact)" [class.selected]="contact === selectedContact">
                    {{entry.claimType}}
                </li>
            </ul>            
        </div>`,
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