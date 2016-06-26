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
var claims_service_1 = require('./claims-service');
var router_1 = require('@angular/router');
var ClaimsComponent = (function () {
    function ClaimsComponent(claimsService, router) {
        this.claimsService = claimsService;
        this.router = router;
    }
    ClaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsService.findAll().subscribe(function (data) { return _this.entries = data.claims; });
    };
    ClaimsComponent.prototype.onSelect = function (claim) {
        this.router.navigate(['/claim', encodeURIComponent(claim.claimType)]);
    };
    ClaimsComponent.prototype.onCreate = function () {
        this.router.navigate(['/create-claim']);
    };
    ClaimsComponent = __decorate([
        core_1.Component({
            selector: 'claims',
            templateUrl: 'app/templates/claims.component.template.list.html',
            providers: [claims_service_1.ClaimsService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [claims_service_1.ClaimsService, router_1.Router])
    ], ClaimsComponent);
    return ClaimsComponent;
}());
exports.ClaimsComponent = ClaimsComponent;
//# sourceMappingURL=claims.component.js.map