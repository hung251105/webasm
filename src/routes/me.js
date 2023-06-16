const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController.js');

// [GET] /me/stored/toys
router.get('/stored/toys', meController.storedToys);

module.exports = router;