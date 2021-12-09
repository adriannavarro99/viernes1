var express = require("express");
var app = express();

var server = app.listen(8080);

var io = require("socket.io")(server);

app.use(express.static(__dirname +"/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function(socket){
    
    socket.on("color", function(color) {
        
        io.sockets.emit( 'listenAll', color);
    });
    
});

app.get("/", function(request, response){
    
    response.render("index");
});