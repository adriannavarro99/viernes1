var express = require('express');
var app = express();
var server=app.listen(8080, function () {
    console.log("Listening on port 8080");
})
var io = require("socket.io")(server);
var count=0;

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (request, response) {

    response.render("index")

})

io.on("connection",function(socket){
    
    socket.emit("count",{msg: `The button has been pushed ${count} time(s)`});
    
    socket.on("button_push",function(){
        count +=1;
        socket.emit("updated_count",{msg: `The button has been pushed ${count} time(s)`});
    
    });
    socket.on("reset",function(){
        count=0;
        socket.emit("reset_count",{msg: `The button has been pushed ${count} time(s)`});
    });

});


