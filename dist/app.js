"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const port = process.env.PORT || "8080";
// middleware //
app.use(express_1.default.static(path_1.default.resolve("client", "build")));
if (process.env.NODE_ENV === "production") {
    app.get("/*", (_, res) => {
        res.sendFile(path_1.default.resolve("client", "build", "index.html"));
    });
}
else {
    console.log(15);
    app.get("/*", (_, res) => {
        res.sendFile(path_1.default.resolve("client", "public", "index.html"));
    });
}
app.listen(port, () => {
    console.log(process.env.NODE_ENV);
    console.log("listening at port: " + port);
});
//# sourceMappingURL=app.js.map