const express = require( 'express' );
const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(8888);

const io = require( 'socket.io' )( server );
const chatlog=[];

io.on( 'connection', function( socket ){
 


    socket.on( 'general', function( data ){
        chatlog.push(data);
        
        io.sockets.emit( 'listenAll', {message: "Broadcast message"} )
    });

    socket.on( 'sendMessage', function( data ){
        io.sockets.emit( 'sendAll', data );
    });
    
});