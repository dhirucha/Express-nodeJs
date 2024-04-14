
const express = require("express");

const app = express();

const PORT = 4010;
const HOSTENAME = "localhost";

app.get('/', () => {
    
})

app.listen(PORT, () => {
    console.log(`Server running at ${HOSTENAME}: ${PORT}`);
});