import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from './http-client';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 
let entries = [],
    baseURL: string = "http://localhost:8080/" + '/fediz-idp/services/rs/claims'    
 
@Injectable()
export class ClaimsService {
   private httpClient : HttpClient;

    constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
 
    findAll() {
        return this.httpClient.get(baseURL)
            .map((res: any) => res.json())
            .catch(this.handleError);
    }
 
    /*favorite(property) {
        let body = JSON.stringify(property);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(baseURL, body, options)
            .map((res: any) => res.json())
            .catch(this.handleError);
    }*/
 
    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
 
}
