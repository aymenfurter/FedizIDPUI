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
    idpURL: string = baseURL + urlIdentifier + '/';    
 
@Injectable()
export class IDPsService {
   private httpClient : HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
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