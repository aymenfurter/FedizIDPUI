import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from './../shared/http-client';
import { Observable } from 'rxjs/Observable';
import { TrustedIdp } from './trustedIdp';
import { Consts } from './../shared/consts';
import 'rxjs/Rx';
 
let entries = [],
    baseURL: string = Consts.URL_PREFIX,
    urlIdentifier: string = "trusted-idps",
    trustedIdpsURL: string = baseURL + urlIdentifier + '?size=' + Consts.LISTSIZE,
    trustedIdpURL: string = baseURL + urlIdentifier + '/';    
 
@Injectable()
export class TrustedIdpsService {
   private httpClient : HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }
 
    findAll() {
        return this.httpClient.get(trustedIdpsURL)
            .map((res: any) => res.json())
            .catch(this.handleError);
    }

    find(id: string) {
        return this.httpClient.get(trustedIdpURL + id)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    persist(trustedIdp: TrustedIdp) {
        return this.httpClient.put(trustedIdpURL + trustedIdp.realm, trustedIdp)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    create(trustedIdp: TrustedIdp) {
        return this.httpClient.post(trustedIdpURL, trustedIdp)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    remove (trustedIdp: TrustedIdp) {
         return this.httpClient.delete(trustedIdpURL + trustedIdp.realm, trustedIdp)
            .map((res: any) => res.json())
            .catch(this.handlePlaceboError);                               
    }
 

    // Fediz IDP returns 204 for DELETE Requests..
    handlePlaceboError(error) {      
        return Observable.throw(error.json().error || 'Expected Error');
    }

    handleError(error) {        
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    } 
}