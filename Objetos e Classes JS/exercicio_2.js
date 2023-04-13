/*
    CRIE UMA CLASSE DE PESSOAS. CADA PESSOA TERÁ NOME, PESO E ALTURA.
    AS PESSOAS DEVEM TER A CAPACIDADE DE DIZER O VALOR DO SEU IMC(PESO /(ALTURA*ALTURA))
*/

class Pessoa{
    nome
    peso
    altura

    constructor (nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }

    classificarImc(){
       const IMC = this.calcularImc()

       if(IMC < 18.5){
        return 'Abaixo do peso'
        }else if(IMC >= 18.5 && IMC <= 25){
            return 'Peso normal'
        }else if(IMC >= 25 && IMC < 30){
            return 'Acima do peso'
        }else if(IMC >= 30 && IMC < 40){
        return 'Obeso'
        }else{
        return 'Obesidade Grave'
        }
    }
}

const jose = new Pessoa('Ansu', 80, 1.76)
console.log(jose.classificarImc())