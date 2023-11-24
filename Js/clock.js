(function(){ 
//codes starts here
console.info("Hello JS"); 
const myNode = document.createElement("div");
const digitalclock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);
myNode.innerHTML = "Welcome";

const myDate = new Date();
console.dir(myDate);

// show only hours, minutes and seconds
myNode.innerHTML = myDate.toLocaleTimeString([], 
{ hour: "2-digit", minute: "2-digit", second: "2-digit" });



// codes ends here
})();