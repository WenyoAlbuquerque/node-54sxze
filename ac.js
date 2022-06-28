//PRINCIPAIS OPERAÇÕES EM FILA:
//Enqueue -> Insere um novo elemento
//Dequeue -> Remove o primeiro elemento
//Front/peek -> Retorna o primeiro elemento
//isEmpty -> Retorna um valor do tipo Boolean indicando se a fila está ou não VAZIA
//isFull -> Retorna um valor do tipo Boolean indicando se a fila está ou não CHEIA
//rear -> Retorna o ultimo elemento

class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(item) {
    this.itens.push(item);
  }

  isEmpty() {
    return this.itens.length == 0;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;

    return this.itens.shift();
  }
  front() {
    return this.itens[0];
  }
  rear() {
    return this.itens[this.itens.length - 1];
  }
}

const fila = new Fila();
console.log(fila.isEmpty());
fila.enqueue('Ferrari');
fila.enqueue('Ford');
fila.enqueue('Lamborghini');
fila.enqueue('Fusca');
fila.dequeue();
console.table(fila.itens);
console.log(fila.isEmpty());

console.log(fila.front());
console.log(fila.rear());
