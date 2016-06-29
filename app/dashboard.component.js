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
var applications_service_1 = require('./applications-service');
var claims_service_1 = require('./claims-service');
var DashboardComponent = (function () {
    function DashboardComponent(claimsService, applicationsService) {
        this.claimsService = claimsService;
        this.applicationsService = applicationsService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsService.findAll().subscribe(function (data) { return _this.sizeClaims = data.claims.length; });
        this.applicationsService.findAll().subscribe(function (data) { return _this.sizeApps = data.applications.length; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/templates/dashboard.component.template.html',
            providers: [claims_service_1.ClaimsService, applications_service_1.ApplicationsService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [claims_service_1.ClaimsService, applications_service_1.ApplicationsService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map