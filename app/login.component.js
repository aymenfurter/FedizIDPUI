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
var router_1 = require('@angular/router');
var http_client_1 = require('./http-client');
var consts_1 = require('./consts');
var LoginComponent = (function () {
    function LoginComponent(httpClient) {
        this.isLoggedIn = false;
        this.userDataWrong = false;
        this.httpClient = httpClient;
    }
    LoginComponent.prototype.onLogin = function (username, password) {
        this.httpClient.setUsernamePassword(this.username, this.password);
        this.httpClient.get(consts_1.Consts.URL_PREFIX + "claims/")
            .toPromise()
            .then(this.handleSuccess
            .catch(this.handleError));
    };
    LoginComponent.prototype.handleSuccess = function () {
        this.userDataWrong = false;
        this.isLoggedIn = true;
        alert("success");
    };
    LoginComponent.prototype.handleError = function (error) {
        this.userDataWrong = true;
        alert("no success");
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/templates/login.component.template.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_client_1.HttpClient])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map