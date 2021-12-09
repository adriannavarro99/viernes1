console.log("Connection!");

let socket = io( 'http://localhost:8080');

$('.green').on('click', function(event){
    event.preventDefault();
    let color = "green";
    socket.emit("color", color);
});

$('.blue').on('click', function(event){
    event.preventDefault();
    let color = "blue";
    socket.emit("color", color);
});

$('.pink').on('click', function(event){
    event.preventDefault();
    let color = "pink";
    socket.emit("color", color);
});

socket.on("listenAll", function(color){
    var main = document.querySelector(".main");
    main.style.backgroundColor = color;
});