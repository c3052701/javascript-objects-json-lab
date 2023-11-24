// IIFE immediately invoked function expression
(function(){ 
//codes starts here
console.info("Hello JS"); 
const myNode = document.createElement("div");
const digitalclock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);
// myNode.innerHTML = "Welcome"; (it was a test)

// get time

const updateTime = function() {
    
const myDate = new Date();
myNode.innerHTML = myDate.toLocaleTimeString();
    
};

setInterval(updateTime, 1000);
updateTime();

// codes ends here
})();