//escuchar eventos del DOM
//invocar cipher.encode y cipher.decode
//actualizar resultado en textarea
import cipher from './cipher.js';

//declaración de variables 
let offsetCipher = document.getElementById('num-cipher').value; //desplazamiento del cifrado
let messageInput = document.getElementById('msn-input').value; //mensaje ingresado
let messageOutput = document.getElementById('msn-output').value; //mensaje de salida

// por la funcionalidad de los botones, estos deberían ser constantes o variables?
const btnEncode = document.getElementById('btnEncode'); //botón cifrar
const btnDecode = document.getElementById('btnDecode'); //botón descrar
//const btnLink = document.getElementById('btnLink'); botón enviar ... se puede hacer?
//simular envío 

btnEncode.addEventListener('click', function(){
    let messageCipher = cipher.Encode(offsetCipher.value, messageInput.value); 
    messageOutput.value = messageCipher; 
});

btnDecode.addEventListener('click', function(){
    let messageCipher = cipher.Decode(offsetCipher.value, messageInput.value); 
    messageOutput.value = messageCipher; 
});

/*function clear(){
    document.getElementById('offsetCipher', 'messageInput', 'messageOutput').value = ''; 
}*/










