"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const app_1 = require("../app");
class TestController {
    index(_req, res) {
        return res.status(200).json({
            responseMsg: "all ok",
            data: {
                path: app_1.BASE_DIRECTORY
            }
        });
    }
}
exports.TestController = TestController;
;
//# sourceMappingURL=testController.js.map