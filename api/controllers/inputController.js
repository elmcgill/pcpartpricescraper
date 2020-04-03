const mongoose = require('mongoose');
const partlist = require('../models/partlistModel');

const Partlist = mongoose.model('partlist', Partlist);

export const addNewList = (req, res) => {
    let newList = Partlist(req.body);
    console.log(newList);

    newList.save((err, list) => {
        if(err){
            res.send(err);
        }
        res.json(list);
    });
}