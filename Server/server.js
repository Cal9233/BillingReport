const express = require('express');

const app = express();
const PORT = 1337;

app.get("/", (req, res) => {
    res.send("Hello from backend!")
});

app.listen(PORT, () => {
    console.log(`Listening from PORT:${PORT}`)
})