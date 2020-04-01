const express = require('express');
const fs = require('fs');
const router = express.Router();
let list;

fs.readFile('sitelist.json', (err, data) => {
    // Catch this!
    if (err) throw err;
  
    list = JSON.parse(data);
    //console.log(loadedUsers);
});

router.get('/', (req, res, next) => {
    //const data = {};
    //if (fs.read('list.json').length !== 0) {
        //data = JSON.parse(fs.read('list.json'));
    //}
    res.status(200).json({
        message: 'parts were fected',
        parts: list
        //partsList : data
    });
});

module.exports = router;