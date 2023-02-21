const express = require('express');
const app = express();
const PORT = process.env.PORT;

const debug = require('debug')('app');
//debug app /\/\

const path = require('path');

app.use(express.static(path.join(__dirname, "./public/demopage/")));

app.set("views","./src/views/");
app.set("view engine","ejs");


app.get("/", (req, res) => {
    res.render('index',{username:'chonlakorn'});
});

app.listen(PORT, () => {
    debug("hi on PORT " + PORT);
});