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
let cars = [];

//! 1. function getUserInput (), kuri paims is userio numberOfCars ir distance;
//! ir pacallinam sukurta funkcija
// validuoti ar teigiamas ir sveikasis skaicius
// praso ivesti tol, kol ivedamas tinkamas skaicius
// default reiksmes numberOfCars yra 5, distance 100m.




function getUserInput() {
  do {
    numberOfCars = +prompt("Enter how much cars you want to race:", 5);
  } while (!isPositiveInteger(numberOfCars));

  do {
    distance = +prompt("Enter distance of track: :", 100);
  } while (!isPositiveInteger(distance));
}

function isPositiveInteger(input) {
  return Number.isInteger(input) && input > 0;
}



//!2 Sukurti kontruktoriu 

class Car {
  constructor(id) {
    this.id = id;
    this.speed = 0;
    this.distance = 0;
  }
  accelerate(howMuch) {
    this.speed += howMuch;
  }
  slowDown(howMuch) {
    this.speed -= howMuch;
    if (this.speed < 0) this.speed = 0

  }
  move() {
    this.distance += this.speed;
  }
}
//console.log(new Car (5));


//! 3 function drawCars() kuri nupiesia tiek auto, kiek ivesta userio;
//! 3.1 Susikuriam tuscia array globaliai cars, i kuri supushinsim tiek
//! objektu, kiek useris ivede auto lenktynems.
//! kurti panaudojant klase Car sukti loopa, kol pasieksim numberOfCars;
//! Kaip parametra i Car klase paduoti array indexa (i);
//! 3.2 Sukt loopa per visus car array objektus ir kiekvienam is ju
//! sukurti nauja HTML elementa div, prideti klase 'car' nurodyti pozicija
//! per .style.top = 60 * car.id + "pixels"
//! ir appendinti i dokumenta

function drawCars(amount) {

  for (let i = 0; i < amount; i++) {
    cars.push(new Car(i));

  }
  //!3.2 nupiesti
  // cars.forEach(car) => {
  //create new div;
  //add class .car;
  //add style top = 60px * car.id + "px";
  // append to body
  // }
  cars.forEach((car) => {
    const newCar = document.createElement("div");
    newCar.classList.add("car");
    newCar.style.top = 60 * car.id + "px";
    document.querySelector("body").append(newCar);
  });
}







  getUserInput();
  drawCars(numberOfCars);
  console.log(cars);








