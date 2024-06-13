const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const tradesRoutes = require('./routes/trades');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan(':method :url :status :response-time ms - :date[clf]'));

app.use('/', tradesRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
