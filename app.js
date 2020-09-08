const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const hbs = require("hbs");
const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require("./routes/mainRoutes"));
app.use("/api", require("./routes/playersRoutes"));
app.use("/api", require("./routes/teamsRoutes"));

app.use((req, res) => {
  res.json({
    error: "invalide route",
  });
});

module.exports = app;
