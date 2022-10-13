let arr  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","*", "?", "^", "$", "(", ")", "[", "]", "{", "}", "|", "\\"];
let pass = "";
let btngn = document.getElementById("generate");
console.log(btngn);
let mypass  = document.querySelector(".pass");

function generate () {
  pass ="";
  for (let i = 0; i < 8; i++) {
    pass += `${arr[Math.floor(Math.random() *(arr.length))]}`;
  }
  mypass.textContent  = pass;

}

btngn.addEventListener("click",generate);
