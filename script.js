
// numero km da percorrere
const kmDaPercorrere = Number(prompt("Inserisci il numero di chilometri da percorrere:"));

// età del passeggero
const etaPasseggero = Number(prompt("Inserisci la tua età:"));

// prezzo al km
const prezzoAlKm = 0.21;

// prezzo totale senza sconti
let prezzoTotale = kmDaPercorrere * prezzoAlKm;

// sconti
const scontoMinorenni = 0.20; // 20%
const scontoOver65 = 0.40;    // 40%

if (etaPasseggero < 18) {
    prezzoTotale = prezzoTotale - (prezzoTotale * scontoMinorenni);
} else if (etaPasseggero > 65) {
    prezzoTotale = prezzoTotale - (prezzoTotale * scontoOver65);
}

// output finale
console.log("Il prezzo finale è: " + prezzoTotale.toFixed(2) + "€");
