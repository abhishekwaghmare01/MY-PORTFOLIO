const express = require('express');
const { sendEmailColtroller } = require('../controllers/controllersPortfolio');

// router object
const router = express.Router();

//routes
router.post('/sendEmail', sendEmailColtroller)

//export
module.exports = router;