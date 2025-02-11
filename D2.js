/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 10;
let n2 = 20;
if (n1 > n2) {
  console.log("n1 è più grande di n2");
} else {
  console.log("n2 è più grande di n1");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n = 4;
if (n === 5) {
  console.log("ottimo il tuo numero è uguale a 5!");
} else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n3 = 20;

if (n3 % 5) {
  console.log("il tuo numero non è divisibile per 5");
} else {
  console.log("il tuo numero  è divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numbers = {
  numeroPrimo: 7,
  numeroSecondo: 15,
};

console.log(numbers);

if (
  numbers.numeroPrimo === 8 ||
  numbers.numeroSecondo === 8 ||
  numbers.numeroSecondo - numbers.numeroPrimo === 8
) {
  console.log("Perfetto almeno una delle due condizioni è stata rispettata");
} else {
  console.log("Mi dispiace non è presente il numero 8");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 50;
if (totalShoppingCart > 50) {
  console.log("il prezzo da pagare è", " ", totalShoppingCart);
} else {
  console.log("Il prezzo da pagare è", +(totalShoppingCart + 10));
}

const totalShoppingCartt = 51;
if (totalShoppingCartt > 50) {
  console.log("il prezzo da pagare è", totalShoppingCartt);
} else {
  console.log("Il prezzo da pagare è", totalShoppingCartt + 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCarttt = 51;
const dateDay = "29/11/2024";
if (totalShoppingCarttt > 50 && dateDay === "29/11/2024") {
  console.log(
    "il prezzo da pagare è",

    totalShoppingCarttt - (totalShoppingCarttt * 20) / 100
  );
} else {
  console.log("Il prezzo da pagare è", +(totalShoppingCarttt + 10));
}

//oppure
const totalShoppingCartttt = 30;
const dateDayy = "29/11/2024";
if (totalShoppingCartttt > 50 && dateDayy === "29/11/2024") {
  console.log(
    "il prezzo da pagare è",

    totalShoppingCartttt - (totalShoppingCartttt * 20) / 100
  );
} else {
  console.log("Il prezzo da pagare è", +(totalShoppingCartttt + 10));
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const exSeveOne = 8;
const exSeveTwo = 9;
const exSeveThree = 10;

if (exSeveThree > exSeveTwo || exSeveTwo > exSeveOne) {
  console.log(exSeveThree, exSeveTwo, exSeveOne);
} else {
  console.log("i numeri non verranno ordinati");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const exHeight = 20;
const exHeightSecondPossible = "Cane";
const numbersExHeight = 0;
if (typeof exHeight === typeof numbersExHeight) {
  console.log("La variabile è un valore numerico");
} else {
  console.log("Non è un valore numerico");
}

if (typeof exHeightSecondPossible === typeof numbersExHeight) {
  console.log("La variabile è un valore numerico");
} else {
  console.log("Non è un valore numerico");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numberExNine = 10;
const result = numberExNine % 2;

if (result > 0) {
  console.log("Il numero è dispari");
} else {
  console.log("Il numero è pari");
}

let numberExNineSecond = 13;
const resultSecond = numberExNineSecond % 2;

if (resultSecond > 0) {
  console.log("Il numero è dispari");
} else {
  console.log("Il numero è pari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 4;
if (val >= 5 && val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayEpicode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayEpicode);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arrayEpicode.pop();

console.log(arrayEpicode);
