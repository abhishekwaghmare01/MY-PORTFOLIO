const express = require('express');
const { sendEmailColtrollers } = require('../controllers/controllersPortfolio');

// router object
const router = express.Router();

//routes
router.post('/sendEmail', sendEmailColtroller)

//export
module.exports = router;