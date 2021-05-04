import express, { Router } from "express";
import path from "path";
import { CombinedRoutes } from "./routes/combinedRoutes";

const app = express();
const router = Router();
const port: string = process.env.PORT || "8080";

// set globals //
export const BASE_DIRECTORY = path.join(__dirname, "..");
// router //
app.use(new CombinedRoutes(router).init());
// middleware //

app.use(express.static(path.join(__dirname, "..", "client", "build")));
if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
} else {
  app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "public", "index.html"));
  });
}
app.listen(port, () => {
  console.log(process.env.NODE_ENV)
  console.log("listening at port: " + port);
});
