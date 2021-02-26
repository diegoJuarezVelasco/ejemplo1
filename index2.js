var Http = require( 'http' );
var fs = require("fs");
var server = Http.createServer(function(request,response){
    console.log('Alguien entro . . . . 1,2,3');
    fs.readFile("hola.html", function (err, datos){
        console.log('Alguien entro . . . . 1,2,3');
        response.write(datos);
        response.end();
    });
    
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});