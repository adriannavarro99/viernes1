//Imports
const express = require('express');
const app = express();

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));



//Server
const server = app.listen(8080, function(){
    console.log('Server with socket.io')
})

let prev = [];
let users = [];

const io = require('socket.io')(server)

io.on("connection", function (socket) {
    console.log("Someone connected1!");
    socket.emit('display', prev);
    
    socket.on("information", function (info) {
        prev.push(info);
        io.sockets.emit('msj', info);
    });
});



io.on("connection", function (socket) {
    console.log("Someone connected2!");
    socket.emit('display', users);
    
    socket.on("user", function (info) {
        prev.push(info);
        io.sockets.emit('msj', info);
    });
});

//Routes
app.get('/', function( request, response ){
	response.render( 'index' ); 
});



