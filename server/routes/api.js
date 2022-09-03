const express = require("express");
const router = express.Router();

/**
 * Import Controllers
 */

/**
 * GET REQUESTS
 */
router.get("/", (req, res) => {
  console.log("Success!!!");
  res.status(200).send("Successfully hit Server");
});

/**
 * POST REQUESTS
 */
router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

module.exports = router;
