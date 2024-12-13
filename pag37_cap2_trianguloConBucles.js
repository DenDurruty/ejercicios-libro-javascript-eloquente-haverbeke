// Libro: "JavaScript Eloquente", Haverbeke
// Pág. 37 - Cap. 2
// Ejercicio: "TRIÁNGULO CON BUCLES"

/* Consigna:
Escribe un bucle que realice siete llamadas a console.log para mostrar el
siguiente triángulo.

#
##
###
####
#####
######
#######

*/

// Solución A:
console.log("Solución A:");
var i = 1;
var triangulo = [];

while (i <= 7) {
    triangulo.push("#");
    console.log(triangulo.join(""));
    i++;
}


// Solución B:
console.log();
console.log("Solución B:");
var j = 1;
var miTriangulo = [];


for (i = 1; i <= 7; i++) {
    miTriangulo.push("#");
    console.log(miTriangulo.join(""));
}


// Solución C:
console.log();
console.log("Solución C:");

for (let i = 1; i <= 7; i++) {
     console.log("#".repeat(i));
}


// node pag37_cap2_trianguloConBucles.js 
    

