const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    nombre: String,
    ciudad: String,
    fundado: Number,
    conferencia: String,
    pabellon: String,
    imgurl: String,
  }
);

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;