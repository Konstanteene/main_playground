const express = require('express');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'pages')));

// db 
var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    // user     : process.env.MYSQL_USER || 'root',
    user     : 'root',
    password : process.env.MYSQL_ROOT_PASSWORD,
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

app.get('/rgb', (req, res) =>{
    res.sendFile(path.join(__dirname, 'pages', 'rgb.html'));
});

app.get('/sql_page', (req, res) =>{
    res.sendFile(path.join(__dirname, 'pages', 'sql_page.html'));
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.use((req, res, next) => {
    console.log(req.url);
    next();
  });