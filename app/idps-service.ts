import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from './http-client';
import { Observable } from 'rxjs/Observable';
import { IDP } from './idp';
import { Consts } from './consts';
import 'rxjs/Rx';
 
let entries = [],
    baseURL: string = Consts.URL_PREFIX,
    urlIdentifier: string = "idps",
    IdpsURL: string = baseURL + urlIdentifier + '?size=' + Consts.LISTSIZE,
    claimMappingSuffix: string = "/claims",
    applicationMappingSuffix: string = "/applications",
    trustedIdpsMappingSuffix: string = "/trusted-idps",
    idpURL: string = baseURL + urlIdentifier + '/';    

 
@Injectable()
export class IDPsService {
   private httpClient : HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }
 
    removeTrustedIdpMapping(entry: IDP, claimType: string) {        
        return this.httpClient.delete(idpURL + entry.realm + trustedIdpsMappingSuffix + "/" + claimType, {})
            .map((res: any) => res.json())
            .catch(this.handlePlaceboError);            
    }

    addTrustedIdpMapping(entry: IDP, trustedIdpRealm: string) {
        var obj = {};
        obj["realm"] = trustedIdpRealm;

        return this.httpClient.post(idpURL + entry.realm + trustedIdpsMappingSuffix, obj)            
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }


    removeClaimMapping(entry: IDP, claimType: string) {        
        return this.httpClient.delete(idpURL + entry.realm + claimMappingSuffix + "/" + claimType, {})
            .map((res: any) => res.json())
            .catch(this.handlePlaceboError);            
    }

    addClaimMapping(entry: IDP, claimType: string, isOptional: boolean) {
        var claim = {};
        claim["claimType"] = claimType;

        return this.httpClient.post(idpURL + entry.realm + claimMappingSuffix, claim)            
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    removeApplicationMapping(entry: IDP, claimType: string) {        
        return this.httpClient.delete(idpURL + entry.realm + applicationMappingSuffix + "/" + claimType, {})
            .map((res: any) => res.json())
            .catch(this.handlePlaceboError);            
    }

    addApplicationMapping(entry: IDP, applicationRealm: string) {
        var obj = {};
        obj["realm"] = applicationRealm;

        return this.httpClient.post(idpURL + entry.realm + applicationMappingSuffix, obj)            
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    findAll() {
        return this.httpClient.get(IdpsURL)
            .map((res: any) => res.json())
            .catch(this.handleError);
    }

    find(id: string) {
        return this.httpClient.get(idpURL + id)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    persist(idp: IDP) {
        return this.httpClient.put(idpURL + idp.realm, idp)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    create(idp: IDP) {
        return this.httpClient.post(idpURL, idp)
            .map((res: any) => res.json())
            .catch(this.handleError);            
    }

    remove (idp: IDP) {
         return this.httpClient.delete(idpURL + idp.realm, idp)
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