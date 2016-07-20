"use strict";
var TrustedIdp = (function () {
    function TrustedIdp(realm, url, name, description, protocol, trustType, certificate, federationType, cacheTokens) {
        this.realm = realm;
        this.url = url;
        this.name = name;
        this.description = description;
        this.protocol = protocol;
        this.trustType = trustType;
        this.certificate = certificate;
        this.federationType = federationType;
        this.cacheTokens = cacheTokens;
    }
    return TrustedIdp;
}());
exports.TrustedIdp = TrustedIdp;
;
//# sourceMappingURL=trustedIdp.js.map