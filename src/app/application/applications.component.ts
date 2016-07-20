import {Component} from '@angular/core';
import {ApplicationsService} from './applications-service';
import {Application} from './application';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector: 'applications',  
    templateUrl: 'app/application/applications.component.template.list.html' ,    
    providers: [ApplicationsService],
    directives: [ROUTER_DIRECTIVES]
})
export class ApplicationsComponent {
    private entries: Application;    

    constructor(private service:ApplicationsService, private router: Router) {        

    } 

    onMapClaims (application:Application) {
        this.router.navigate(['/claims2application', encodeURIComponent(application.realm)]);
    }
 
    ngOnInit() {
        this.service.findAll().subscribe(
            data => this.entries = data.applications
        );
    }    

    onSelect(application: Application) {
        this.router.navigate(['/application', encodeURIComponent(application.realm)]);
    }
  
    onRemove(application: Application) {
        this.service.remove(application).subscribe(
              this.service.findAll().subscribe(
                    data => this.entries = data.applications
              )
        );
    }      

    onCreate() {
        this.router.navigate(['/create-application']);
    }
 
}