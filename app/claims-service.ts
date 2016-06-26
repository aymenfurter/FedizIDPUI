import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from './http-client';
import {Observable} from 'rxjs/Observable';
import {Claim} from './claim';
import 'rxjs/Rx';
 
let entries = [],
    baseURL: string = "http://localhost:8080/fediz-idp/services/rs/",
    claimsURL: string = baseURL + 'claims?size=50',
    claimURL: string = baseURL + 'claims/';    
 
@Injectable()
export class ClaimsService {
   private httpClient : HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }
 
    findAll() {
        return this.httpClient.get(claimsURL)
            .map((res: any) => res.json())
            .catch(this.handleError);
    }

    find(id: string) {
        return this.httpClient.get(claimURL + id)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    persist(claim: Claim) {
        return this.httpClient.put(claimURL + claim.claimType, claim)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    create(claim: Claim) {
        return this.httpClient.post(claimURL, claim)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    remove (claim: Claim) {
         return this.httpClient.delete(claimURL + claim.claimType, claim)
            .map((res: any) => res.json())
            .catch(this.handlePlaceboError);                               
    }
 
    /*favorite(property) {
        let body = JSON.stringify(property);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(baseURL, body, options)
            .map((res: any) => res.json())
            .catch(this.handleError);
    }*/
 

    // Fediz IDP returns 204 for DELETE Requests..
    handlePlaceboError(error) {      
    }

    handleError(error) {        
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


 
}
