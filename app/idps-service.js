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
var entries = [], baseURL = consts_1.Consts.URL_PREFIX, urlIdentifier = "idps", IdpsURL = baseURL + urlIdentifier + '?size=' + consts_1.Consts.LISTSIZE, claimMappingSuffix = "/claims", applicationMappingSuffix = "/applications", trustedIdpsMappingSuffix = "/trusted-idps", idpURL = baseURL + urlIdentifier + '/';
var IDPsService = (function () {
    function IDPsService(httpClient) {
        this.httpClient = httpClient;
    }
    IDPsService.prototype.removeTrustedIdpMapping = function (entry, claimType) {
        return this.httpClient.delete(idpURL + entry.realm + trustedIdpsMappingSuffix + "/" + claimType, {})
            .map(function (res) { return res.json(); })
            .catch(this.handlePlaceboError);
    };
    IDPsService.prototype.addTrustedIdpMapping = function (entry, trustedIdpRealm) {
        var obj = {};
        obj["realm"] = trustedIdpRealm;
        return this.httpClient.post(idpURL + entry.realm + trustedIdpsMappingSuffix, obj)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IDPsService.prototype.removeClaimMapping = function (entry, claimType) {
        return this.httpClient.delete(idpURL + entry.realm + claimMappingSuffix + "/" + claimType, {})
            .map(function (res) { return res.json(); })
            .catch(this.handlePlaceboError);
    };
    IDPsService.prototype.addClaimMapping = function (entry, claimType, isOptional) {
        var claim = {};
        claim["claimType"] = claimType;
        return this.httpClient.post(idpURL + entry.realm + claimMappingSuffix, claim)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IDPsService.prototype.removeApplicationMapping = function (entry, claimType) {
        return this.httpClient.delete(idpURL + entry.realm + applicationMappingSuffix + "/" + claimType, {})
            .map(function (res) { return res.json(); })
            .catch(this.handlePlaceboError);
    };
    IDPsService.prototype.addApplicationMapping = function (entry, applicationRealm) {
        var obj = {};
        obj["realm"] = applicationRealm;
        return this.httpClient.post(idpURL + entry.realm + applicationMappingSuffix, obj)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IDPsService.prototype.findAll = function () {
        return this.httpClient.get(IdpsURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IDPsService.prototype.find = function (id) {
        return this.httpClient.get(idpURL + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IDPsService.prototype.persist = function (idp) {
        return this.httpClient.put(idpURL + idp.realm, idp)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IDPsService.prototype.create = function (idp) {
        return this.httpClient.post(idpURL, idp)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IDPsService.prototype.remove = function (idp) {
        return this.httpClient.delete(idpURL + idp.realm, idp)
            .map(function (res) { return res.json(); })
            .catch(this.handlePlaceboError);
    };
    // Fediz IDP returns 204 for DELETE Requests..
    IDPsService.prototype.handlePlaceboError = function (error) {
    };
    IDPsService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    IDPsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_client_1.HttpClient])
    ], IDPsService);
    return IDPsService;
}());
exports.IDPsService = IDPsService;
//# sourceMappingURL=idps-service.js.map