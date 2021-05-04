"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedRoutes = void 0;
// test routes and controller //
const testController_1 = require("../controllers/testController");
const testRoutes_1 = require("./testRoutes");
class CombinedRoutes {
    constructor(router) {
        this.router = router;
    }
    init() {
        this.combineRoutes(this.router);
        return this.router;
    }
    combineRoutes(router) {
        new testRoutes_1.TestRoutes(router, new testController_1.TestController());
    }
}
exports.CombinedRoutes = CombinedRoutes;
//# sourceMappingURL=combinedRoutes.js.map