import express from "express";
import path from "path";

const app = express();
const port: string = process.env.PORT || "8080";

// middleware //

app.use(express.static(path.resolve("client", "build")));
if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
} else {
  console.log(15)
  app.get("/*", (_, res) => {
    res.sendFile(path.resolve("client", "public", "index.html"));
  });
}
app.listen(port, () => {
  console.log(process.env.NODE_ENV)
  console.log("listening at port: " + port);
});
