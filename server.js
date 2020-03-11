const express = require('express');

const app = express();

app.get('/api/parts', (req, res) => {
    const parts = [
        {id: 1, type: "CPU", cost: "200"},
        {id: 2, type: "Motherboard", cost: "115"},
        {id: 3, type: "Memory", cost: "85"},
        {id: 4, type: "Video Card", cost: "300"},
        {id: 5, type: "Case", cost:"100"},
        {id: 6, type: "PSU", cost:"120"}
    ];

    res.json(parts);
});

const port = 5000;

app.listen(port), () => console.log(`server started on port ${port}`);