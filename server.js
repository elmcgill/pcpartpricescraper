const express = require('express');
const app = express();
const port = 5000;

const inputRoutes = require('./api/routes/input');
const partsRoutes = require('./api/routes/parts');

app.use('/input', inputRoutes);
app.use('/parts', partsRoutes)

app.listen(port), () => console.log(`server started on port ${port}`);