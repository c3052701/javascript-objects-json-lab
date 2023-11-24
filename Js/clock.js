(function(){ 
//codes starts here
console.info("Hello JS"); 
const myNode = document.createElement("div");
const digitalclock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);
myNode.innerHTML = "Welcome";

const myDate = new Date();
console.dir(myDate);

// codes ends here
})();