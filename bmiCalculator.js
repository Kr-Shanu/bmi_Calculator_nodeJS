const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator", function(req, res)
{
    res.sendFile(__dirname+"/index.html");
});

app.post("/bmicalculator", function(req, res)
{
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);
    var bmi = weight/(height*height);
    res.send("The BMI of your body is: "+bmi)
});

app.listen(3000, function()
{
    console.log("Server started working");
});
