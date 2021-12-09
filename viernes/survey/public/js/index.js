console.log("connection!");

let socket = io('http://localhost:8080'); 

$('.form').on('submit', function(event){

    event.preventDefault();

    let firtsName = $('#name').val();
    let location = $('#location').val();
    let favorite = $('#language').val();
    let comment = $('#comment').val();
    let luckyNumber = Math.floor(Math.random()*1000);

    let info={
        name: firtsName,
        location: location,
        favorite: favorite,
        comment: comment,
        number: luckyNumber
    };
    
    socket.emit('information', info);
});

socket.on('showInfo', function(info){
    let message = `<p> You emited the following information to the server: Name: ${info.name}, Location: ${info.location}, Favorite language: ${info.favorite} and Comment: ${info.comment} and your lucky number emited by the server is: ${info.number} </p>`;
    $('.message' ).append(message);
});

