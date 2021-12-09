console.log("Server On (Now)");

let socket = io("http://localhost:8080");


let username = prompt("Introduce your name:");



$('.formMessages').on('submit', function(event){
    event.preventDefault();
    let message = $('#message').val();
    
    let info={
        name: username,
        message: message,
    };
    socket.emit('information', info);
});

socket.on('msj', function(info){
    let message = `<p>${info.name} :  ${info.message}</p>`;
    $('.messages' ).append(message);
});

socket.on('display', function(info){
    for(let i = 0; i<info.length;i++){
        let message = `<p>${info[i].name} :  ${info[i].message}</p>`;
        $('.messages' ).append(message);
    }
});


$('.formUsers').on('submit', function(event){
    event.preventDefault();
    let users = $('#formUsers').val();

    let  user = {
        name: username,
        message: users,
    };

    
    socket.emit('user', user);
});


socket.on('display', function(info){
    for(let i = 0; i<info.length;i++){
        let users = `<p>${info[i].message} </p>`;
        $('.users' ).append(users);
    }
});