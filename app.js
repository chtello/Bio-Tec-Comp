const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const app = express();

let uri = "mongodb+srv://chtello:RIOitelhpi4A5ttp@cluster0.fj6k3k3.mongodb.net/Genetica?retryWrites=true&w=majority";
let port = 3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/AxGen"))



app.use("/",require("./router/rutPag"))
app.use("/GGuar",require("./router/CrdGenes"))



app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


mongoose.connect(uri,
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(console.log("Connected to database"))
    .catch((error)=>console.log("tienes un error, tu error es :" + error))


app.listen(port, () => {
    console.log("listo")
});

