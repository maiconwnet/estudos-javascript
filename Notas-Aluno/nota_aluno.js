
let score = -1
let notaEscola = function(score){
let notaA = score >= 90 && score <= 100
let notaB = score >= 80 && score <= 89
let notaC = score >= 70 && score <= 79
let notaD = score >= 60 && score <= 69
let notaF = score < 60 && score >= 0
let scoreFinal;
if(notaA){
    scoreFinal = 'A'
}else if(notaB){
    scoreFinal = 'B'

}else if(notaC){
    scoreFinal = 'C'

}else if(notaD){
    scoreFinal = 'D'

}else if(notaF){
    scoreFinal = 'F'
}
else{
    scoreFinal = 'Nota Inválida'
}
 console.log(scoreFinal);
}
notaEscola(score);

