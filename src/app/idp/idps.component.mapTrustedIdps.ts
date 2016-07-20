import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { IDP }    from './idp';
import { TrustedIdp }    from './../trustedIdp/trustedIdp';
import { Router, ActivatedRoute }       from '@angular/router';
import { IDPsService } from './idps-service';
import { TrustedIdpsService } from './../trustedIdp/trustedIdps-service';

@Component({
  	selector: 'idpmapform',
	templateUrl: 'app/idp/idps.component.template.mapTrustedIdps.html',
	providers: [IDPsService, TrustedIdpsService]
})
export class IdpMapTrustedIdpComponent {  		
	private trustedIdps: TrustedIdp[];
	private chosenTrustedIdp: string;	
  	private sub: any;
  	model = new IDP("", "", "", "", "", "", "", "", "", "", "", "", []);

	constructor(private route: ActivatedRoute, private router: Router, private service: IDPsService, private trustedIdpsService: TrustedIdpsService) {
	}

 	ngOnInit() {
 		this.trustedIdpsService.findAll().subscribe(
            data => this.trustedIdps = data.trustedIDPs
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
  		this.service.removeTrustedIdpMapping(model, entry.realm).subscribe(	  		
	  		this.ngOnInit()
	    );
  	}

	onMapNewTrustedIdp() {
		this.service.addTrustedIdpMapping(this.model, this.chosenTrustedIdp).subscribe(	  		
	  		this.ngOnInit()
	    );
	}
}