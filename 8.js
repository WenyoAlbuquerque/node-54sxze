const aPagarEmReais = [10, 20, 40, 100];
const totalAPagar = aPagarEmReais.reduce(
  (acumulador, valor) => acumulador + valor,
  0
);

console.table(aPagarEmReais);
console.table(totalAPagar);

//O ".reduce" é usado para fazer uma operação de soma, subtração, multiplicação ou divisão.

const despesa = [100, 100, 100, 100];
const totalDespesa = despesa.reduce(
  (acumulador, valor) => acumulador + valor,
  0
);

console.table(despesa);
console.table(totalDespesa);

const wenyo = [124, 550, 350];
const total2 = wenyo.reduce((acumulador, valor) => acumulador + valor, 0);

console.table(total2);
