// O comando ".reduce" seria para acumular as operações de valores
const saldoContas = [100, 200, 40, 1.9, 300, 1000, 9.99];
const totalConstas = saldoContas.reduce(
  (acumulador, valor) => acumulador + valor
);
console.log(totalConstas);

const saldoGabriel = 1000;
const saldoVanessa = 10000;

const saldototal = saldoGabriel + saldoVanessa;
console.log(saldototal);

const mediaSaldo = saldoGabriel + saldoVanessa / 2;
console.log(mediaSaldo);

let agua = 100;
let energia = 100;
let aluguel = 200;
let diversas = 500;

const despesas = agua + energia + aluguel + diversas;
console.log(despesas);
