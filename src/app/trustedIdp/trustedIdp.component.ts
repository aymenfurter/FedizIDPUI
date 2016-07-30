import {Component} from '@angular/core';
import {TrustedIdpsService} from './trustedIdps-service';
import {TrustedIdp} from './trustedIdp';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'trustedIdps',  
    templateUrl: 'trustedIdps.component.template.list.html' ,    
    providers: [TrustedIdpsService],
    directives: [ROUTER_DIRECTIVES]
})
export class TrustedIdpsComponent {
    private entries: TrustedIdp;    

    constructor(private service:TrustedIdpsService, private router: Router) {        

    } 
 
    ngOnInit() {
        this.service.findAll().subscribe(
            data => this.entries = data.trustedIDPs
        );
    }    

    onSelect(trustedIdp: TrustedIdp) {
        this.router.navigate(['/trustedIdp', encodeURIComponent(trustedIdp.realm)]);
    }
  
    onRemove(trustedIdp: TrustedIdp) {
        this.service.remove(trustedIdp)
            .toPromise()
            .then(() => this.ngOnInit())
            .catch(() => this.ngOnInit());  
    }      

    onCreate() {
        this.router.navigate(['/create-trustedIdp']);
    }
 
}