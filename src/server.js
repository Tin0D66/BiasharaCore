const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('./config/db');

// Import
const mainRoute = require('./routes');

// Middleware
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.use(morgan('dev'));

app.use('', mainRoute);

const port = 4000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥 \nKitu Kimepop`));
