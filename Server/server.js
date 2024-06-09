const express = require('express');
const routes = require('./routes/index');
const userRoute = require('./routes/users');
const invoiceRoute = require('./routes/invoice');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 2000;

app.use('/', routes);
app.use('/users', userRoute);
app.use('/invoice', invoiceRoute);

app.listen(PORT, () => {
    console.log(`Listening from PORT:${PORT}`)
})