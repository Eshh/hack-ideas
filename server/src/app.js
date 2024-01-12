const express = require("express");
const cors = require("cors");
const path = require("path");

//router groups
const api = require("./routes/api-v1");

const app = express();

// cors bypasser
app.use(cors());
// middleware to convert requests data to json before passing to route handlers
app.use(express.json());

// static site middleware
// app.use(express.static(path.join(__dirname, "..", "public")));

// end point handlers
app.use("/v1", api);
// client end
// app.get("/*", (req, res) =>
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"))
// );
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("./public/index.html"));
// });
module.exports = app;
