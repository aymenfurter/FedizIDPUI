import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

import { HttpClient } from './http-client';
import { NgForm }    from '@angular/common';
import { Consts } from './consts';

@Component({
    selector: 'login-form',  
    templateUrl: 'app/templates/login.component.template.html' ,        
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
    private isLoggedIn: boolean = false;
	private httpClient : HttpClient;	
	private username : string;
	private password : string;	
	private userDataWrong : boolean = false;

	onLogin(username, password) {
  		this.httpClient.setUsernamePassword(this.username, this.password);  		
        this.httpClient.get(Consts.URL_PREFIX + "claims/")
        .toPromise()
        .then(this.handleSuccess
        .catch(this.handleError);                                     
  	}

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

  	handleSuccess() {
  		this.userDataWrong = false;
  		this.isLoggedIn = true;
  		alert("success");
  	}
	
	handleError(error) {      
		this.userDataWrong = true;
		alert("no success");
    }
}