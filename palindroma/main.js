// scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)


// creo un array di nomi palindromi e non
var nomi = ["anna", "acca", "tot", "albero", "dvd", "osso", "riccio", "oro", "cane", "gatto"];

// creo un ciclo for per leggere tutti gli elementi presenti nell'array
for (var i = 0; i < nomi.length; i++) {
    // creo una varibile per definire quale elemento stiamo leggendo
    var nome_corrente = nomi[i];

    // Utilizzo la funzione creata a priori per leggere se l'elemento che l'array sta leggendo è vero, quindi è palindromo oppure è falso, ovvero non è palindromo
    if(checkPalindrom(nome_corrente)){
        console.log("Il nome " + nome_corrente + " è palindromo");
    }else{
        console.log("Il nome " + nome_corrente + " non è palindromo");
    }
}

// creo una funzione che definisce palindromo come vero e non palindromo come falso
function checkPalindrom(str) {
    // se la stringa letta in modo inverso è uguale alla stringa iniziale = vero
    if (str == str.split('').reverse().join('')){
        return true;
    // se la stringa letta in modo inverso non è uguale alla stringa iniziale = falso
    }else{
        return false;
    }
}


// Soluzione 2 ------------------------------

// // Creo un array per leggere le singole stringhe una alla volta
// for(var i = 0; i < nomi.length; i++) {
//     var nome_corrente = nomi[i];
//     console.log(nome_corrente);
//
// // Creo una varibile per mettere le singole lettere da leggere
//     var parole = "";
// // Creo un ciclo for per leggere la singola stringa da destra verso sinistra quando legge la lettera la mette nella varibile parola (tipo somma)
//     for (var y = nome_corrente.length - 1; y >= 0; y--) {
//         var nome_corrente_invertito = nome_corrente[y];
//         parole += nome_corrente_invertito;
//     }
// // Creo un if per verificare se la parola corrente che stiamo leggendo nella stringa è uguale alla parola letta da destra verso sinistra (varibile parola)
//     if(nome_corrente == parole){
//         console.log("Il nome " + nome_corrente + " è palindromo");
//     }else{
//         console.log("Il nome " + nome_corrente + " non è palindromo");
//     }
//
// }


// // Soluzione 3 con prompt---------------------
// // Creo una funzione per verificare che l'elemeto che vogliamo quando lo invertiamo è uguale alla parola iniziale
// function checkPalindrom(str){
//     return (str == str.split('').reverse().join(''));
// }
// // Chiedo all'utente di inserire una parola
// var nome_utente = prompt("Inserisci una parola");
// // Creo una varibile di supporto dove il risultato deve essere vero quando la funzione è vera (ovvero quando la parola inserita dall'utente soddisfa i requisiti di return della funzione)
// var risultato = checkPalindrom(nome_utente);
// // Creo un if per verificare se è vera è palindroma se è falsa non è palindroma
// if (risultato){
//     console.log("La parola che hai inserito è palindroma");
// }else{
//     console.log("La parola che hai inserito non è palindroma");
// }
