const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

const inputRoutes = require('./api/routes/input');
const partsRoutes = require('./api/routes/parts');

//Connect to the database
mongoose.Promise = global.Promise;
//Probably want to move this to a .env if/when production comes
mongoose.connect(`mongodb://localhost:27017/pcpricetracker`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/input', inputRoutes);
app.use('/parts', partsRoutes);

app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(port), () => console.log(`server started on port ${port}`);