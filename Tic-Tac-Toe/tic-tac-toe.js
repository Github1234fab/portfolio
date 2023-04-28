const cells = document.querySelectorAll("[data-cell]");
const reload = document.getElementById("reload");
const gameState = document.getElementById("gameState");
const score = document.getElementById("score");
const blueScore = document.getElementById("blueScore");
const redScore = document.getElementById("redScore");
const power = document.getElementById("power");
const containerCells = document.getElementsByClassName("container_cells");
console.log(containerCells);

//fLes deux index stockés en dehors de playGme()......................................................

let indexBlue = 0;
let indexRed = 0;

//function reintialiser le jeu......................................................

reload.addEventListener("click", (el) => {
  cells.forEach((el) => {
    el.classList.remove("blue", "red");
    gameState.innerHTML = "";
  });
  cells.forEach((cell) => {
    cell.addEventListener("click", playGame, { once: true });
  });
});

//function éteindre le jeu et le rallumer......................................................

let gameIsOn = false;

function playSound() {
  const audio = new Audio("https://www.soundjay.com/button/button-3.mp3");
  audio.play();
}

power.addEventListener("click", () => {
  gameIsOn = !gameIsOn;
  power.style.color = gameIsOn ? "black" : "white";
  power.style.textShadow = gameIsOn ? "none" : "0px 0px 6px white";
  if (power.style.color === "white") {
    reload.classList.add("hidden_reload");
    gameState.classList.add("hidden_reload");
    score.classList.add("hidden_reload");
    blueScore.innerHTML = "";
    redScore.innerHTML = "";
    // window.location.reload();
    cells.forEach((el) => {
      el.classList.add("hidden_reload");
    });
    cells.forEach((el) => {
      el.classList.remove("blue", "red");
      gameState.innerHTML = "";
    });
    cells.forEach((cell) => {
      cell.addEventListener("click", playGame, { once: true });
    });
  } else {
    blueScore.innerHTML = "";
    redScore.innerHTML = "";
    reload.classList.remove("hidden_reload");
    gameState.classList.remove("hidden_reload");
    score.classList.remove("hidden_reload");
    cells.forEach((el) => {
      el.classList.remove("hidden_reload");
    });
  }
});

let playerOne = true; // va servir à passer la class blue ou red en alternant (à travers une ternaire).............

//chaque cellule déclenche playGame() au click. {once:true}, permet de vérouiller une touche une fois cliquée.......................................................

cells.forEach((cell) => {
  cell.addEventListener("click", playGame, { once: true });
});

// fonction playGame .....................................................

function playGame(e) {
  const cell = e.target; //récupère chaque cellule..........
  cell.style.transform = "scale(0.9)";
  cell.style.transition = "transform 1.1s ease-in";
  cell.style.transition = "background-color 1s ease-in-out";
  cell.classList.add(playerOne ? "blue" : "red"); // permet d'alterner en passant la classe appropriée. Si joueur 1 alors blue, sinon red............
  const blueCells = Array.from(document.querySelectorAll("[data-cell].blue"));
  const redCells = Array.from(document.querySelectorAll("[data-cell].red"));

  playSound();

  // transforme le scale........................................................

  setTimeout(function () {
    cell.style.transform = "scale(1)";
  }, 200);

  // permet de passer le gameState, à qui le tour? .........................................

  playerOne = !playerOne;

  let textGameState;

  if (playerOne) {
    textGameState = "Blues's turn";
  } else {
    textGameState = "Reds's turn";
  }
  gameState.innerHTML = textGameState;
  console.log(textGameState);

  // console.log(blueCells.length);
  console.log(redCells.length);

  // les combinaisons sont stockées sous forme de tableaux dans le tableau........................
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // trouver si une combinaison est gagnante...........................................;

  let isBlueWinner = winningCombos.some((el) => {
    return el.every((index) => cells[index].classList.contains("blue"));
    score.innerHTML = "Blues wins";
  });

  let isRedWinner = winningCombos.some((el) => {
    return el.every((index) => cells[index].classList.contains("red"));
    score.innerHTML = "Reds wins";
  });

  // condition, si le joueur un gagne, etc......................................................
  if (isBlueWinner === true) {
    gameState.innerHTML = "Blues wins!!";
    indexBlue++;
    blueScore.innerHTML = indexBlue;
     cells.forEach((cell) => {
      cell.removeEventListener("click", playGame);
    });


  // if (isBlueWinner === true) {
  //   // Ajouter la classe 'blink' à chaque cellule de la combinaison gagnante
  //   el.forEach((i) => cells[i].classList.add("blink"));

  //    //   // Mettre à jour le score
  //  indexBlue++;
  //   blueScore.innerHTML = indexBlue;

  //   // Afficher le message de victoire
  //   gameState.innerHTML = "Blue wins!!";

  //   // Clignoter la combinaison gagnante pendant 3 secondes
  //   setInterval(() => {
  //     stopBlinking();
  //     setTimeout(() => {
  //       el.forEach((i) => cells[i].classList.add("blink"));
  //     }, 250);
  //   }, 500);
  //   setTimeout(() => {
  //     stopBlinking();
  //   }, 3000);

    console.log("ok");
  } else if (isRedWinner === true) {
    gameState.innerHTML = "Reds wins!!";
    indexRed++;
    redScore.innerHTML = indexRed;
     cells.forEach((cell) => {
       cell.removeEventListener("click", playGame);
     });
  } else if (document.querySelectorAll(".cell:not(.blue):not(.red)").length === 0) {
    gameState.innerHTML = "Tie Game!!";
  }
}




// Enregistrement du plugin ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// Définition de l'animation avec GSAP
// gsap.to(".cube", {
// // x: 400,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".cube",
//     start: "top center",
//     end: "bottom center",
//     markers: true,
//     toggleClass : "recule"

//   }
// });

// Enregistrement du plugin ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// Définition de l'animation avec GSAP
// gsap.to(".cube", {
// // x: 400,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".cube",
//     start: "top center",
//     end: "bottom center",
//     markers: true,
//     toggleClass : "recule"

//   }
// });
