import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { IDP }    from './idp';
import { Claim }    from './../claim/claim';
import { Router, ActivatedRoute }       from '@angular/router';
import { IDPsService } from './idps-service';
import { ClaimsService } from './../claim/claims-service';

@Component({
  	selector: 'idpmapform',
	templateUrl: 'app/idp/idps.component.template.mapClaims.html',
	providers: [IDPsService, ClaimsService]
})
export class IdpMapClaimsComponent {  		
	private claims: Claim[];
	private chosenClaimType: string;
	private claimIsOptional: boolean;
  	private sub: any;
  	model = new IDP("", "", "", "", "", "", "", "", "", "", "", "", []);

	constructor(private route: ActivatedRoute, private router: Router, private service: IDPsService, private claimsService: ClaimsService) {
	}

 	ngOnInit() {
 		this.claimsService.findAll().subscribe(
            data => this.claims = data.claims
        );

	    this.sub = this.route.params.subscribe(params => {
	       let id = decodeURIComponent(params['id']);

	       if (id != "undefined") {
		       this.service.find(id).subscribe(
	            	data => this.model = data
	        	);
	       	} 
	     });
  	}

  	onUnmap(entry, model) {
  		this.service.removeClaimMapping(model, entry.claimType).subscribe(	  		
	  		this.ngOnInit()
	    );
  	}

	onMapNewClaim() {
		this.service.addClaimMapping(this.model, this.chosenClaimType, this.claimIsOptional).subscribe(	  		
	  		this.ngOnInit()
	    );
	}
}