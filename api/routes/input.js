const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /input'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /input'
    });
});

router.get('/:userID', (req, res, next) => {
    const id = req.params.userID;
    if(id === 'special'){
        res.status(200).json({
            message:'This has zero purpose other than testing',
            id: id
        });
    }
    else{
        res.status(200).json({
            message:'This also is working',
            id: id
        });
    }
});

module.exports = router;