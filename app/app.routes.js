"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var claims_component_1 = require('./claims.component');
exports.routes = [
    { path: 'claims', component: claims_component_1.ClaimsComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: '', component: dashboard_component_1.DashboardComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map