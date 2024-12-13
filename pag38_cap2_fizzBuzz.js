// Libro: "JavaScript Eloquente", Haverbeke
// Pág. 38 - Cap. 2
// Ejercicio: "FIZZBUZZ"

/* Consigna:
Escribe un programa que use console.log para imprimir todos los números del 1 al 100,
con dos excepciones. Para los números divisibles por 3, imprime "Fizz" en lugar del nú-
mero, y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los
números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para los números
que son divisibles solo por uno de esos).

(Esto es en realidad una pregunta de entrevista que se ha afirmado que elimina a un porcentaje 
significativo de candidatos a programadores. Entonces, si lo resolvistem tu valor en el mercado
laboral acaba de aumentar.)

*/

// Solución A:
console.log("");
console.log("Solución A:");
var i = 1;

while (i <= 100) {
    if (i % 3 == 0) {
        console.log("Fizz " + i);
    } if ((i % 5 == 0) & (i % 3 != 0)) {
        console.log("Buzz " + i);
    } else if ((i % 5 == 0) & (i % 3 == 0)) {
        console.log("FizzBuzz " + i);
    } else {
        console.log(i);
    }
    i++;
}


// Solución B:
console.log("");
console.log("Solución B:");

for (j = 1; j <= 100; j++) {
    if (j % 3 == 0) {
        console.log("Fizz " + j);
    } if ((j % 5 == 0) & (j % 3 != 0)) {
        console.log("Buzz " + j);
    } if ((j % 5 == 0) & (j % 3 == 0)) {
        console.log("FizzBuzz " + j);
    } else {
        console.log(j);
    }
}


// Solución C:
console.log("");
console.log("Solución C:");

for (let i = 1; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0) { 
        console.log("FizzBuzz");
     } else if (i % 3 === 0) { 
        console.log("Fizz");
     } else if (i % 5 === 0) { 
        console.log("Buzz");
     } else { console.log(i); }
 }





// node pag38_cap2_fizzBuzz.js