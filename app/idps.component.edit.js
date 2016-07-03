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
var IDPEditComponent = (function () {
    function IDPEditComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.model = new idp_1.IDP("", "", "", "", "", "", "", "", "", "", "", "");
        this.createEntry = false;
        this.submitted = false;
    }
    IDPEditComponent.prototype.ngOnInit = function () {
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
    IDPEditComponent.prototype.onPersist = function () {
        this.submitted = true;
        if (!this.createEntry) {
            this.service.persist(this.model).subscribe(this.router.navigate(['/idps']));
        }
        else {
            this.service.create(this.model).subscribe(this.router.navigate(['/idps']));
        }
    };
    IDPEditComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(IDPEditComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    IDPEditComponent = __decorate([
        core_1.Component({
            selector: 'edit-form',
            templateUrl: 'app/templates/idps.component.template.edit.html',
            providers: [idps_service_1.IDPsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, idps_service_1.IDPsService])
    ], IDPEditComponent);
    return IDPEditComponent;
}());
exports.IDPEditComponent = IDPEditComponent;
//# sourceMappingURL=idps.component.edit.js.map