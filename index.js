const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8082
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.listen(PORT, () => {
    console.log(`server is working ON PORT ${PORT}`);
    })