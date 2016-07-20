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
var applications_service_1 = require('./applications-service');
var router_1 = require('@angular/router');
var ApplicationsComponent = (function () {
    function ApplicationsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ApplicationsComponent.prototype.onMapClaims = function (application) {
        this.router.navigate(['/claims2application', encodeURIComponent(application.realm)]);
    };
    ApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAll().subscribe(function (data) { return _this.entries = data.applications; });
    };
    ApplicationsComponent.prototype.onSelect = function (application) {
        this.router.navigate(['/application', encodeURIComponent(application.realm)]);
    };
    ApplicationsComponent.prototype.onRemove = function (application) {
        var _this = this;
        this.service.remove(application).subscribe(this.service.findAll().subscribe(function (data) { return _this.entries = data.applications; }));
    };
    ApplicationsComponent.prototype.onCreate = function () {
        this.router.navigate(['/create-application']);
    };
    ApplicationsComponent = __decorate([
        core_1.Component({
            selector: 'applications',
            templateUrl: 'app/application/applications.component.template.list.html',
            providers: [applications_service_1.ApplicationsService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [applications_service_1.ApplicationsService, router_1.Router])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());
exports.ApplicationsComponent = ApplicationsComponent;
//# sourceMappingURL=applications.component.js.map