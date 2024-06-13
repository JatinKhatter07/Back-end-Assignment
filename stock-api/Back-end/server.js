const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const tradesRoutes = require('./routes/traders');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan(':method :url :status :response-time ms - :date[clf]'));

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.use('/', tradesRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
