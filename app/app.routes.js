"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var claims_component_1 = require('./claims.component');
var claims_component_edit_1 = require('./claims.component.edit');
var applications_component_1 = require('./applications.component');
var applications_component_edit_1 = require('./applications.component.edit');
var roles_component_1 = require('./roles.component');
var roles_component_edit_1 = require('./roles.component.edit');
exports.routes = [
    /* Claims */
    { path: 'claims', component: claims_component_1.ClaimsComponent },
    { path: 'claim/:id', component: claims_component_edit_1.ClaimEditComponent },
    { path: 'create-claim', component: claims_component_edit_1.ClaimEditComponent },
    /* Applications */
    { path: 'applications', component: applications_component_1.ApplicationsComponent },
    { path: 'application/:id', component: applications_component_edit_1.ApplicationEditComponent },
    { path: 'create-application', component: applications_component_edit_1.ApplicationEditComponent },
    /* IDPs */
    /* Trusted IDPs */
    /* Roles */
    { path: 'roles', component: roles_component_1.RolesComponent },
    { path: 'role/:id', component: roles_component_edit_1.RoleEditComponent },
    { path: 'create-role', component: roles_component_edit_1.RoleEditComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: '', component: dashboard_component_1.DashboardComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map