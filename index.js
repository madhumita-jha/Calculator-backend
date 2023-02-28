const express = require("express");
const bodyParser = require("body-parser");

const App = express();
App.use(bodyParser.urlencoded({extended:true}));

App.get("/", (req,res) => res.sendFile(__dirname + "/index.html"));

App.post("/", (req,res) =>{
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var result = n1+n2;
    res.send("The answer is" + result);
});

App.listen(3000, () => 
    console.log("The Server has started running on Port 3000")
);
