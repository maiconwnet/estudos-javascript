
// Desafio me Passado por um empresa , para fazer o desenho de uma ampulheta  não consgui fazer o desafio a tempo porém procurei a resolução , e fiz uma que recebe os dados de um input.  
// Maicon Borges

const btn = document.querySelector("#send");
btn.addEventListener('click', function(e){
e.preventDefault();
const name = document.querySelector("#name");
const value = name.value

// if (value > 0 && value <= 5){
    console.log(value)
   
// }


let n = value;
let string = "";
// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    string += "#";
  }
  string += "\n";
}
// pyramid pattern
for (let i = 2; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);


})


