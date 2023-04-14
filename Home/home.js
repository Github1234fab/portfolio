// let electricLine = document.getElementById("electricLine");
// let spark = document.getElementById("spark");
// console.log(electricLine);
// console.log(spark);

const tmLine = gsap.timeline();
const tmSpark = gsap.timeline();


gsap.to(".electric_line", {
  duration: 2,
  width: "100%",
  ease: "linear",
  onComplete: function () {
    gsap.to(".electric_line", {
      duration: 3,
      x: "+=900px",
      ease: "linear",
    });
  },
});

gsap.to(".spark", {
  duration: 3,
  x: "+=900px",
  ease: "linear",
  delay: 2,
});
  gsap.fromTo(
    ".spark", {
      duration: 0.2,
      opacity: 1,
      repeat: -1,
      yoyo: true,
    }
  );
 
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
 