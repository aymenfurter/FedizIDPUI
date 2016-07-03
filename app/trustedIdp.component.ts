import {Component} from '@angular/core';
import {TrustedIdpsService} from './trustedIdps-service';
import {TrustedIdp} from './trustedIdp';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector: 'trustedIdps',  
    templateUrl: 'app/templates/trustedIdps.component.template.list.html' ,    
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
        this.service.remove(trustedIdp).subscribe(
              this.service.findAll().subscribe(
                    data => this.entries = data.trustedIDPs
              )
        );
    }      

    onCreate() {
        this.router.navigate(['/create-trustedIdp']);
    }
 
}