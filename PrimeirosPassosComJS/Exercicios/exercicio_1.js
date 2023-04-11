/* Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade. 
Calcule e imprima sua média e classificação:

- Média menor que 5 = reprovado;
- Média entre 5 e 7 = recuperação;
- Média maior que 7, aprovado. */

const nota1 = 8
const nota2 = 5
const nota3 = 9

const media = (nota1 + nota2 + nota3) / 3

console.log(media.toFixed(2))

if(media < 5){
    console.log('Reprovado')
} else if(media >= 5 && media < 7){
    console.log('Recuperação')
} else{
    console.log('Aprovado')
}

