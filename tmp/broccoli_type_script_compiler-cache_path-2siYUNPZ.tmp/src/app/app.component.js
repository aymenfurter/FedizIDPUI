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
var consts_1 = require('./shared/consts');
var claims_component_edit_1 = require('./claim/claims.component.edit');
var applications_component_edit_1 = require('./application/applications.component.edit');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var navigation_component_1 = require('./navigation/navigation.component');
var router_1 = require('@angular/router');
var http_client_1 = require('./shared/http-client');
var AppComponent = (function () {
    function AppComponent(httpClient, router) {
        this.router = router;
        this.isLoggedIn = false;
        this.userDataWrong = false;
        this.httpClient = httpClient;
    }
    AppComponent.prototype.onLogin = function (username, password) {
        this.httpClient.setUsernamePassword(this.username, this.password);
        this.httpClient.get(consts_1.Consts.URL_PREFIX)
            .toPromise()
            .then(this.handleSuccess())
            .catch(this.handleError);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.handleSuccess = function () {
        this.userDataWrong = false;
        this.isLoggedIn = true;
    };
    AppComponent.prototype.handleError = function (error) {
        this.userDataWrong = true;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'init-app',
            templateUrl: 'app.component.template.html',
            directives: [dashboard_component_1.DashboardComponent, router_1.ROUTER_DIRECTIVES, navigation_component_1.NavigationComponent, claims_component_edit_1.ClaimEditComponent, applications_component_edit_1.ApplicationEditComponent]
        }), 
        __metadata('design:paramtypes', [http_client_1.HttpClient, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map