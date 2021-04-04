const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/errors");

const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//import all routers
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
