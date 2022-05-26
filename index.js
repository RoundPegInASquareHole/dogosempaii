const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

const dogosempaiiAPI = require("./src/back-end/v1");
dogosempaiiAPI.register(app);

// Show index.html within public folder, in a static way when accesing the root "/"
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server currently listening on port ${port} ...`)
});