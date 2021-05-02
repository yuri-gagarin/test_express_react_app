import express from "express";

const app = express();
const port: string = process.env.PORT || "8080";

app.listen(port, () => {
  console.log("listening at port: " + port);
});
