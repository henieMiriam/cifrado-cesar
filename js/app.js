//Mediante un prompt se lepide alusuario ingresar una cadena de texto
var entrada = prompt("hola!!!  por favor ingresa un texto \n (recuerda que deben ser solo letras ...)");

// si la cadena ingresada no es una letra se regresara un mensaje para pedir de nuevo el dato

if(entrada == null || entrada.length == 0 || /^\s+$/.test(entrada)){
    entrada = prompt("ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco");
     
