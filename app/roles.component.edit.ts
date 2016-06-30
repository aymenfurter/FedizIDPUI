import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Role }    from './role';
import { Router, ActivatedRoute }       from '@angular/router';
import { RolesService } from './roles-service';

@Component({
  	selector: 'edit-form',
	templateUrl: 'app/templates/roles.component.template.edit.html',
	providers: [RolesService]
})
export class RoleEditComponent {  	
	model = new Role("", "");
	createEntry = false;
	submitted = false; 	
  	private sub: any;

	constructor(private route: ActivatedRoute, private router: Router, private service: RolesService) {

	}

 	ngOnInit() {
	    this.sub = this.route.params.subscribe(params => {
	       let id = decodeURIComponent(params['id']);

	       if (id != "undefined") {
		       this.service.find(id).subscribe(
	            	data => this.model = data
	        	);
	       	} else {
	       		this.createEntry = true;	       		
	       	}
	     });
  	}

  	onPersist() {  		
  		this.submitted = true;  		
  	
  		if (!this.createEntry) {
	  		this.service.persist(this.model).subscribe(
	  			this.router.navigate(['/roles'])
	        );
        } else {
        	this.service.create(this.model).subscribe(
	  			this.router.navigate(['/roles'])
	        );
        }

  	}

	onSubmit() { this.submitted = true; }  
	get diagnostic() { return JSON.stringify(this.model); }
}