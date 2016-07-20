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
var idp_1 = require('./idp');
var router_1 = require('@angular/router');
var idps_service_1 = require('./idps-service');
var applications_service_1 = require('./../application/applications-service');
var IdpMapApplicationsComponent = (function () {
    function IdpMapApplicationsComponent(route, router, service, applicationsService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.applicationsService = applicationsService;
        this.model = new idp_1.IDP("", "", "", "", "", "", "", "", "", "", "", "", []);
    }
    IdpMapApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationsService.findAll().subscribe(function (data) { return _this.applications = data.applications; });
        this.sub = this.route.params.subscribe(function (params) {
            var id = decodeURIComponent(params['id']);
            if (id != "undefined") {
                _this.service.find(id).subscribe(function (data) { return _this.model = data; });
            }
        });
    };
    IdpMapApplicationsComponent.prototype.onUnmap = function (entry, model) {
        this.service.removeApplicationMapping(model, entry.realm).subscribe(this.ngOnInit());
    };
    IdpMapApplicationsComponent.prototype.onMapNewApplication = function () {
        this.service.addApplicationMapping(this.model, this.chosenApplication).subscribe(this.ngOnInit());
    };
    IdpMapApplicationsComponent = __decorate([
        core_1.Component({
            selector: 'idpmapform',
            templateUrl: 'app/idp/idps.component.template.mapApplications.html',
            providers: [idps_service_1.IDPsService, applications_service_1.ApplicationsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, idps_service_1.IDPsService, applications_service_1.ApplicationsService])
    ], IdpMapApplicationsComponent);
    return IdpMapApplicationsComponent;
}());
exports.IdpMapApplicationsComponent = IdpMapApplicationsComponent;
//# sourceMappingURL=idps.component.mapApplications.js.map