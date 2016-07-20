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
var roles_service_1 = require('./../role/roles-service');
var router_1 = require('@angular/router');
var RolesComponent = (function () {
    function RolesComponent(service, router) {
        this.service = service;
        this.router = router;
        console.log("meow");
    }
    RolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAll().subscribe(function (data) { return _this.entries = data.roles; });
    };
    RolesComponent.prototype.onSelect = function (role) {
        this.router.navigate(['/role', encodeURIComponent(role.name)]);
    };
    RolesComponent.prototype.onRemove = function (role) {
        var _this = this;
        this.service.remove(role).subscribe(this.service.findAll().subscribe(function (data) { return _this.entries = data.roles; }));
    };
    RolesComponent.prototype.onCreate = function () {
        this.router.navigate(['/create-role']);
    };
    RolesComponent = __decorate([
        core_1.Component({
            selector: 'roles',
            templateUrl: 'roles.component.template.list.html',
            providers: [roles_service_1.RolesService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [roles_service_1.RolesService, router_1.Router])
    ], RolesComponent);
    return RolesComponent;
}());
exports.RolesComponent = RolesComponent;
//# sourceMappingURL=roles.component.js.map