"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_DIRECTORY = void 0;
const express_1 = __importStar(require("express"));
const path_1 = __importDefault(require("path"));
const combinedRoutes_1 = require("./routes/combinedRoutes");
const app = express_1.default();
const router = express_1.Router();
const port = process.env.PORT || "8080";
// set globals //
exports.BASE_DIRECTORY = path_1.default.join(__dirname, "..");
// router //
app.use(new combinedRoutes_1.CombinedRoutes(router).init());
// middleware //
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "client", "build")));
if (process.env.NODE_ENV === "production") {
    app.get("/*", (_, res) => {
        res.sendFile(path_1.default.join(__dirname, "..", "client", "build", "index.html"));
    });
}
else {
    app.get("/*", (_, res) => {
        res.sendFile(path_1.default.join(__dirname, "..", "client", "public", "index.html"));
    });
}
app.listen(port, () => {
    console.log(process.env.NODE_ENV);
    console.log("listening at port: " + port);
});
//# sourceMappingURL=app.js.map