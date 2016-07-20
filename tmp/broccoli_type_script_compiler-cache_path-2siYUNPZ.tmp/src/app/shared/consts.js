"use strict";
var Consts = (function () {
    function Consts() {
    }
    Object.defineProperty(Consts, "URL_PREFIX", {
        get: function () { return "/fediz-idp/services/rs/"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consts, "LISTSIZE", {
        // Until we have Paging
        get: function () { return "500"; },
        enumerable: true,
        configurable: true
    });
    Consts.isLoggedIn = false;
    return Consts;
}());
exports.Consts = Consts;
//# sourceMappingURL=consts.js.map