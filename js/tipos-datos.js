// Tipos de datos (que pueden almacenar las variables o constantes)
// JavaScript tiene un tipado de datos débil y dinámico

var email = 'juan@gmail.com'; // dinámico quiere decir que el tipo de dato de la variable será el del valor asignado (inferencia de tipos)
email = 20; // débil quiere decir que aunque anteriormente tenga otro tipo se le puede cambiar

// Tipos de datos primitivos

// String o cadenas de caracteres (comillas dobles o simples)

var ciudad = 'Villa de \nMadrid';
var calle = "Avenida de O'Donell";
var direccion = 'Avenida de O\'Donell'; 

console.log(ciudad);
console.log(direccion);

// Number (todos los números enteros, flotantes, exponenciales, etc...)

var resultado = 8.65;

// Boolean (true o false)

var mayorEdad = false;

// undefined (tipo-valor);

var marca; // valor undefined cuando se declara

console.log(marca);

// null (tipo-valor)

var localidad = null; // para "asignar un valor del cual aún no sabemos qué tipo de dato va a tener" 


// Tipos compuestos (porque el desarrollador los crea a partir de los primitivos)

// Objetos y Arrays


