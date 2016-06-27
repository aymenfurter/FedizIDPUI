"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_client_1 = require('./http-client');
var Observable_1 = require('rxjs/Observable');
var consts_1 = require('./consts');
require('rxjs/Rx');
var entries = [], urlIdentifier = "applications", baseURL = consts_1.Consts.URL_PREFIX, listURL = baseURL + urlIdentifier + '?size=' + consts_1.Consts.LISTSIZE, entryURL = baseURL + urlIdentifier + '/';
var ApplicationsService = (function () {
    function ApplicationsService(httpClient) {
        this.httpClient = httpClient;
    }
    ApplicationsService.prototype.findAll = function () {
        return this.httpClient.get(listURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApplicationsService.prototype.find = function (id) {
        return this.httpClient.get(entryURL + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApplicationsService.prototype.persist = function (entry) {
        return this.httpClient.put(entryURL + entry.realm, entry)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApplicationsService.prototype.create = function (entry) {
        return this.httpClient.post(entryURL, entry)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApplicationsService.prototype.remove = function (entry) {
        return this.httpClient.delete(entryURL + entry.realm, entry)
            .map(function (res) { return res.json(); })
            .catch(this.handlePlaceboError);
    };
    // Fediz IDP returns 204 for DELETE Requests..
    ApplicationsService.prototype.handlePlaceboError = function (error) {
    };
    ApplicationsService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ApplicationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_client_1.HttpClient])
    ], ApplicationsService);
    return ApplicationsService;
}());
exports.ApplicationsService = ApplicationsService;
//# sourceMappingURL=applications-service.js.map