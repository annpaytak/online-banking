const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const corsOptions = {
//     origin: "http://localhost:3002"
// };

const dbConfig = require('./config/db.config');
// const routes = require('./routes');

const db = require('./models');
const Role = db.role;

const app = express();

// parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse request of content-type - application/json, helps to parse the request and create the req.body object
app.use(bodyParser.json());

// app.use(routes);
app.use(cors());//corsOptions


app.get('/', (req, res) => {
    res.status(200).send('Server is working...');
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/card.routes')(app);

const PORT = process.env.PORT || 3001;

db.mongoose.connect(dbConfig.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connect to MongoDВ');
        initial();
    })
    .catch(err => {
        console.error('Connection error', err);
        process.exit();
    });

// initial() function helps us to create 3 important rows in roles collection.
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: 'user'
            }).save(err => {
                if (err) {
                    console.log(err)
                }

                console.log('added "user" to roles collection')
            });

            new Role({
                name: 'moderator'
            }).save(err => {
                if (err) {
                    console.log(err)
                }

                console.log('added "moderator" to roles collection')
            });

            new Role({
                name: 'admin'
            }).save(err => {
                if (err) {
                    console.log(err)
                }

                console.log('added "admin" to roles collection')
            });
        }
    })
    try {
        // firstly db connects
        // then server starts
        app.listen (PORT, () => {
            console.log(`Server has been started and is running on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}



