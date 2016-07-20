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
var claims_service_1 = require('./../claim/claims-service');
var ApplicationMapClaimsComponent = (function () {
    function ApplicationMapClaimsComponent(route, router, service, claimsService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.claimsService = claimsService;
        this.model = new application_1.Application("", "", "", "", "http://docs.oasis-open.org/wsfed/federation/200706", "http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLV2.0", "3600", "https://localhost:?(\d)*/.*", []);
    }
    ApplicationMapClaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsService.findAll().subscribe(function (data) { return _this.claims = data.claims; });
        this.sub = this.route.params.subscribe(function (params) {
            var id = decodeURIComponent(params['id']);
            if (id != "undefined") {
                _this.service.find(id).subscribe(function (data) { return _this.model = data; });
            }
        });
    };
    ApplicationMapClaimsComponent.prototype.onUnmap = function (entry, model) {
        this.service.removeClaimMapping(model, entry.claimType).subscribe(this.ngOnInit());
    };
    ApplicationMapClaimsComponent.prototype.onMapNewClaim = function () {
        this.service.addClaimMapping(this.model, this.chosenClaimType, this.claimIsOptional).subscribe(this.ngOnInit());
    };
    ApplicationMapClaimsComponent = __decorate([
        core_1.Component({
            selector: 'applmapform',
            templateUrl: 'app/application/applications.component.template.mapClaims.html',
            providers: [applications_service_1.ApplicationsService, claims_service_1.ClaimsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, applications_service_1.ApplicationsService, claims_service_1.ClaimsService])
    ], ApplicationMapClaimsComponent);
    return ApplicationMapClaimsComponent;
}());
exports.ApplicationMapClaimsComponent = ApplicationMapClaimsComponent;
//# sourceMappingURL=applications.component.mapClaims.js.map