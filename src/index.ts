const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.options('*', cors());

app.get('/', function (req, res) {
    res.json('Hello World')
});

app.get('/my-api', (req, res)=>{
    res.json(JSON.stringify({message: "Аня-молодец"}))
});

app.listen(3000);

