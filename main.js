let nav = document.getElementById("navigation");
let iconMenu = document.getElementById("iconMenu");
let linkA = document.getElementById("linkA");
let linkB = document.getElementById("linkB");

let visible = false;

iconMenu.addEventListener("click", () => {
    visible = !visible

    if (visible) {
              console.log("ok");
          
        linkA.classList.add("a_visible");
         linkB.classList.add("a_visible");
        
    } else if(!visible) {
   
        linkA.classList.remove("a_visible");
         linkB.classList.remove("a_visible");
  
    }
})