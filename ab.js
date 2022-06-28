class Pilha {
  constructor() {
    this.itens = [];
  }

  push(item) {
    this.itens.push(item);
  }
  pop(item) {
    this.itens.pop();
  }
}

const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);
pilha.pop();
console.table(pilha.itens);
