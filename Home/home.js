//CURSEUR PERSONNALISÉ..........................................

let cursor = document.querySelector(".cursor");
console.log(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute("style", "top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;");
});

document.addEventListener("click", () => {
  cursor.classList.add("cursor_animation");

  setTimeout(() => {
    cursor.classList.remove("cursor_animation");
  }, 50);
});

//POSITION ET ANIMATION DU MENU..........................................

// let up = document.querySelector(".up");
// let down = document.querySelector(".down");
// let nav = document.querySelector(".nav");
// const container = document.querySelector(".container_nav");
// container.style.position = "relative";

// let intervalId;

// let navTop = 0;
// function moveUp(e) {

//   navTop += 30;
//   nav.style.marginTop = navTop + "px";
// }

// function moveDown(e) {
//   navTop -= 30;
//   nav.style.marginTop = navTop + "px";
// }

// up.addEventListener("mousedown", () => {
//   up.style.transform = "scale(1.3)";
//   moveUp();1.
// });
// up.addEventListener("mouseup", () => {
//   up.style.transform = "scale(1)";
// });

// down.addEventListener("mousedown", () => {
//    down.style.transform = "scale(1.3)";
//   moveDown();
// });
// down.addEventListener("mouseup", () => {
//    down.style.transform = "scale(1)";
// });

//ANIMATION BIENVENUE..........................................

// let homeAboutH3 = document.querySelector(".home_about_h3 ");
// let susPoints = document.querySelector(".sus_points");

// susPoints.addEventListener("click", () => {
//   susPoints.classList.add("sus_points_hidden");
//   homeAboutH3.classList.add("home_about_h3_visible");
// });

// homeAboutH3.addEventListener("click", () => {
//   susPoints.classList.add("sus_points_visible");
//   homeAboutH3.classList.add("home_about_hidden");
// });

// Récupérer l'élément about_h3
// const aboutH3 = document.getElementById("aboutMe");

// Ajouter un écouteur d'événement scroll à la div about_h3
// aboutH3.addEventListener("scroll", () => {
//   // Récupérer la position de l'élément about_h3 par rapport au haut de la div
//   const aboutH3Top = aboutH3.scrollTop;

//   // Si l'élément about_h3 est proche du bord supérieur de la div, ajouter une opacité
//   if (aboutH3Top > 0 && aboutH3Top < aboutH3.clientHeight - window.innerHeight * 0.3) {
//     aboutH3.style.opacity = "0.5";
//   } else {
//     aboutH3.style.opacity = "1";
//   }
// });

//     <!-- <div class="electric_line" id="electricLine"></div>
// <div id="container_bubbles" >
//   <img class="spark" src="../assets/pngegg (41).png" alt="">
//   <img class ="spark2" src="../assets/pngegg (40).png" alt="">

// </div> --></img>

// let electricLine = document.getElementById("electricLine");
// let spark = document.getElementById("spark");
// console.log(electricLine);
// console.log(spark);
// const tmLine = gsap.timeline();
// const tmSpark = gsap.timeline();

// gsap.to(".electric_line", {
//   duration: 4,
//   width: "100%",
//   ease: "linear",
//   onComplete: function () {
//     gsap.to(".electric_line", {
//       duration: 5,
//       x: "+=" + window.innerWidth,
//       ease: "linear",
//     });
//   },
// });

// gsap.to(".spark",{
//   duration: 5,
//   x: "+=" + window.innerWidth,
//   ease: "linear",
//   delay: 4,
// });
// gsap.to(".spark", {
//   duration: 0.2,
//   opacity: 0.5,
//   ease: Power2,
//   scale: 1.4,
//   repeat: -1,
//   yoyo: true
// })
// gsap.to(".spark2", {
//   duration: 5,
//   x: "+=" + window.innerWidth,
//   ease: "linear",
//   delay: 4,
// });
// gsap.to(".spark2", {
//   duration: 0.1,
//   opacity: 0.8,
//   ease: Power4,
//   scale: 1.4,
//   repeat: -1,
//   yoyo: true,
// });

