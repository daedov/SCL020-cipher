//métodos: cipher.encode (offset right, string) y cipher.decode (offset left, string)

//function nameFunction(param1, param2){} los parametros son usados para defirnir una función

//implementar objeto cipher
const cipher = {
  
  //función con 2 parámetros: desplazamiento y texto
  Encode: function (offset, string) {
    let messageCipher = ''; // nuevo mensaje ingresado
    for (let i = 0; i < string.length; i++) {
      //método string.length para conocer la longitud de la cadena
      let txtConvertAscii = string.charCodeAt(i); // devuelve el numero del valor unicode
      if (txtConvertAscii >= 97 && txtConvertAscii <= 122) {
        //rango de letras mayúsculas 65-90 en ascii
        messageCipher += String.fromCharCode(
          //devuelve la cadena creada de la secuencia de valores unicode
          (txtConvertAscii - 97 + parseInt(offset)) % 26 + 122
        ); //cálculo para cifrar
      }
    }
    return messageCipher; // mensaje cifrado
  },

  Decode: function (offset, string) {
    let messageCipher = ''; // nuevo mensaje ingresado
    for (let i = 0; i < string.length; i++) {
      //método string.length para conocer la longitud de una cadena
      let txtConvertAscii = string.charCodeAt(i); // convertir a unicodes
      if (txtConvertAscii >= 97 && txtConvertAscii <= 122) {
        //rango de letras mayúsculas 65-90 en ascii
        messageCipher += String.fromCharCode(
          (txtConvertAscii - 122 + parseInt(offset)) % 26 + 122
        ); //cálculo para descifrar???
      }
    }
    return messageCipher; //mensaje descifrado
  },
};

export default cipher;
