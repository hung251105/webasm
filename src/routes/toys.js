const express = require('express');
const router = express.Router();

const toyController = require('../app/controllers/ToyController');

router.get('/create', toyController.create);
router.get('/search', toyController.search);
router.post('/store', toyController.store);
router.get('/:toyID/edit', toyController.edit);
router.put('/:toyID', toyController.update);
router.delete('/:toyID', toyController.destroy);
router.get('/:toyID', toyController.show);

module.exports = router;