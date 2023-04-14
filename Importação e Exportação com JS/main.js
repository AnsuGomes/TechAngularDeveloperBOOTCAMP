/*
    UMA SALA CONTEM 5 ALUNOS E PARA CADA ALUNO FOI SORTEADO UM NÚMERO DE 1-100.
    FAÇA UM PROGRAMA QUE RECEBA OS 5 NÚMEROS SORTEADOS PARA OS ALUNOS E MOSTRE O MAIOR NÚMERO SORTEADO.
*/

const { gets, print} = require('./funcoes-auxiliares')

// const numerosSorteados = []

let maiorValor = 0

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets()
    if(numerosSorteado > maiorValor){
        maiorValor = numerosSorteado
    }
}

// let maiorValor = 0

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numerosSorteado = numerosSorteados[i];
//     if (numerosSorteado > maiorValor){
//         maiorValor = numerosSorteado
//     }
// }

print(maiorValor)