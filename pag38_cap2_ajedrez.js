// Libro: "JavaScript Eloquente", Haverbeke
// Pág. 38 - Cap. 2
// Ejercicio: "TABLERO DE AJEDREZ"

/* Consigna:
Escribe un programa que cree una cadena que represente un tablero de 8x8,
usando caracteres de salto de línea para separar las líneas. En cada posición
del tablero hay un carácter de espacio "#". Los caracteres deben formar un 
tablero de ajedrez.

Al pasar esta cadena al console.log debería mostrar algo como esto:

 # # # # 
# # # # 
 # # # #
# # # #
 # # # # 
# # # # 
 # # # #
# # # #

Cuando tengas un programa que genere este patrón, define una variable size = 8 y 
cambia el programa para que funcione para cualquier size, generando un tablero
con el ancho y alto dados.


*/



/*
// Solución A:
console.log("");
console.log("SOLUCIÓN A:");

var i = 1;
var cadena = [];

while (i <= 16) {
    if (i % 2 === 0) {
        console.log(" ");
    } else {
        console.log("#");
    }
    i++;
}



// Solución B:
console.log("");
console.log("SOLUCIÓN B:");
j = 1;

while (j <= 8) {
    if (j % 2 === 0) {
        console.log(("#" + " ").repeat(4) + "\n");

    } else {
        console.log((" " + "#").repeat(4) + "\n");
    }
    j++;
}



// Solución C:
console.log("");
console.log("SOLUCIÓN C:");
z = 1;

while (z <= 8) {
    if (z % 2 === 0) {
        console.log(("#" + " ").repeat(4) + "\n" + (" " + "#").repeat(4));
    }
    z++;
}



// Solución D:
console.log("");
console.log("SOLUCIÓN D:");
x = 1;

while (x <= 4) {
        console.log(("#" + " ").repeat(4) + "\n" + (" " + "#").repeat(4));
        x++;
    }

console.log("");




// Solución E:
console.log("");
console.log("SOLUCIÓN E:");
var y = 1;
var sizes = 4;                   ;
var realSizes = sizes / 2


while (y <= (realSizes)) {
    if (y >= 2) {
        console.log(("#" + " ").repeat(realSizes) + "\n" + (" " + "#").repeat(realSizes));
    } else if (sizes === 1) {
        console.log("#" + " ");
    } else if (sizes === 0) {
        console.log("Por favor ingresa un número mayor a 0.");
    }
    y++;
}


console.log("");



// Solución F:
console.log("");
console.log("SOLUCIÓN F:");
var q = 1;
var sizess = 6;                   ;
var realSizess = sizess / 2

if (sizess === 1 || sizess === 0) {
    console.log("No es posible construir un tablero.");
} else {
    console.log("Este es un tablero de " + sizess + "x" + sizess + ":");
    while (q <= realSizess) {
        
        console.log(("#" + " ").repeat(realSizess) + "\n" + (" " + "#").repeat(realSizess));
        q++;
    }
    
}
*/


// Solución G:
console.log("");
console.log("SOLUCIÓN G:");

let size = 3; // Puedes cambiar este valor a cualquier tamaño

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    // Determina si la suma de x e y es par o impar
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n"; // Añade un salto de línea al final de cada fila
}

console.log(board);


console.log("");



// node pag38_cap2_ajedrez.js