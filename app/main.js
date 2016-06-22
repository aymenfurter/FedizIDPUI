"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var http_client_1 = require('./http-client');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, http_client_1.HttpClient, app_routes_1.APP_ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map