//implementación del objeto cipher
const cipher = {
  
  //método para cifrar 
  encode: function (offset, string) {
    let messageCipher = ''; // nuevo mensaje ingresado
    string = string.toUpperCase(); // convertir texto ingresado a mayúsculas 
    // ciclo for para recorrer el texto ingresado para convertirlo a valor unicode y luego en cadena 
    for (let i = 0; i < string.length; i++) { 
      let txtConvertAscii = string.charCodeAt(i); // devuelve el numero del valor unicode
      if (txtConvertAscii >= 65 && txtConvertAscii <= 90) { // rango de letras mayúsculas en ASCII
        messageCipher += String.fromCharCode( //devuelve la cadena creada de la secuencia de valores unicode
          (txtConvertAscii - 65 + parseInt(offset)) % 26 + 65 //cálculo para cifrar
        ); 
      }
    }
    return messageCipher; // retorna mensaje cifrado
  },

  //método para descifrar   
  decode: function (offset, string) {
    let messageCipher = ''; // nuevo mensaje ingresado
    string = string.toUpperCase(); 
    for (let i = 0; i < string.length; i++) {
      let txtConvertAscii = string.charCodeAt(i); // devuelve el numero del valor unicode
      if (txtConvertAscii >= 65 && txtConvertAscii <= 90) { //rango de letras mayúsculas en ASCII
        messageCipher += String.fromCharCode( //devuelve la cadena creada de la secuencia de valores unicode
          (txtConvertAscii + 65 - parseInt(offset)) % 26 + 65 //cálculo para descifrar 
        ); 
      }
    }
    return messageCipher; // retorna mensaje descifrado
  }
};

export default cipher;
