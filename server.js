const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    return res.send("Hello, welcome!")
})

app.get('/time', (req,res) => {
    const today = new Date();

    return res.send(`The current date is ${today.toLocaleDateString()} and the current time is ${today.toLocaleTimeString()}`)
})

app.get('/random', (req, res) => {
    //send random number between 1 and 10
    return res.send('Random number : ' + Math.floor((Math.random() * 10) + 1));
})

app.get('/isNumber/:value', (req, res) => {
    //use of isNaN function
    if(isNaN(req.params.value)){
        return res.send("This is not a number")
    }

    return res.send("This is a number");
})

app.listen(3001, () => {
    console.log("The server is listening... 🐒") 
 });