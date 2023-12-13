const express = require('express');
const app = express();

app.use(express.json());

app.get('/secret', (req, res) => {
    res.send("<Their key here!!>");
});

app.post('/success', (req, res) => {
    console.log("secret is: ", req.body);
    res.sendStatus(200)
})

app.listen(3001, () => console.log('App is listening on port 3001'));