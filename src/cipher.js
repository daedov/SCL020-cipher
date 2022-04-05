//métodos: cipher.encode (offset right, string) y cipher.decode (offset left, string)

//function nameFunction(param1, param2){} los parametros son usados para defirnir una función

//implementar objeto cipher
const cipher = {
  //función con 2 parámetros: desplazamiento y texto
  Encode: function (offset, string) {
    let messageCipher = ""; // nuevo mensaje ingresado
    for (i = 0; i < string.length; i++) {
    //método string.length para conocer la longitud de una cadena
      let txtConvertAscii = string.charCodeAt(i);// convertir a unicodes
      if(txtConvertAscii >= 65 && txtConvertAscii <= 90){
          messageCipher += String.fromCharCode((txtConvertAscii - 65 + parseInt(offset)) % 26 + 65)
      }
    }
    return messageCipher; 
  },

  decode: function(offset, string){
    let messageCipher = ""; // nuevo mensaje ingresado
    for (i = 0; i < string.length; i++) {
    //método string.length para conocer la longitud de una cadena
      let txtConvertAscii = string.charCodeAt(i);// convertir a unicodes
      if(txtConvertAscii >= 65 && txtConvertAscii <= 90){
          messageCipher += String.fromCharCode((txtConvertAscii - 90 + parseInt(offset)) % 26 + 90)
      }
    }
    return messageCipher; 
  }
};

export default cipher;
