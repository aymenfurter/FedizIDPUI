import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { TrustedIdp }    from './trustedIdp';
import { Router, ActivatedRoute }       from '@angular/router';
import { TrustedIdpsService } from './trustedIdps-service';

@Component({
  	selector: 'edit-form',
	templateUrl: 'app/trustedIdp/trustedIdps.component.template.edit.html',
	providers: [TrustedIdpsService]
})
export class TrustedIdpEditComponent {  	
	model = new TrustedIdp("", "", "", "", "", "", "", "", true);
	createEntry = false;
	submitted = false; 	
  	private sub: any;

	constructor(private route: ActivatedRoute, private router: Router, private service: TrustedIdpsService) {

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
	  			this.router.navigate(['/trustedIdps'])
	        );
        } else {
        	this.service.create(this.model).subscribe(
	  			this.router.navigate(['/trustedIdps'])
	        );
        }

  	}

	onSubmit() { this.submitted = true; }  
	get diagnostic() { return JSON.stringify(this.model); }
}