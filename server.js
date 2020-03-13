const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const inputRoutes = require('./api/routes/input');
const partsRoutes = require('./api/routes/parts');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        return res.status(200).json({});
    }

    next();
});

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