const express = require('express');
const router = express.Router();

router.get('/:userID', (req, res, next) => {
    const id = req.params.userID;
    res.status(200).json({
        message: 'parts were fected',
        userID : id
    });
});

module.exports = router;