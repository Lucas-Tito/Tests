
//slipt() retorna cada caracter individualmente
//join() junta todas os caracteres de novo

function reverseString(str) {
    return str.split("").reverse().join("");
  }

console.log(reverseString("ola"));