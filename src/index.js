import cipher from './cipher.js';

//declaración de variables - manipulación del DOM desde el #id
let offsetCipher = document.getElementById('num-cipher'); //desplazamiento del cifrado
let messageInput = document.getElementById('msn-input'); //mensaje ingresado
let messageOutput = document.getElementById('msn-output'); //mensaje de salida

const btnEncode = document.getElementById('btnEncode'); //botón para cifrar
const btnDecode = document.getElementById('btnDecode'); //botón para descifrar
const btnClear = document.getElementById('btnClear'); //botón limpiar mensaje
const btnLink = document.getElementById('btnLink'); //botón enviar mensaje - simula envío 

//invocar cipher.encode
btnEncode.addEventListener('click', function(){
    let messageCipher = cipher.encode(offsetCipher.value, messageInput.value); 
    messageOutput.value = messageCipher; 
});

//invocar cipher.decode
btnDecode.addEventListener('click', function(){
    let messageCipher = cipher.decode(offsetCipher.value, messageInput.value); 
    messageOutput.value = messageCipher; 
});

//función para limpiar los campos 
btnClear.addEventListener('click', function() {
    document.getElementById('offsetCipher').offsetCipher.value = '';
    document.getElementById('messageInput').messageInput.value = '';
    document.getElementById('messageOutput').messageOutput.value = '';
    alert('¡Ingresa un nuevo mensaje!');
})

//función para simular envío del mensaje
btnLink.addEventListener('click', function() {
    alert('¡Tu mensaje ha sido enviado!');
})








