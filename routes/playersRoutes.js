const express = require("express");
const router = express.Router();

const {
  allPlayers,
/*   createPlayer, */
  onePlayer,
} = require("../controllers/playersController");

router.get("/players", allPlayers);/* 
router.post("/players", createPlayer); */
router.get("/players/:id", onePlayer);

module.exports = router;
