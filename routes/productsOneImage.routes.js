const express = require('express');
const { index, add, create, edit, update, remove } = require('../controllers/productsOneImageController');
const router = express.Router();

/* GET home page. */
router
    .get('/', index)
    .get('/add',add)
    .post('/add',create)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .delete('/delete/:id',remove)

module.exports = router;
