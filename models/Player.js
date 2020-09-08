const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    nombre: String,
    nombreCompleto: String,
    temporadas: Number,
    altura: Number,
    peso: Number,
    nacionalidad: String,
    titulos: Number,
    imgUrl: String,
    estadisticas: 
      {
        MJ: Number,
        PTS: Number,
        RB: Number,
        AS: Number,
        TC: Number,
        T3: Number,
        TL: Number,
      },
    
  }
);

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;