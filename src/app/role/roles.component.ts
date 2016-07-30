import {Component} from '@angular/core';
import {RolesService} from './../role/roles-service';
import {Role} from './../role/role';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector: 'roles',  
    templateUrl: 'app/role/roles.component.template.list.html' ,    
    providers: [RolesService],
    directives: [ROUTER_DIRECTIVES]
})
export class RolesComponent {
    private entries: Role;    

    constructor(private service:RolesService, private router: Router) {        
        console.log("meow");
    } 
 
    ngOnInit() {
        this.service.findAll().subscribe(
            data => this.entries = data.roles
        );
    }    

    onSelect(role: Role) {
        this.router.navigate(['/role', encodeURIComponent(role.name)]);
    }
  
    onRemove(role: Role) {
        this.service.remove(role)        
            .toPromise()
            .then(() => this.ngOnInit())
            .catch(() => this.ngOnInit());            
    }      

    onCreate() {
        this.router.navigate(['/create-role']);
    }
 
}