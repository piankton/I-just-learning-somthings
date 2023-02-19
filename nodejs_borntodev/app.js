const express = require('express');
const app = express();
const port = 3000;

const debug = require('debug')('app');
//debug app /\/\

const path = require('path');

app.use(express.static(path.join(__dirname, "./public/demopage/")));

app.get("/", (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    debug("hi on port " + port);
});