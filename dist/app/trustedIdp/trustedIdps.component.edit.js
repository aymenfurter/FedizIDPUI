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
var trustedIdp_1 = require('./trustedIdp');
var router_1 = require('@angular/router');
var trustedIdps_service_1 = require('./trustedIdps-service');
var TrustedIdpEditComponent = (function () {
    function TrustedIdpEditComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.model = new trustedIdp_1.TrustedIdp("", "", "", "", "", "", "", "", true);
        this.createEntry = false;
        this.submitted = false;
    }
    TrustedIdpEditComponent.prototype.ngOnInit = function () {
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
    TrustedIdpEditComponent.prototype.onPersist = function () {
        this.submitted = true;
        if (!this.createEntry) {
            this.service.persist(this.model).subscribe(this.router.navigate(['/trustedIdps']));
        }
        else {
            this.service.create(this.model).subscribe(this.router.navigate(['/trustedIdps']));
        }
    };
    TrustedIdpEditComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(TrustedIdpEditComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    TrustedIdpEditComponent = __decorate([
        core_1.Component({
            selector: 'edit-form',
            templateUrl: 'app/trustedIdp/trustedIdps.component.template.edit.html',
            providers: [trustedIdps_service_1.TrustedIdpsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, trustedIdps_service_1.TrustedIdpsService])
    ], TrustedIdpEditComponent);
    return TrustedIdpEditComponent;
}());
exports.TrustedIdpEditComponent = TrustedIdpEditComponent;
//# sourceMappingURL=trustedIdps.component.edit.js.map