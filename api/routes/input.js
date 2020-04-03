const express = require('express');
const fs = require('fs');
const controller = require('../controllers/inputController');
const router = express.Router();

router.post('/', (req, res, next) => {

    //const listInput = JSON.stringify(req.body);
    //fs.writeFile('sitelist.json', listInput, (err)=>{
        //if(err) throw err;
    //});
    controller.addNewList(req, res);

    res.status(201).json({
        receivedInput: req.body
    });
});

module.exports = router;