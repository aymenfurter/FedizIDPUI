import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Claim }    from './claim';
import { Router, ActivatedRoute }       from '@angular/router';
import { ClaimsService } from './claims-service';
import { NgForm }    from '@angular/common';
import { ChangeDetectionStrategy, Input } from "@angular/core";
import { PaginatePipe, PaginationControlsCmp } from '../node_modules/ng2-pagination';

@Component({
  	selector: 'claim-form',
	templateUrl: 'app/templates/claims.component.template.edit.html',
	providers: [ClaimsService],
	directives: [PaginationControlsCmp],
    pipes: [PaginatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClaimEditComponent {  	
	model = new Claim("", "", "");
	createEntry = false;
	submitted = false;
 	
  	private sub: any;


	constructor(private route: ActivatedRoute, private router: Router, private service: ClaimsService) {

	}

 	ngOnInit() {
	    this.sub = this.route.params.subscribe(params => {
	       let id = decodeURIComponent(params['id']);

	       if (id != "undefined") {
		       this.service.find(id).subscribe(
	            	claim => this.model = claim
	        	);
	       	} else {
	       		this.createEntry = true;	       		
	       	}
	     });
  	}

  	onPersist() {  		
  		this.submitted = true;  		
  	
  		// Maybe it would be better to have such logic in the Service; Since this would result in an additional request we leave it here for now.
  		if (!this.createEntry) {
	  		this.service.persist(this.model).subscribe(
	  			this.router.navigate(['/claims'])
	        );
        } else {
        	this.service.create(this.model).subscribe(
	  			this.router.navigate(['/claims'])
	        );
        }

  	}


	onSubmit() { this.submitted = true; }  
	get diagnostic() { return JSON.stringify(this.model); }
}