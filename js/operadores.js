// Operadores

// Operadores aritméticos

// + y -

var resultado = 6;
var factorCorrecion = 4;

var puntuacion = resultado - factorCorrecion;
console.log(puntuacion);

// El operador de suma en el caso de tipos string los concatena

var nombre = 'Laura';
var mensaje = 'Hola ';

mensaje = mensaje + nombre;
console.log(mensaje);

// * y /

var a = 10;
var b = 2;

var resultado = a / b;
console.log(resultado);

// Cuando una operación aritmética no puede dar un resultado devuelve NaN

a = 'Pepe';
resultado = a * b;
console.log(resultado);

// Resto %

var ejemploResto = 13 % 2;
console.log(ejemploResto);

// Incremento ++ y decremento -- (operadores unarios)

var c = 10;
c++; // Añade una unidad
console.log(c);
c--;
console.log(c);

// Operadores de asignación

// =

// adición +=, -=, *=, /=, %=

var puntuacion1 = 4;
var puntuacion2 = 9;

puntuacion1 += puntuacion2;
console.log(puntuacion1);

// Operadores de comparación

// Operador de igualdad ==

var ciudad = 'Madrid';
var termino = 'Madrid';

var hayCoincidencia = ciudad == termino;
console.log(hayCoincidencia);

// No es estricto con los tipos de datos

var valor1 = 3;
var valor2 = '3';

hayCoincidencia = valor1 == valor2;
console.log(hayCoincidencia);

// Operador de igualdad estricta === (Necesita que tipo de dato y valor sean iguales)

hayCoincidencia = valor1 === valor2; // Más utilizado
console.log(hayCoincidencia);

// Operador de desigualdad !=

// Operador de desigualdad estricta !== (Más utilizado)

// Operador mayor que >

valor1 = 8.4;
valor2 = 3;

resultado = valor1 > valor2; // devolverá true
console.log(resultado);

// Operador menor que <

// Operador mayor o igual que >=

// Operador menor o igual que <=

// Operadores Lógicos

// Operador lógico AND && (devuelve true cuando las dos expresiones que evalúa son true)

valor1 = 12;
valor2 = 13;
var valor3 = 12;

resultado = valor2 > valor1 && valor1 === valor3; 
console.log(resultado);

// Operador lógico OR || (devuelve true cuando uno de las expresiones que evalúa es true)

resultado = valor2 < valor1 || valor1 === valor3; 
console.log(resultado);

// Operador lógico NOT ! (negación unaria) // Normalmente utilizado para variables booleanas

var mayorEdad = false;

mayorEdad = !mayorEdad;
console.log(mayorEdad);

// Operador condicional Ternario

// pendiente