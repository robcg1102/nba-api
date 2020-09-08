const express = require("express");
const router = express.Router();

const {
  allTeams,/* 
  createTeam, */
  oneTeam,
} = require("../controllers/teamsController");

router.get("/teams", allTeams);/* 
router.post("/teams", createTeam); */
router.get("/teams/:id", oneTeam);

module.exports = router;
