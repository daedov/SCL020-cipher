//escuchar eventos del DOM
//invocar cipher.encode y cipher.decode
//actualizar resultado en textarea
import cipher from './cipher.js';

//declaración de variables 
let offsetCipher = document.getElementById('num-cipher'); //desplazamiento del cifrado

let messageInput = document.getElementById('msn-input'); //mensaje ingresado

let messageOutput = document.getElementById('msn-output'); //mensaje de salida


const btnEncode = document.getElementById('btnEncode'); //botón cifrar
const btnDecode = document.getElementById('btnDecode'); //botón descrar
//const btnLink = document.getElementById('btnLink'); botón enviar ...simular envío 

btnEncode.addEventListener('click', function(){
    let messageCipher = cipher.encode(offsetCipher.value, messageInput.value); 
    messageOutput.value = messageCipher; 
});

btnDecode.addEventListener('click', function(){
    let messageCipher = cipher.decode(offsetCipher.value, messageInput.value); 
    messageOutput.value = messageCipher; 
});

/*function clear(){
    document.getElementById('offsetCipher').value = ''; 
    document.getElementById('messageInput').value = ''; 
    document.getElementById('messageOutput').value = ''; 
}*/










