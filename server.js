const express = require('express');

const app = express();

const PORT = 3000 || process.env.port;

const siteData = {
    "month" : "August",
    "host" : "cloudtype"
}

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('./index.ejs', siteData);
});

app.listen(PORT, console.log(`Server Listening on ${PORT}`));