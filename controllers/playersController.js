const Player = require("../models/Player");

exports.allPlayers = (req, res) => {
  Player.find()
    .then((players) => {
      res.json(players);
    })
    .catch((err) => {
      res.json({ err: err });
    });
};
/* 
exports.createPlayer = (req, res) => {
  const {
    nombre,
    nombreCompleto,
    temporadas,
    altura,
    peso,
    nacionalidad,
    titulos,
    imgUrl,
    MJ,
    PTS,
    RB,
    AS,
    TC,
    T3,
    TL,
  } = req.body;

  Player.create({
    nombre: nombre,
    nombreCompleto: nombreCompleto,
    temporadas: temporadas,
    altura: altura,
    peso: peso,
    nacionalidad: nacionalidad,
    titulos: titulos,
    imgUrl: imgUrl,
    estadisticas: {
      MJ: MJ,
      PTS: PTS,
      RB: RB,
      AS: AS,
      TC: TC,
      T3: T3,
      TL: TL,
    },
  })
    .then(() => {
      res.json({
        ok: "added new player",
      });
    })
    .catch((err) => {
      res.json({ err: err });
    });
};
 */
exports.onePlayer = (req, res) => {
  Player.findById(req.params.id)
    .then((player) => {
      res.json(player);
    })
    .catch((err) => {
      res.json({ err: err });
    });
};
