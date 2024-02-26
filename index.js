const express = require('express');
const app = express();
const cors = require('cors')
const route = require('./routes/route')
const PORT = process.env.PORT || 8082
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(route)


app.listen(PORT, () => {
    console.log(`server is working ON PORT ${PORT}`);
    })