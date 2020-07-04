const express = require('express');
const mongoose = require('mongoose');//mongodb
const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

async function start() {
    try {
        // firstly db connects
        await mongoose.connect(config.dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useFindAndModify: false
        });

        // then server starts
        app.listen (PORT, () => {
            console.log('Server has been started...');
        });
    } catch (e) {
        console.log(e);
    }
}

start();



