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
var entries = [], baseURL = consts_1.Consts.URL_PREFIX, urlIdentifier = "trusted-idps", trustedIdpsURL = baseURL + urlIdentifier + '?size=' + consts_1.Consts.LISTSIZE, trustedIdpURL = baseURL + urlIdentifier + '/';
var TrustedIdpsService = (function () {
    function TrustedIdpsService(httpClient) {
        this.httpClient = httpClient;
    }
    TrustedIdpsService.prototype.findAll = function () {
        return this.httpClient.get(trustedIdpsURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TrustedIdpsService.prototype.find = function (id) {
        return this.httpClient.get(trustedIdpURL + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TrustedIdpsService.prototype.persist = function (trustedIdp) {
        return this.httpClient.put(trustedIdpURL + trustedIdp.realm, trustedIdp)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TrustedIdpsService.prototype.create = function (trustedIdp) {
        return this.httpClient.post(trustedIdpURL, trustedIdp)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TrustedIdpsService.prototype.remove = function (trustedIdp) {
        return this.httpClient.delete(trustedIdpURL + trustedIdp.realm, trustedIdp)
            .map(function (res) { return res.json(); })
            .catch(this.handlePlaceboError);
    };
    // Fediz IDP returns 204 for DELETE Requests..
    TrustedIdpsService.prototype.handlePlaceboError = function (error) {
    };
    TrustedIdpsService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TrustedIdpsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_client_1.HttpClient])
    ], TrustedIdpsService);
    return TrustedIdpsService;
}());
exports.TrustedIdpsService = TrustedIdpsService;
//# sourceMappingURL=trustedIdps-service.js.map