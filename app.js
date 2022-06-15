const express = require('express');
const app = express();
const db = require('./db');
const host = '0.0.0.0';
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');
app.use('/api/auth', AuthController);

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})