import { Component } from '@angular/core';
import { Consts } from './shared/consts';

import { ClaimsComponent } from './claim/claims.component';
import { ClaimEditComponent } from './claim/claims.component.edit';

import { ApplicationsComponent } from './application/applications.component';
import { ApplicationEditComponent } from './application/applications.component.edit';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { HttpClient } from './shared/http-client';
import { NgForm }    from '@angular/common';

@Component({
	moduleId: module.id,
    selector: 'init-app',
    templateUrl: 'app.component.template.html' ,        
    directives: [DashboardComponent, ROUTER_DIRECTIVES, NavigationComponent, ClaimEditComponent, ApplicationEditComponent]
})

//TODO: Move Authentication Logic to diffrent place
export class AppComponent {
	private isLoggedIn: boolean = false;
	private httpClient : HttpClient;	
	private username : string;
	private password : string;	
	private userDataWrong : boolean = false;

	onLogin(username, password) {
  		this.httpClient.setUsernamePassword(this.username, this.password);  		
        this.httpClient.get(Consts.URL_PREFIX)
        .toPromise()
        .then(this.handleSuccess())
        .catch(this.handleError);                                     
  	}

    constructor(httpClient: HttpClient, private router: Router) {
        this.httpClient = httpClient;
    }

	  ngOnInit() {

  	} 
  
  	handleSuccess() {
  		this.userDataWrong = false;
  		this.isLoggedIn = true;            
  	}
	
	handleError(error) {      
		this.userDataWrong = true;
    }
	    
}
