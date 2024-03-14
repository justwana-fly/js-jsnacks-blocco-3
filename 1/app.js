// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


// Crea un array vuoto
var numeri = [];

// Continua a chiedere all'utente di inserire un numero finché la somma degli elementi è minore di 50
while (sommaArray(numeri) < 50) {
    var numero = parseInt(prompt("Inserisci un numero:"));

    // Aggiungi il numero all'array
    numeri.push(numero);
}

// Funzione per calcolare la somma degli elementi di un array
function sommaArray(array) {
    var somma = 0;
    for (var i = 0; i < array.length; i++) {
        somma += array[i];
    }
    return somma;
}

// Stampa l'array
console.log("Array finale:", numeri);








