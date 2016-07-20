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
var http_client_1 = require('./../shared/http-client');
var Observable_1 = require('rxjs/Observable');
var consts_1 = require('./../shared/consts');
require('rxjs/Rx');
var entries = [], baseURL = consts_1.Consts.URL_PREFIX, urlIdentifier = "roles", rolesURL = baseURL + urlIdentifier + '?size=' + consts_1.Consts.LISTSIZE, roleURL = baseURL + urlIdentifier + '/';
var RolesService = (function () {
    function RolesService(httpClient) {
        this.httpClient = httpClient;
    }
    RolesService.prototype.findAll = function () {
        return this.httpClient.get(rolesURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RolesService.prototype.find = function (id) {
        return this.httpClient.get(roleURL + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RolesService.prototype.persist = function (role) {
        return this.httpClient.put(roleURL + role.name, role)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RolesService.prototype.create = function (role) {
        return this.httpClient.post(roleURL, role)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RolesService.prototype.remove = function (role) {
        return this.httpClient.delete(roleURL + role.name, role)
            .map(function (res) { return res.json(); })
            .catch(this.handlePlaceboError);
    };
    // Fediz IDP returns 204 for DELETE Requests..
    RolesService.prototype.handlePlaceboError = function (error) {
    };
    RolesService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    RolesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_client_1.HttpClient])
    ], RolesService);
    return RolesService;
}());
exports.RolesService = RolesService;
//# sourceMappingURL=roles-service.js.map