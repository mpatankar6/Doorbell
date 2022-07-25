const express = require('express');
const app = express();
const path = require('path')

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.use(express.static(__dirname + '/css'));

const server = app.listen(port, () => {
    
});

console.log('Server started at http://localhost:' + port);
