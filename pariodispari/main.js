// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

// L'utente sceglie un numero tra 1 e 5
var numero_utente = parseInt(prompt("Inserisci un numero tra 1 e 5"));

if (numero_utente <= 5){
    console.log("Il numero che hai scelto è " + numero_utente);
}else{
    numero_utente = parseInt(prompt("Inserisci un numero tra 1 e 5"));
}

// L'utente sceglie se la somma dei numeri sarà un numero "pari" o "dispari"
var somma_vincitrice = prompt("Inserisci se la somma dei numeri sarà un numero pari o dispari");

if (somma_vincitrice === "pari" || somma_vincitrice === "dispari"){
    console.log("La somma dei due numeri per te sarà " + somma_vincitrice);
}else{
    somma_vincitrice = prompt("Inserisci se la somma dei numeri sarà un numero pari o dispari");
}


var numero_pc = Math.floor(Math.random() * 5) + 1;
console.log(numero_pc);
