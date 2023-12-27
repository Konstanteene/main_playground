const express = require('express');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'pages')));

// db 
var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE 
});
  
connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected');
});

// pages
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.use((req, res, next) => {
    console.log(req.url);
    next();
  });