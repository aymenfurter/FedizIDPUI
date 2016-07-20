"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var http_client_1 = require('./app/shared/http-client');
var app_routes_1 = require('./app/shared/app.routes');
var forms_1 = require('@angular/forms');
var _1 = require('./app/');
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [http_1.HTTP_PROVIDERS, http_client_1.HttpClient, app_routes_1.APP_ROUTER_PROVIDERS, forms_1.disableDeprecatedForms(), forms_1.provideForms()]);
//# sourceMappingURL=main.js.map