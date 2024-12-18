// Libro: "JavaScript Eloquente", Haverbeke
// Pág. 80 - Cap. 4
// Ejercicio: "COMPARACIÓN PROFUNDA"

/* Consigna:
El operador == compara objetos por identidad, pero a veces preferirías comparar
los valores de sus propiedades reales.

Escribe una función deepEqual que tome dos valores y devuelva true solo si
son el mismo valor o son objetos con las mismas propiedades, donde los valores
de las propiedades son iguales cuando se comparan con una llamada recursiva
a deepEqual.

Para saber si los valores deben compararse directamente (usando el operador
=== para eso) o si sus propiedades deben compararse, puedes usar el operador
typeof. Si produce "object" para ambos valores, deberías hacer una compara-
ción profunda. Pero debes tener en cuenta una excepción tonta: debido a un
accidente histórico, typeof null también produce "object".
La función Object.keys será útil cuando necesites recorrer las propiedades
de los objetos para compararlas.

*/