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
      duration: 5,
      x: "+=900px",
      ease: "linear",
    });
  },
});

gsap.to(".spark",
  {
    duration: 5,
    x: "+=900px",
    ease: "linear",
    delay: 2,
  });
  gsap.fromTo(
    ".spark",
    { opacity: 0 },
    {
      duration: 0.2,
      opacity: 1,
      repeat: -1,
      yoyo: true,
    }
  );
 