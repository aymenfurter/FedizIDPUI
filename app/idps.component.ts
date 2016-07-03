import {Component} from '@angular/core';
import {IDPsService} from './idps-service';
import {IDP} from './idp';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector: 'idps',  
    templateUrl: 'app/templates/idps.component.template.list.html' ,    
    providers: [IDPsService],
    directives: [ROUTER_DIRECTIVES]
})
export class IdpsComponent {
    private entries: IDP;    

    constructor(private service:IDPsService, private router: Router) {        

    } 
 
    ngOnInit() {
        this.service.findAll().subscribe(
            data => this.entries = data.idps
        );
    }    

    onSelect(idp: IDP) {
        this.router.navigate(['/idp', encodeURIComponent(idp.realm)]);
    }
  
    onRemove(idp: IDP) {
        this.service.remove(idp).subscribe(
              this.service.findAll().subscribe(
                    data => this.entries = data.idps
              )
        );
    }      

    onCreate() {
        this.router.navigate(['/create-idp']);
    }
 
}