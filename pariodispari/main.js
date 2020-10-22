// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

// L'utente sceglie un numero tra 1 e 5
var numero_utente = parseInt(prompt("Inserisci un numero tra 1 e 5"));

while(!(numero_utente <= 5 && numero_utente >= 1)){
    numero_utente = parseInt(prompt("Inserisci un numero tra 1 e 5"));
}
console.log("Il numero che hai scelto è " + numero_utente);



// L'utente sceglie se la somma dei numeri sarà un numero "pari" o "dispari"
var somma_vincitrice = (prompt("Inserisci se la somma dei numeri sarà un numero pari o dispari")).toLowerCase();

while(!(somma_vincitrice === "pari" || somma_vincitrice === "dispari")){
    somma_vincitrice = (prompt("Inserisci se la somma dei numeri sarà un numero pari o dispari")).toLowerCase();
}
console.log("La somma dei due numeri per te sarà: " + somma_vincitrice);




// Genero un numero casuale tra 1 e 5
var numero_pc = Math.floor(Math.random() * 5) + 1;
console.log("Il numero del tuo avversario è " +  numero_pc);



//Creo una funzione per fare la somma tra due numeri
function sommaNumeri(num1, num2) {
    var risultato = num1 + num2;
    return risultato;
}

var somma_finale = sommaNumeri(numero_utente, numero_pc);
console.log("La somma è " + somma_finale);

console.log("La somma è pari o dispari? " + tipo(somma_finale));



// Creo una funzione base per define se il risultato è pari o dispari
function tipo(tipovaribile){
    if (tipovaribile % 2 == 0){
        return "pari";
    }else{
        return "dispari";
    }
}
// function tipo(somma_finale){
//     if (somma_finale % 2 == 0){
//         return "pari";
//     }else{
//         return "dispari";
//     }
// }
// risultatoDellaFunzione -> 'pari' o 'dispari'
var risultatoDellaFunzione = tipo(somma_finale);


// somma_vincitrice è la stringa-> 'pari' o 'dispari'
// risultatoDellaFunzione è il risultato con la stringa -> 'pari' o 'dispari'
// Devo mettere a confronto le due stringhe per vedere se sono uguali o meno
if (somma_vincitrice == risultatoDellaFunzione) {
    alert("Hai vinto :)");
    console.log("Hai vinto :)");
} else {
    alert("Hai perso " + ":(");
    console.log("Hai perso " + ":(");
}
