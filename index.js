'use strict';

var calculator = require('./app/suma');

var a = 15;
var b = 5;


console.log(`Division ${a} + ${b} = ${calculator.divide(a,b)}`);
const suma = calculator.divide(a,b); 
console.log(suma)

const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req,res) => res.send('hello world!!'))

async function main(){
   await app.listen(port);
   console.log('server is running')
    }
main();
//app.listen(port, () => console.log('Server on port:', port))