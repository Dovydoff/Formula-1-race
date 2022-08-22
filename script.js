//? 1 susirinkti vartotojo inputa su masinu kiekiu
//? 2 Susikuriame Car klasę
//? 3 Nusipiešti auto ir finish line
//? 4 Nustatom kiekvieno auto greiti
//? 5 Judinam (move) kiekvieną auto;
//? 6 Tikrinam main case scenariju ar kazkas davaziavo
//? 7 Pridedame winner teksta
//? 8 Po apacia masinos input text (kiek nuvaziavo, greiti)
//? 9 Pakeiciam div i auto img
//? 10 pakeiciam div i finish line img
//? 11 Jei reikes -> fixes and updates
//? 12 extra task - convertuoti ES6 klasę į ES5 sintakse su prototipais
//todo darysim su git ir git commitais

//! 0,Susikuriam globalius kintamuosius numberOfCars ir distance

let numberOfCars = 0;
let distance = 0;


//! 1. function getUserInput (), kuri paims is userio numberOfCars ir distance;
//! ir pacallinam sukurta funkcija
// validuoti ar teigiamas ir sveikasis skaicius
// praso ivesti tol, kol ivedamas tinkamas skaicius
// default reiksmes numberOfCars yra 5, distance 100m.




function getUserInput() {
   do{
        numberOfCars = +prompt("Enter how much cars you want in race:",5);
    } while (!(Number.isInteger(numberOfCars) && numberOfCars > 0));

    }
    do{
        distance = +prompt("Enter distance of track: :",100);
    } while (!isPositiveInteger(distance));

    
function isPositiveInteger(input) {
    return Number.isInteger(input) && input >0;
}
    



//    do {
//     numberOfCars = window.prompt("Enter how much cars you want in race: ");
//    } while (numberOfCars <= 4 ); 
//    do {   
//    } while (distance <=99);
//    distance = window.prompt("Enter distance of track: ");
//     } 


getUserInput();
console.log({numberOfCars});
console.log({distance});


































