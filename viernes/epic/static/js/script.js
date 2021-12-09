var socket = io();
socket.on("count",function(data){
    $(".topMessage").text(data.msg);
});

$("#button").click(function(){
    socket.emit("button_push");
    socket.on("updated_count",function(data){
        $(".topMessage").text(data.msg)
    });
});

$('#reset').on('click', function(event){
    event.preventDefault();
    let counter = 0;
    socket.emit('count', counter);
});
