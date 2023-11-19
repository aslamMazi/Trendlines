let karsar = document.querySelector("#cursor");
let body = document.querySelector("body");

body.addEventListener("mousemove", function(dtails){
karsar.style.top = dtails.y+"px";
karsar.style.left = dtails.x+"px";
})


