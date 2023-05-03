//1. Get all the cells in the game board and store them in a variable.

var celule = document.querySelectorAll(".cell");
var pas = 0; //pasii impari sunt pt player1, pasii pari sunt pt player2
var jucator = "player1";
var scor1 = document.getElementById("j1");
var scor2 = document.getElementById("j2");

const castiga = document.getElementById("castigator");
const restartJoc = document.getElementById("restart");
restartJoc.addEventListener("click", reset);

//2. Create a function to manipulate the game board when a player clicks on a cell
//(the eventlistener should be attached for every cell - hint: use loops and classList).

for (let i = 0; i <= celule.length - 1; i++) {
  celule[i].addEventListener("click", apasa);
}

function apasa(event) {
  //3. In the created function, check if the cell is already occupied by another player.
  if (
    event.target.classList.contains("player1") == false &&
    event.target.classList.contains("player2") == false
  ) {
    pas++;
    if (pas <= 9) {
      //4. Associate a unique CSS class to each player and use it to mark the cells they occupy.
      if (pas % 2 == 1) {
        event.target.classList.add("player1");
      } else {
        event.target.classList.add("player2");
      }
    }
    verificare("player1");
    verificare("player2");
  }
}

//5. Create a function to check the game state after each move and declare a winner or a tie.
function verificare(jucator) {
  if (
    //linia 1
    (celule[0].classList.contains(jucator) &&
      celule[1].classList.contains(jucator) &&
      celule[2].classList.contains(jucator)) ||
    //linia 2
    (celule[3].classList.contains(jucator) &&
      celule[4].classList.contains(jucator) &&
      celule[5].classList.contains(jucator)) ||
    //linia 3
    (celule[6].classList.contains(jucator) &&
      celule[7].classList.contains(jucator) &&
      celule[8].classList.contains(jucator)) ||
    //diagonala stanga
    (celule[0].classList.contains(jucator) &&
      celule[4].classList.contains(jucator) &&
      celule[8].classList.contains(jucator)) ||
    //diagonala dreapta
    (celule[2].classList.contains(jucator) &&
      celule[4].classList.contains(jucator) &&
      celule[6].classList.contains(jucator)) ||
    //coloana 1
    (celule[0].classList.contains(jucator) &&
      celule[3].classList.contains(jucator) &&
      celule[6].classList.contains(jucator)) ||
    //coloana 2
    (celule[1].classList.contains(jucator) &&
      celule[4].classList.contains(jucator) &&
      celule[7].classList.contains(jucator)) ||
    //coloana 3
    (celule[2].classList.contains(jucator) &&
      celule[5].classList.contains(jucator) &&
      celule[8].classList.contains(jucator))
  ) {
    //6. Create a function to display the end game message (winner or tie) in a display element,
    //such as a div with a specific ID.
    castiga.innerHTML =
      "Rezultat joc: <span class=" +
      jucator +
      ">" +
      jucator +
      "</span> a castigat";
    if (jucator == "player1") {
      scor1.innerHTML++;
    }
    if (jucator == "player2") {
      scor2.innerHTML++;
    }
    reset();
  } else if (pas == 9) {
    castiga.innerHTML = "Rezultat joc: remiza";
  }
}

//7. Add a reset button to allow players to start a new game.
function reset() {
  pas = 0;
  for (let i = 0; i <= celule.length - 1; i++) {
    celule[i].classList.remove("player1");
    celule[i].classList.remove("player2");
  }
  //castiga.innerHTML = "Rezultat joc: "; //daca il decomentez, nu se mai vede castigatorul
}

//8. Ensure the game can be played by two different players, so they can make alternate moves.
//9. Allow players to select a unique symbol to represent each player (e.g., X and O).
