const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Partlist = new Schema({
    amazon:{
        type: Array,
        required: true
    },
    newegg:{
        type: Array,
        required: true
    }
});