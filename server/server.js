const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const cors = require('cors');
dotEnv.config();

const PORT = process.env.PORT;

app.use(cors());

app.use()

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})