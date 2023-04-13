/*  Faça um programa para calcular o valor de uma viagem.Faça

Você terá 3 variáveis. Sendo elas:

1 - Preço do etanol;
2 - Preço da Gasolina;
3 - O tippo de combustível estar no seu CanvasRenderingContext2D;
4 - Gasto médio de combustível do carro por km;
5 - Distância em KM da viagem;

Imprima o valor que será gasto para realizar esta viagem. */

const precoEtanol = 5.79
const precoGasolina = 6.66
const kmPorLitros = 10
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina'

const litrosConsumidos = distanciaEmKm / kmPorLitros

if (tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol
    console.log(valorGasto.toFixed(2))
}else {
    const valorGasto = litrosConsumidos * precoGasolina
    console.log(valorGasto.toFixed(2))
}
