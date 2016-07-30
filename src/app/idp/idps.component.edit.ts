import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { IDP }    from './idp';
import { Router, ActivatedRoute }       from '@angular/router';
import { IDPsService } from './idps-service';

@Component({
  	selector: 'edit-form',
	templateUrl: 'app/idp/idps.component.template.edit.html',
	providers: [IDPsService]
})
export class IDPEditComponent {  	
	model = new IDP("", "", "", "", "", "", "", "", "", "", "", "", []);

	createEntry = false;
	submitted = false; 	
  	private sub: any;

	constructor(private route: ActivatedRoute, private router: Router, private service: IDPsService) {

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
	  		this.service.persist(this.model)
	  			.toPromise()
	    	    .then(() => this.navigateToListView())
	            .catch(() => this.navigateToListView());  // TODO: Handle Server Errors
        } else {
        	this.service.create(this.model)
	  			.toPromise()
	    	    .then(() => this.navigateToListView())
	            .catch(() => this.navigateToListView());  // TODO: Handle Server Errors
        }
  	}

  	navigateToListView() {
		this.router.navigate(['/idps'])
  	}

	onSubmit() { this.submitted = true; }  
	get diagnostic() { return JSON.stringify(this.model); }
}