
// // const matteoCrecheHorario = 'acorda cedo'
// function chegarCreheHorario (onibusHorario) {
//     // let Acorda = '6:00'
//     // let DarBanhoMatteo = '6:10'
//     // let PegarOnibus = '7:20'

//     onibusHorario = '7:40'
//     if (onibusHorario >= '7:25 '){

//         console.log('Parabéns Voce Chegou no horário')
    
//     }else{
    
//         console.log('você está atrasado')
//     }

    
// }
//  chegarCreheHorario()


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


