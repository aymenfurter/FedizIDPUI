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
var roles_service_1 = require('./roles-service');
var trustedIdps_service_1 = require('./trustedIdps-service');
var idps_service_1 = require('./idps-service');
var DashboardComponent = (function () {
    function DashboardComponent(idpService, claimsService, applicationsService, rolesService, trustedIdpsService) {
        this.idpService = idpService;
        this.claimsService = claimsService;
        this.applicationsService = applicationsService;
        this.rolesService = rolesService;
        this.trustedIdpsService = trustedIdpsService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsService.findAll().subscribe(function (data) { return _this.sizeClaims = data.claims.length; });
        this.idpService.findAll().subscribe(function (data) { return _this.sizeIdps = data.idps.length; });
        this.trustedIdpsService.findAll().subscribe(function (data) { return _this.sizeTrustedIdps = data.trustedIdps.length; });
        this.applicationsService.findAll().subscribe(function (data) { return _this.sizeApps = data.applications.length; });
        this.rolesService.findAll().subscribe(function (data) { return _this.sizeRoles = data.roles.length; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/templates/dashboard.component.template.html',
            providers: [claims_service_1.ClaimsService, applications_service_1.ApplicationsService, roles_service_1.RolesService, trustedIdps_service_1.TrustedIdpsService, idps_service_1.IDPsService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [idps_service_1.IDPsService, claims_service_1.ClaimsService, applications_service_1.ApplicationsService, roles_service_1.RolesService, trustedIdps_service_1.TrustedIdpsService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map