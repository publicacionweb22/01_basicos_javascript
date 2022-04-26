// Objetos en JavaScript

// Hay una manera muy sencilla de generar objetos en JavaScript como literales

var jugador1 = {
    nombre: 'Lionel',
    apellidos: 'Messi',
    dorsal: '4',
    goles: 0,
    equipos: ['F.C. Barcelona', 'PSG'],
    marcarGol() {
        this.goles++;
    }
}

console.log(jugador1);

// Acceso a las propiedades del objeto (notación del punto)

console.log(jugador1.apellidos);

// Invocación de un método de un objeto (notación del punto)

jugador1.marcarGol();

console.log(jugador1.goles);