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
var application_1 = require('./application');
var router_1 = require('@angular/router');
var applications_service_1 = require('./applications-service');
var ApplicationEditComponent = (function () {
    function ApplicationEditComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.model = new application_1.Application("", "", "", "", "http://docs.oasis-open.org/wsfed/federation/200706", "http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLV2.0", "3600", "https://localhost:?(\d)*/.*", []);
        this.createEntry = false;
        this.submitted = false;
    }
    ApplicationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = decodeURIComponent(params['id']);
            if (id != "undefined") {
                _this.service.find(id).subscribe(function (data) { return _this.model = data; });
            }
            else {
                _this.createEntry = true;
            }
        });
    };
    ApplicationEditComponent.prototype.onPersist = function () {
        this.submitted = true;
        if (!this.createEntry) {
            this.service.persist(this.model).subscribe(this.router.navigate(['/applications']));
        }
        else {
            this.service.create(this.model).subscribe(this.router.navigate(['/applications']));
        }
    };
    ApplicationEditComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(ApplicationEditComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ApplicationEditComponent = __decorate([
        core_1.Component({
            selector: 'application-form',
            templateUrl: 'app/application/applications.component.template.edit.html',
            providers: [applications_service_1.ApplicationsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, applications_service_1.ApplicationsService])
    ], ApplicationEditComponent);
    return ApplicationEditComponent;
}());
exports.ApplicationEditComponent = ApplicationEditComponent;
//# sourceMappingURL=applications.component.edit.js.map