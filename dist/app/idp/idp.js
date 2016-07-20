"use strict";
var IDP = (function () {
    function IDP(realm, uri, serviceDisplayName, serviceDescription, idpUrl, stsUrl, certificate, certificatePassword, provideIdpList, useCurrentIdp, rpSingleSignOutCleanupConfirmation, rpSingleSignOutConfirmation, claimTypesOffered) {
        this.realm = realm;
        this.uri = uri;
        this.serviceDisplayName = serviceDisplayName;
        this.serviceDescription = serviceDescription;
        this.idpUrl = idpUrl;
        this.stsUrl = stsUrl;
        this.certificate = certificate;
        this.certificatePassword = certificatePassword;
        this.provideIdpList = provideIdpList;
        this.useCurrentIdp = useCurrentIdp;
        this.rpSingleSignOutCleanupConfirmation = rpSingleSignOutCleanupConfirmation;
        this.rpSingleSignOutConfirmation = rpSingleSignOutConfirmation;
        this.claimTypesOffered = claimTypesOffered;
    }
    return IDP;
}());
exports.IDP = IDP;
;
//# sourceMappingURL=idp.js.map