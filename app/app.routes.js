System.register(['./claims.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var claims_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (claims_component_1_1) {
                claims_component_1 = claims_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '/claims', component: claims_component_1.ClaimsComponent },
                { path: '/', component: claims_component_1.ClaimsComponent },
                { path: '', component: claims_component_1.ClaimsComponent },
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = []);
        }
    }
});
//# sourceMappingURL=app.routes.js.map