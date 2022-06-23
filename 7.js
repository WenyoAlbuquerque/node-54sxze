/*const aPagarEmReais = [10, 20, 40, 100];
const cotacaoDolar = 5;
const aPagarEmDolar = aPagarEmReais.map((valor) => valor * cotacaoDolar);

console.table(aPagarEmReais);
console.table(aPagarEmDolar);
*/
// O ".map" vai voltar toda o valor já convertido em dolar na questão atual
/*
const aPagarEmReais = [10, 20, 40, 100];
const aPagarVanessa = aPagarEmReais.filter((valor) => valor > 30);

console.table(aPagarEmReais);
console.table(aPagarVanessa);
*/
// O ".filter" retorna somente os itens que atendem a uma condição

const aPagarEmReais = [10, 20, 40, 100];
const aPagarVanessa = aPagarEmReais.find((valor) => valor > 30);
const aPagarVanessa = aPagarEmReais.findIndex((valor) => valor > 30);

console.table(aPagarEmReais);
console.table(aPagarVanessa);

// O ".find" retorna o valor da primeira ocorrencia da condição, uma vez feito ele para de interar o Array.
// Importante frisar que ele retorna o valor e não um novo Array
