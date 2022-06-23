// Array representado por Colchetes "[]"
// Para adicionar um novo Array -> "New Array( )"

let meuArray = ['vanessa', 'gabriel'];
let meuArray2 = new Array();
let meuArray3 = new Array('gabriel');

console.log(meuArray);
console.log(meuArray2);
console.log(meuArray3);

// Table -> Tabela , Abre em forma de tabela

console.table(meuArray);
console.table(meuArray2);
console.table(meuArray3);

let frutas = new Array('Abacaxi');

// Push -> É usado para adicionar um item no final do Array

frutas.push('Banana');
frutas.push('Maçã');
frutas.push('Morango');

// Unshift -> É usado para adicionar um item no inicio do Array

frutas.unshift('Tangerina');

// Pop -> É o comando usado para excluir o ÚLTIMO item do Array
frutas.pop();

// Shift -> É o comando usado para excluir o PRIMEIRO item do Array
frutas.shift();

// Splice -> É o comando usado para excluir um item do Array com base no parâmetros
// Lembrando que os itens sempre começam a contagem com o número "0"
// No caso em questão, a 'Maçã' seria o parâmetro "2", tendo em vista que, o "Abacaxi" seria o parâmetro "0", a "Banana" seria o "1", e a "Maçã" seria o "2"
// Caso queiramos SUBSTITUIR,  colocamos o parâmetro entre ( ), e depois entre aspas " " acrescentamos o nome que vamos SUBSTITUIR
frutas.splice(2, 1, 'fruta do conde');

console.table(frutas);

//Length -> Comando usado para ver o tamanho do Array
console.log(frutas.length);
