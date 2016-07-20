import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Application }    from './application';
import { Claim }    from './../claim/claim';
import { Router, ActivatedRoute }       from '@angular/router';
import { ApplicationsService } from './applications-service';
import { ClaimsService } from './../claim/claims-service';

@Component({
  	selector: 'applmapform',
	templateUrl: 'app/application/applications.component.template.mapClaims.html',
	providers: [ApplicationsService, ClaimsService]
})
export class ApplicationMapClaimsComponent {  		
	private claims: Claim[];
	private chosenClaimType: string;
	private claimIsOptional: boolean;
  	private sub: any;
  	model = new Application("", "", "", "", "http://docs.oasis-open.org/wsfed/federation/200706", "http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLV2.0", "3600", "https://localhost:?(\d)*/.*", []);

	constructor(private route: ActivatedRoute, private router: Router, private service: ApplicationsService, private claimsService: ClaimsService) {

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