//Faça um programa para calcular o valor gasto de combustível em uma viagem.

//Você terá 05 variáveis. Sendo elas: 

//|1 - Preço do Etanol;
//|2-  Preço da Gasolina;
//| 3 - Tipo de combustivel que está no carro;
//| 4 - Gasto médio de combustível do carro por KM;
//| 5 - Distância em KM da viagem;

//Imprima no console o valor que será gasto de combustível para realizar esta viagem.


const precoEtanol = 5.79
const precoGasolina = 6.66
const KmLitros = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaKm / KmLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}

else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}



