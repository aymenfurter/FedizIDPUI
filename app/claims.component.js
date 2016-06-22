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
var ClaimsComponent = (function () {
    function ClaimsComponent(claimsService) {
        this.claimsService = claimsService;
    }
    ClaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimsService.findAll().subscribe(function (data) { return _this.entries = data.claims; });
    };
    ClaimsComponent = __decorate([
        core_1.Component({
            selector: 'claims',
            template: "        \n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">Claims</h1>\n        </div>\n        <div class=\"content\">\n            <ul class=\"contacts\">\n                <li *ngFor=\"#entry of entries\" (click)=\"onSelect(contact)\" [class.selected]=\"contact === selectedContact\">\n                    {{entry.claimType}}\n                </li>\n            </ul>            \n        </div>",
            providers: [claims_service_1.ClaimsService],
        }), 
        __metadata('design:paramtypes', [claims_service_1.ClaimsService])
    ], ClaimsComponent);
    return ClaimsComponent;
}());
exports.ClaimsComponent = ClaimsComponent;
//# sourceMappingURL=claims.component.js.map