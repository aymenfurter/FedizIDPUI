"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var claims_component_1 = require('./claims.component');
var claims_component_edit_1 = require('./claims.component.edit');
var applications_component_1 = require('./applications.component');
var applications_component_edit_1 = require('./applications.component.edit');
var applications_component_mapClaims_1 = require('./applications.component.mapClaims');
var roles_component_1 = require('./roles.component');
var roles_component_edit_1 = require('./roles.component.edit');
var trustedIdp_component_1 = require('./trustedIdp.component');
var trustedIdps_component_edit_1 = require('./trustedIdps.component.edit');
var idps_component_1 = require('./idps.component');
var idps_component_edit_1 = require('./idps.component.edit');
var idps_component_mapClaims_1 = require('./idps.component.mapClaims');
var idps_component_mapApplications_1 = require('./idps.component.mapApplications');
var idps_component_mapTrustedIdps_1 = require('./idps.component.mapTrustedIdps');
exports.routes = [
    /* Claims */
    { path: 'claims', component: claims_component_1.ClaimsComponent },
    { path: 'claim/:id', component: claims_component_edit_1.ClaimEditComponent },
    { path: 'create-claim', component: claims_component_edit_1.ClaimEditComponent },
    /* Applications */
    { path: 'applications', component: applications_component_1.ApplicationsComponent },
    { path: 'application/:id', component: applications_component_edit_1.ApplicationEditComponent },
    { path: 'claims2application/:id', component: applications_component_mapClaims_1.ApplicationMapClaimsComponent },
    { path: 'create-application', component: applications_component_edit_1.ApplicationEditComponent },
    /* Trusted IDPs */
    { path: 'trustedIdps', component: trustedIdp_component_1.TrustedIdpsComponent },
    { path: 'trustedIdp/:id', component: trustedIdps_component_edit_1.TrustedIdpEditComponent },
    { path: 'create-trustedIdp', component: trustedIdps_component_edit_1.TrustedIdpEditComponent },
    /* IDPs */
    { path: 'idps', component: idps_component_1.IdpsComponent },
    { path: 'idp/:id', component: idps_component_edit_1.IDPEditComponent },
    { path: 'claims2idp/:id', component: idps_component_mapClaims_1.IdpMapClaimsComponent },
    { path: 'applications2idp/:id', component: idps_component_mapApplications_1.IdpMapApplicationsComponent },
    { path: 'trustedIdps2idp/:id', component: idps_component_mapTrustedIdps_1.IdpMapTrustedIdpComponent },
    { path: 'create-idp', component: idps_component_edit_1.IDPEditComponent },
    /* Roles */
    { path: 'roles', component: roles_component_1.RolesComponent },
    { path: 'role/:id', component: roles_component_edit_1.RoleEditComponent },
    { path: 'create-role', component: roles_component_edit_1.RoleEditComponent },
    /* General */
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: '', component: dashboard_component_1.DashboardComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map