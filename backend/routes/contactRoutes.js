// const express = require("express")
// const router = express.Router()
// const { sendContactEmail } = require("../controllers/contactController")

// // POST route for contact form submission
// router.post("/send", sendContactEmail)

// module.exports = router



const express = require("express");
const { sendContactEmail } = require("../controllers/contactController");

const router = express.Router();

router.post("/", sendContactEmail);

module.exports = router;
