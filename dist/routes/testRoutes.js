"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
class TestRoutes {
    constructor(router, controller) {
        this.controller = controller;
        this.initializeRoutes(router);
    }
    initializeRoutes(router) {
        this.testIndexRote(router);
    }
    testIndexRote(router) {
        router
            .route("/api/test_index_route")
            .get(this.controller.index);
    }
}
exports.TestRoutes = TestRoutes;
;
//# sourceMappingURL=testRoutes.js.map