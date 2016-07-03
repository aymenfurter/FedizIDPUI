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
var idps_service_1 = require('./idps-service');
var router_1 = require('@angular/router');
var IdpsComponent = (function () {
    function IdpsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    IdpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAll().subscribe(function (data) { return _this.entries = data.idps; });
    };
    IdpsComponent.prototype.onSelect = function (idp) {
        this.router.navigate(['/idp', encodeURIComponent(idp.realm)]);
    };
    IdpsComponent.prototype.onRemove = function (idp) {
        var _this = this;
        this.service.remove(idp).subscribe(this.service.findAll().subscribe(function (data) { return _this.entries = data.idps; }));
    };
    IdpsComponent.prototype.onCreate = function () {
        this.router.navigate(['/create-idp']);
    };
    IdpsComponent = __decorate([
        core_1.Component({
            selector: 'idps',
            templateUrl: 'app/templates/idps.component.template.list.html',
            providers: [idps_service_1.IDPsService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [idps_service_1.IDPsService, router_1.Router])
    ], IdpsComponent);
    return IdpsComponent;
}());
exports.IdpsComponent = IdpsComponent;
//# sourceMappingURL=idps.component.js.map