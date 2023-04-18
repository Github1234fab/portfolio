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
  }, 100);
});

//POSITION ET ANIMATION DU MENU..........................................

let up = document.querySelector(".up");
let down = document.querySelector(".down");
let nav = document.querySelector(".home_nav");
const container = document.querySelector(".container_nav");
container.style.position = "relative";

let intervalId;

function moveUp(e) {
  let containerHeight = container.offsetHeight;
  let navTop = parseInt(getComputedStyle(nav).top);
  nav.style.top = Math.max(navTop - 50, -containerHeight + 100) + "px";
}

function moveDown() {
  let containerHeight = container.offsetHeight;
  let navTop = parseInt(getComputedStyle(nav).top);
  nav.style.top = Math.min(navTop + 50, 0) + "px";
}

up.addEventListener("mousedown", () => {
  intervalId = setInterval(moveUp, 100);
});

down.addEventListener("mousedown", () => {
  intervalId = setInterval(moveDown, 100);
});

document.addEventListener("mouseup", () => {
  clearInterval(intervalId);
});

console.log(nav.parentElement);

//ANIMATION BIENVENUE..........................................

let homeAboutH3 = document.querySelector(".home_about_h3 ");
let susPoints = document.querySelector(".sus_points");

susPoints.addEventListener("click", () => {
  susPoints.classList.add("sus_points_hidden");
  homeAboutH3.classList.add("home_about_h3_visible");
});

homeAboutH3.addEventListener("click", () => {
  susPoints.classList.add("sus_points_visible");
  homeAboutH3.classList.add("home_about_remove");
});

















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

//   let containerBubbles = document.getElementById("container_bubbles");
// console.log(containerBubbles);

// for (let i = 0; i < 35; i++){
//   let bubble = document.createElement("div");
//   bubble.classList.add("bubble");
//   let bubbleSize = Math.random() + 0.5;
//     bubble.style.width = bubbleSize * 20 + "px";
//     bubble.style.height = bubbleSize * 20 + "px";
//   let bubblesOpacity = Math.random() + 0.5;
//   bubble.style.opacity = bubblesOpacity;
//   // bubble.style.opacity = Math.random();
//   containerBubbles.appendChild(bubble);
//    let interval = Math.random() * 1000 + 500;
//    setInterval(function () {
//      // alterner entre les opacités 0 et 1
//      if (bubble.style.opacity == "0") {
//        bubble.style.opacity = "1";
//      } else {
//        bubble.style.opacity = "0";
//      }
//    }, interval);
//   }
