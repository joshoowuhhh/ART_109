
document.querySelector("#image-")

console.log("hello hello");


let pageTitle =  document.querySelector("#page-title");

// Javascript Tiemout changes h1 title after 3 seconds
setTimeout(function(){
   pageTitle.style.color = "red";
    // console.log("timeout worked!");
}, 3000);

//Clcik event on header changes background color
document.querySelector("header").onclick = function() {
    // console.log("clicked header");
    document.querySelector("body").style.backgroundColor = "red"
}



/* Changing without storing in variables

// Javascript Tiemout changes h1 title after 3 seconds
setTimeout(function(){
    document.querySelector("#page-title").style.color = "purple";
    // console.log("timeout worked!");
}, 3000);

//Clcik event on header changes background color
document.querySelector("header").onclick = function() {
    // console.log("clicked header");
    document.querySelector("body").style.backgroundColor = "purple"
}

*/
