const express = require("express");
const router = express.Router();
const ngoController = require("../app/controllers/ngoController");

//crud operation for ngo
router.get("/ngo", ngoController.list);
router.put("/ngo/:id", ngoController.update);
router.delete("/ngo/:id", ngoController.destroy);
router.post("/ngo", ngoController.create);

module.exports = router;
