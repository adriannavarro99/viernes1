console.log("Connection!");

let socket = io( 'http://localhost:8080');

$('#notify').on('click', function(event){
    event.preventDefault();
    socket.emit('notify');
});


socket.on('joined', function(data){
    let notification = `<p>${data} *</ps>`
    $('.chatbox').append(notification);
});

socket.on('notification', function(data){
    let notification = `<p>${data} </p>`
    $('.chatbox').append(notification);
});

socket.on('left', function(data){
    let notification = `<p>${data} </p>`
    $('.chatbox').append(notification);
});