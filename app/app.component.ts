import { Component } from '@angular/core';
import { Consts } from './consts';

import { ClaimsComponent } from './claims.component';
import { ClaimEditComponent } from './claims.component.edit';

import { ApplicationsComponent } from './applications.component';
import { ApplicationEditComponent } from './applications.component.edit';

import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from './navigation.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HttpClient } from './http-client';
import { NgForm }    from '@angular/common';

@Component({
    selector: 'init-app',
    templateUrl: 'app/templates/app.component.template.html' ,        
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

    constructor(httpClient: HttpClient) {
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
