
let socket = io( 'http://localhost:8888' );

const person=prompt("What is your name?");



$( '.messageForm' ).on( 'submit', function(event){
    event.preventDefault();
    
    let userName = person;
    if(userName==null){
        alert("You must provide a name before chatting!!!")
    }else{
    let userMessage = $( '#userMessage' ).val();

    let send = {
        name: userName,
        message: userMessage
    };

    socket.emit( 'sendMessage', send );
    document.querySelector("form").reset();



}});

socket.on( 'sendAll', function( data ){
    let newMessage = `<p> ${data.name}: ${data.message} </p>`;
    $( '.messageBox' ).append( newMessage );
});