// Funciones en JavaScript

suma(9, 10); // Se pueden invocar desde cualquier punto del programa

function suma(a, b) { // Declarar la función
    console.log(a + b);
}

// Invocación de la función

suma(2, 3);

suma(10, 20);

// Las funciones pueden ejecutar una lógica o retornar un valor

function multiplicacion(a, b) {
    return a * b;
}

// Cuando invoquemos funciones que retornan un valor habrá que asignarlas a una variable u otra función

var resultado = multiplicacion(2, 5);

console.log(resultado);