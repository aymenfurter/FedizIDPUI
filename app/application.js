"use strict";
var Application = (function () {
    function Application(realm, role, serviceDisplayName, serviceDescription, protocol, tokenType, lifeTime, passiveRequestorEndpointConstraint) {
        this.realm = realm;
        this.role = role;
        this.serviceDisplayName = serviceDisplayName;
        this.serviceDescription = serviceDescription;
        this.protocol = protocol;
        this.tokenType = tokenType;
        this.lifeTime = lifeTime;
        this.passiveRequestorEndpointConstraint = passiveRequestorEndpointConstraint;
    }
    return Application;
}());
exports.Application = Application;
;
//# sourceMappingURL=application.js.map