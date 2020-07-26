
require('./models/db');
const express = require('express');
const apiRoute = require('./routes/api');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoute);

app.listen(3000, () => console.log('Server start running...'));
