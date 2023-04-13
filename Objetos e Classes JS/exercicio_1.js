/*
    CRIE UMA CLASSE PARA REPREPRESENTAR CARROS.
    OS CARROS POSSUEM UMA MARCA, UMA COR E UMA GASTO MÉDIO DE COMBUSTIVEL.
    NOS DÊ O VALOR GASTO EM REAIS PARA REALIZAR ESSE PERCURSO.
*/

class Carro{
    marca
    cor
    gastoMedioPorKm

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12)
console.log(uno.calcularGastoDePercurso(70, 5.69))

const palio = new Carro('Fiat', 'Prata', 1/10)
console.log(palio.calcularGastoDePercurso(70, 5))