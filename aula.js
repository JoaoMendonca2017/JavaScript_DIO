
const precoCombustivel = 5.79;

const gastoMedioKmPorLitro = 15;

const distanciaKm = 2300;


const litrosConsumidos =distanciaKm/gastoMedioKmPorLitro;

const gasto = litrosConsumidos * precoCombustivel



console.log(gasto.toFixed(2));