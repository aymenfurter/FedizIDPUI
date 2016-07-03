import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from './http-client';
import { Observable } from 'rxjs/Observable';
import { Application } from './application';
import { RequestClaim } from './requestclaim';
import { Consts } from './consts';
import 'rxjs/Rx';
 
let entries = [],
    urlIdentifier: string = "applications",
    baseURL: string = Consts.URL_PREFIX,    
    listURL: string = baseURL + urlIdentifier + '?size=' + Consts.LISTSIZE,
    entryURL: string = baseURL + urlIdentifier + '/',
    claimMappingSuffix: string = "/claims";    
 
@Injectable()
export class ApplicationsService {
   private httpClient : HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }
 
    removeClaimMapping(entry: Application, claimType: string) {
        return this.httpClient.delete(entryURL + entry.realm + claimMappingSuffix + "/" + claimType, {})
            .map((res: any) => res.json())
            .catch(this.handlePlaceboError);            
    }

    addClaimMapping(entry: Application, claimType: string, isOptional: boolean) {
        var requestClaim: RequestClaim = new RequestClaim(claimType, isOptional + "");
             
        return this.httpClient.post(entryURL + entry.realm + claimMappingSuffix, requestClaim).map((res: any) => res.json()).catch(this.handleError);            

    }

    findAll() {
        return this.httpClient.get(listURL)
            .map((res: any) => res.json())
            .catch(this.handleError);
    }

    find(id: string) {
        return this.httpClient.get(entryURL + id)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    persist(entry: Application) {
        return this.httpClient.put(entryURL + entry.realm, entry)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }
 
    create(entry: Application) {
        return this.httpClient.post(entryURL, entry)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    remove (entry: Application) {
         return this.httpClient.delete(entryURL + entry.realm, entry)
            .map((res: any) => res.json())
            .catch(this.handlePlaceboError);                               
    } 

    // Fediz IDP returns 204 for DELETE Requests..
    handlePlaceboError(error) {      
    }

    handleError(error) {        
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    } 
}