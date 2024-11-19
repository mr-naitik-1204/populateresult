var express = require('express');
var router = express.Router();
const ar = require("../controler/Name")
/* GET home page. */
router.post('/createdata', ar.createdata);
router.get('/showdata', ar.showdata);
router.delete('/deletedata/:id', ar.deletedata);
router.patch('/updatedata/:id', ar.updatedata);


module.exports = router;