// const white = document.querySelectorAll(".white");

// setTimeout(() => {
//   const black = document.querySelector(".home_title");
//  black.classList.add("white")
// }, 2000);

// const containerBubbles = document.getElementById("container_bubbles");

// // créer une fonction pour générer une bulle
// function createBubble() {
//   const bubble = document.createElement("div");
//   bubble.classList.add("bubble");

//   // définir une taille et une opacité aléatoires pour chaque bulle
//   const bubbleSize = Math.random() * 10 + 10;
//   const bubbleOpacity = Math.random() * 0.5 + 0.5;

//   bubble.style.width = `${bubbleSize}px`;
//   bubble.style.height = `${bubbleSize}px`;
//   bubble.style.opacity = bubbleOpacity;

//   // ajouter la bulle au conteneur
//   containerBubbles.appendChild(bubble);

//   // créer un intervalle aléatoire pour chaque bulle
//   const interval = Math.random() * 1000 + 500;

//   // créer une fonction pour modifier l'opacité de la bulle
//   function toggleOpacity() {
//     bubble.style.opacity = bubble.style.opacity === "0" ? "1" : "0";
//     requestAnimationFrame(toggleOpacity);
//   }

//   // démarrer l'animation de la bulle
//   toggleOpacity();

//   // supprimer la bulle du DOM après un certain temps
//   setTimeout(() => {
//     bubble.remove();
//   }, interval * 10);
// }

// // générer un nombre fixe de bulles
// for (let i = 0; i < 35; i++) {
//   createBubble();

// const tm = gsap.timeline();
// let avion = document.getElementsByClassName("avion");
// console.log(avion);

// tm.to(".avion", {
//   duration: 67,
//   x: 820,
//   ease: Sine,
//   repeat: -1,
// });

// let name = document.querySelector("#name");
// console.log(name);

let logoTech = document.querySelector(".technos");
let titleHeader = document.querySelector(".header_title");

// logoTech.addEventListener("mouseover", () => {
//   logoTech.style.transform = "scaleX(-1)";
// })


const avion = document.querySelector(".avion");
const texte = document.querySelector(".header_title");


const avionBounds = avion.getBoundingClientRect();
const texteBounds = texte.getBoundingClientRect();

const deltaX = texteBounds.left - avionBounds.left;
const deltaY = texteBounds.top - 22 - avionBounds.top;


gsap.registerEase({
  name: "customEase",
  ease: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
});

gsap.to(".header_title", {
  delay: 3.7,
  duration: 6,
  rotateX: 3600,
  ease: "customEase",
  onComplete: function () {
    // la fonction suivante sera appelée lorsque l'animation sera terminée
    document.querySelector(".header_title").style.color = "red";
    if (titleHeader.style.color === "red") {
      logoTech.style.transform = "scaleX(1)";
    }

  },
});

const tm = gsap.timeline();

tm.add(
  gsap.to(".avion", {
    x: 100,
    y: -150,
    duration: 3,
    ease: "none",
    rotation: 20,
  })
)
  .add(
    gsap.to(".avion", {
      x: 200,
      y: deltaY,
      ease: "none",
      duration: 0.7,
    })
  )
  .add(
    gsap.to(".avion", {
      x: 202,
      ease: "none",
      duration: 0,
      rotation: -10,
    })
  )
  .add(
    gsap.to(".avion", {
      x: 740,
      y: -505,
      // ease: "power4",
      duration: 3,
    })
  );
 
  // .add(
  //   gsap.to(".avion", {
  //     x: 300,
  //     y: 100,
  //     ease: "none",
  //     duration: 2,
  //   })
  // )
  // .add(
  //   gsap.to(".avion", {
  //     x: 390,
  //     y: 0,
  //     ease: "none",
  //     duration: 1,
  //   })
  // )
  // .add(
  //   gsap.to(".avion", {
  //     x: 640,
  //     y: -300,
  //     ease: "none",
  //     duration: 2,
  //   })
  // )
 
