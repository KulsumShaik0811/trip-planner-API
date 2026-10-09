const express = require("express");
const t = require("../controllers/tripControllers")
const router = express.Router();

router.get("", t.getTrips);

router.get("/booked", t.getBooked);

router.get("/:id", t.getTrip);

router.post("", t.createTrip);

router.put("/:id", t.putTrip);

router.delete("/:id", t.deleteTrip);

module.exports = router;