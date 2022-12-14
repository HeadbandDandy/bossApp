const express = require('express');
const { json } = require('express/lib/response');
const db = require('./db/connection')
const PORT = process.env.PORT || 3001 
const routes = require('./routes/apiRoutes')


const app = express();

app.use(express.urlencoded);
app.use(express.json())


app.use((req, res) => {
    res.status(404).end();
});


db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

});