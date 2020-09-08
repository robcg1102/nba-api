const Team = require("../models/Team");

exports.allTeams = (req, res) => {
  Team.find()
    .then((teams) => {
      res.json(teams);
    })
    .catch((err) => {
      res.json({ err: err });
    });
};

/* exports.createTeam = (req, res) => {
  const { nombre, ciudad, fundado, conferencia, pabellon, imgurl } = req.body;

  Team.create({
    nombre: nombre,
    ciudad: ciudad,
    fundado: fundado,
    conferencia: conferencia,
    pabellon: pabellon,
    imgurl: imgurl,
  })
    .then(() => {
      res.json({ ok: "added new team" });
    })
    .catch((err) => {
      res.json({ err: err });
    });
}; */

exports.oneTeam = (req, res) => {
  Team.findById(req.params.id)
    .then((team) => {
      res.json(team);
    })
    .catch((err) => {
      res.json({ err: err });
    });
};
