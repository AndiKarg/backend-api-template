/* Routen:
 * Aktionen für Urls http://...../tab1/*
 * Aktionen für die http-Befehle */
const router = require("express").Router(); // Instanz des express Router
const validate = require("express-validation");
const controller = require("../../controllers/ticketsystem.controller");
const { createTicket } = require("../../validations/ticketsystem.validation");

router.get("/", (req, res) => {
  res.json({ response: "Hello" });
});

router.route("/createTicket").post(validate(createTicket), controller.createTicket);

module.exports = router;
