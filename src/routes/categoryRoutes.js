const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/search', categoryController.getCategories);

module.exports = router;
