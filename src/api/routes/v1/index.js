const express = require("express");
const ticketSystemRoutes = require("./ticketsystem.route");

const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.send("OK"));

router.use("/ticketsystem", ticketSystemRoutes);

module.exports = router;
