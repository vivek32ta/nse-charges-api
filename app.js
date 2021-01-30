const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
const restrictOrigin = require("./middlewares/restrictOrigin");

const app = express();
var router = require('./routes/router')

const PORT = process.env.PORT || 5000;

app.use(restrictOrigin);

app.use(express.json());
app.use(morgan("dev"));
app.use("/api",router);

app.get("/ping", (req, res) => {
  return res.send({
    status: "Healthy!",
  });
});


app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});
