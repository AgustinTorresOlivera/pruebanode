let express = require("express");
let app = express();
const path = require ("path");

app.listen(3000, () => console.log("Servidor corriendo"));

app.get("/", function(req,res){
    let htmlPath = path.resolve (__dirname, "./views/index.html")
    res.sendFile(htmlPath)
})
  //console.log(__dirname); __dirname hace referencia de donde esta la ruta
app.get("/contacto", function(req,res){
    res.send("Estamos en contacto con usted, aguarde porfavor")
})
app.get("/array", function(req,res){
    res.send([1,2,3,4])
})


