// Libro: "JavaScript Eloquente", Haverbeke
// Pág. 79 - Cap. 4
// Ejercicio: "LISTA"

/* Consigna:
Como bloques genéricos de valores, los objetos se pueden utilizar para construir
todo tipo de estructuras de datos. Una estructura de datos común es la lista
(no confundir con arrays). Una lista es un conjunto anidado de objetos, donde
el primer objeto contiene una referencia al segundo, el segundo al tercero, y así
sucesivamente:
let list = {
value: 1,
rest: {
value: 2,
rest: {
value: 3,
rest: null
}
}
};
Los objetos resultantes forman una cadena, como se muestra en el siguiente
diagrama:
value: 1
rest:

value: 2
rest:

value: 3
rest: null

Una ventaja de las listas es que pueden compartir partes de su estructura.
Por ejemplo, si creo dos nuevos valores {value: 0, rest: list} y {value:
-1, rest: list} (siendo list la referencia definida anteriormente), son listas
independientes, pero comparten la estructura que conforma sus últimos tres
elementos. La lista original también sigue siendo válida como una lista de tres
elementos.

Escribe una función arrayToList que construya una estructura de lista como
la mostrada cuando se le da [1, 2, 3] como argumento. También escribe una
función listToArray que produzca un array a partir de una lista. Agrega las
funciones auxiliares prepend, que toma un elemento y una lista y crea una
nueva lista que añade el elemento al principio de la lista de entrada, y nth, que
toma una lista y un número y devuelve el elemento en la posición dada en la
lista (siendo cero el primer elemento) o undefined cuando no hay tal elemento.
Si aún no lo has hecho, escribe también una versión recursiva de nth.

*/