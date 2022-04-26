// Estructuras en JavaScripts

// Estructura condicional if (si se cumple la expresión entre paréntesis se ejecuta el código entre llaves y si no no hace nada)

var nombre = 'Lucía';
var edad = 15;
var mayorEdad;

if (edad >= 18) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
}

if (edad < 18)
    console.log('Menor edad'); // Si solo se indica una línea a ejecutar se pueden aliviar las llaves

// Estructura condicional if else 

var a = 10;
var b = 20;

if (a > b) {
    console.log('a es mayor que b');
} else {
    console.log('a es menor o igual que b'); // Se ejecutará cuando la expresión evaluada devuelva false
}

// Estructura condicional if else if (idem anterior pero con varios if)

if (a > b) {
    console.log('a es mayor que b');
} else if (a === b) {
    console.log('a es igual a b'); 
} else {
    console.log('a es menor que b'); // Se ejecutará si ninguna de las expresiones devolviera true
}

// Estructura condicional switch

// Ver plataforma

// Estructura iterativas (bucles)

// Ciclo for

for (i=0; i < 10; i++) { // Las tres expresiones determinan que el bucle se ejecutará 10 veces
    console.log('Hola');
    console.log('En cada iteración o bucle el valor de i será ' + i);
}

// Ciclo while

// Ver en plataforma

// Ciclo do while

// Ver en plataforma

