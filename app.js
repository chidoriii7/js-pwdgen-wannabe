


let Name = prompt('Inserisci il tuo Nome');
let nameElement = document.getElementById('nome').innerHTML;
nameElement = `${nameElement} ${Name}`;
document.getElementById('nome').innerHTML = nameElement

let LastName = prompt('Inserisci il tuo Cognome');
let lastnameElement = document.getElementById('cognome').innerHTML;
lastnameElement = `${lastnameElement} ${LastName}`;
document.getElementById('cognome').innerHTML = lastnameElement

let colorePreferito = prompt('Inserisci il tuo colore preferito');
let coloreElement = document.getElementById('colorepreferito').innerHTML;
coloreElement = `${coloreElement} ${colorePreferito}`;
document.getElementById('colorepreferito').innerHTML = coloreElement

let Password = Name + LastName + colorePreferito;
let passwordGenerata = document.getElementById('password').innerHTML;

let randomNumber = Math.floor((Math.random() * 100) + 1);

passwordGenerata = `${passwordGenerata} ${Password} ${randomNumber}`;

document.getElementById('password').innerHTML = passwordGenerata



console.log(passwordGenerata);
