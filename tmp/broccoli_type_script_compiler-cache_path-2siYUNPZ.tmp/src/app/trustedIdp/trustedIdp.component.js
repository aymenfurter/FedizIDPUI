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
var trustedIdps_service_1 = require('./trustedIdps-service');
var router_1 = require('@angular/router');
var TrustedIdpsComponent = (function () {
    function TrustedIdpsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    TrustedIdpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAll().subscribe(function (data) { return _this.entries = data.trustedIDPs; });
    };
    TrustedIdpsComponent.prototype.onSelect = function (trustedIdp) {
        this.router.navigate(['/trustedIdp', encodeURIComponent(trustedIdp.realm)]);
    };
    TrustedIdpsComponent.prototype.onRemove = function (trustedIdp) {
        var _this = this;
        this.service.remove(trustedIdp).subscribe(this.service.findAll().subscribe(function (data) { return _this.entries = data.trustedIDPs; }));
    };
    TrustedIdpsComponent.prototype.onCreate = function () {
        this.router.navigate(['/create-trustedIdp']);
    };
    TrustedIdpsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'trustedIdps',
            templateUrl: 'trustedIdps.component.template.list.html',
            providers: [trustedIdps_service_1.TrustedIdpsService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [trustedIdps_service_1.TrustedIdpsService, router_1.Router])
    ], TrustedIdpsComponent);
    return TrustedIdpsComponent;
}());
exports.TrustedIdpsComponent = TrustedIdpsComponent;
//# sourceMappingURL=trustedIdp.component.js.map