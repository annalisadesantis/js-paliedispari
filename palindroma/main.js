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
/*
for(var i = 5; i > 0; i--) {

}
*/

//str.length - 1

//5, 4, 3, 2, 1, 0

// devi leggere la stringa dal suo ultimo carattere al primo
