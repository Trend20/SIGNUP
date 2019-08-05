const express = require('express');
const mysql = require('mysql');

//create connection

const db = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: '1234',
    database: 'SIGNUP'
});
//connect

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connection established');
});

const main = express();

//create db

main.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE SIGNUP';
    db.query(sql, err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    }
});

main.listen('3000',function(){
    console.log("Connected");
});