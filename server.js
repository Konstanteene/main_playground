const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.use((req, res, next) => {
    console.log(req.url);
    next();
  });