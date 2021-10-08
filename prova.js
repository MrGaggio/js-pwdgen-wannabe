//Chiedi all'utente il suo nome, cognome e colore preferito


const userName = prompt("Come ti chiami?");
const userSurname = prompt("Qual è il tuo cognome?");
const userFavoriteColor = prompt("Qual è il tuo colore preferito?");
console.log(userName + userSurname + userFavoriteColor + 21);


//Scrivi sulla pagina nomecognomecolorepreferito21

document.getElementById("nome").innerHTML= "userName" + "userSurname" + "userFavoriteColor";