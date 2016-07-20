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
var claim_1 = require('./claim');
var router_1 = require('@angular/router');
var claims_service_1 = require('./claims-service');
var ClaimEditComponent = (function () {
    function ClaimEditComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.model = new claim_1.Claim("", "", "");
        this.createEntry = false;
        this.submitted = false;
    }
    ClaimEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = decodeURIComponent(params['id']);
            if (id != "undefined") {
                _this.service.find(id).subscribe(function (claim) { return _this.model = claim; });
            }
            else {
                _this.createEntry = true;
            }
        });
    };
    ClaimEditComponent.prototype.onPersist = function () {
        this.submitted = true;
        // Maybe it would be better to have such logic in the Service; Since this would result in an additional request we leave it here for now.
        if (!this.createEntry) {
            this.service.persist(this.model).subscribe(this.router.navigate(['/claims']));
        }
        else {
            this.service.create(this.model).subscribe(this.router.navigate(['/claims']));
        }
    };
    ClaimEditComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(ClaimEditComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ClaimEditComponent = __decorate([
        core_1.Component({
            selector: 'claim-form',
            templateUrl: 'app/claim/claims.component.template.edit.html',
            providers: [claims_service_1.ClaimsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, claims_service_1.ClaimsService])
    ], ClaimEditComponent);
    return ClaimEditComponent;
}());
exports.ClaimEditComponent = ClaimEditComponent;
//# sourceMappingURL=claims.component.edit.js.map