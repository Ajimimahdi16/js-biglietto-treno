//numero km da percorrere
const kmDaPercorrere =(prompt("Inserisci il numero di chilometri da percorrere:"));
//età del passeggero
const etaPasseggero = (prompt("Inserisci la tua età:"));
//prezzo al km
const prezzoAlKm = 0.21;
//prezzo totale senza sconti
let prezzoTotale = kmDaPercorrere * prezzoAlKm;
//sconto minorenni
const scontoMinorenni = 0.20;
//sconto over 65
const scontoOver65 = 0.40;


//calcolo sconto minorenni
if (etaPasseggero < 18) {
    prezzoTotale =  (prezzoTotale * scontoMinorenni) / 100;
}
 else (etaPasseggero > 65) {
    //calcolo sconto over 65
    prezzoTotale = (prezzoTotale * scontoOver65) / 100;
//prezzo per età compresa tra 18 e 65 anni
} 

else if (etaPasseggero >= 18 && etaPasseggero <= 65) {
    prezzoTotale = prezzoTotale;
}