const express = require('express');
const router = express.Router();
const { profile } = require('../controllers/user_controller');

router.get('/profile', profile);

module.exports = router;
