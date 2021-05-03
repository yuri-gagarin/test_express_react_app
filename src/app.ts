import express from "express";
import path from "path";

const app = express();
const port: string = process.env.PORT || "8080";

// middleware //

app.use(express.static(path.join(__dirname, "..", "client", "build")));
console.log("current path:");
console.log(path.join(__dirname, "..", "client", "build"));
if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
} else {
  app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "publc", "index.html"));
  });
}
app.listen(port, () => {
  console.log(process.env.NODE_ENV)
  console.log("listening at port: " + port);
});
