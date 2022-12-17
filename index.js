// Write your code here!
const main = document.getElementById("main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
var text = document.createTextNode("Judy is the champion");
newHeader.appendChild(text);