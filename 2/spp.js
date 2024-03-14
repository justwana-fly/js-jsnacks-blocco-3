/**
 * Snack3
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */

function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generaArrayCasuale() {
    var array = [];
    for (var i = 0; i < 10; i++) {
        array.push(numeroCasuale(1, 100));
    }
    return array;
}

var N = parseInt(prompt("Inserisci un numero:"));

for (var i = 0; i < N; i++) {
    var arrayCasuale = generaArrayCasuale();
    console.log("Array", i + 1 + ":", arrayCasuale);
}


