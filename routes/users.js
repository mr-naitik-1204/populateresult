var express = require('express');
var router = express.Router();

let UC = require('../controler/result');

router.post('/createdata', UC.createdata);
router.get('/showdata', UC.showdata);
router.delete('/deletedata/:id', UC.deletedata); 
router.patch('/updatedata/:id', UC.updatedata); 

module.exports = router;
