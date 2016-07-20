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
var claims_service_1 = require('./../claim/claims-service');
var IdpMapClaimsComponent = (function () {
    function IdpMapClaimsComponent(route, router, service, claimsService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.claimsService = claimsService;
        this.model = new idp_1.IDP("", "", "", "", "", "", "", "", "", "", "", "", []);
    }
    IdpMapClaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsService.findAll().subscribe(function (data) { return _this.claims = data.claims; });
        this.sub = this.route.params.subscribe(function (params) {
            var id = decodeURIComponent(params['id']);
            if (id != "undefined") {
                _this.service.find(id).subscribe(function (data) { return _this.model = data; });
            }
        });
    };
    IdpMapClaimsComponent.prototype.onUnmap = function (entry, model) {
        this.service.removeClaimMapping(model, entry.claimType).subscribe(this.ngOnInit());
    };
    IdpMapClaimsComponent.prototype.onMapNewClaim = function () {
        this.service.addClaimMapping(this.model, this.chosenClaimType, this.claimIsOptional).subscribe(this.ngOnInit());
    };
    IdpMapClaimsComponent = __decorate([
        core_1.Component({
            selector: 'idpmapform',
            templateUrl: 'idps.component.template.mapClaims.html',
            providers: [idps_service_1.IDPsService, claims_service_1.ClaimsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, idps_service_1.IDPsService, claims_service_1.ClaimsService])
    ], IdpMapClaimsComponent);
    return IdpMapClaimsComponent;
}());
exports.IdpMapClaimsComponent = IdpMapClaimsComponent;
//# sourceMappingURL=idps.component.mapClaims.js.map