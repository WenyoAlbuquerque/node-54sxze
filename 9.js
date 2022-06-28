class Programador {
  constructor(
    nome,
    nascimento,
    casado,
    linguagensFavoritas = [],
    trabalhaDesde = null
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.casado = casado;
    this.linguagensFavoritas = linguagensFavoritas;
    this.trabalhaDesde = trabalhaDesde;
  }
}

const gabriel = new Programador(
  'Gabriel Froes',
  '04/07/1980',
  true,
  ['JavaScript', 'PHP', 'Python'],
  1996
);
const vanessa = new Programador(
  'Vanessa Weber',
  '27/03/1981',
  true,
  ['Ruby', 'Dart', 'Python'],
  1996
);

console.table(gabriel);
console.table(vanessa);

for (const propriedade in vanessa) {
  console.log(`${propriedade}: ${vanessa[propriedade]}`);
}
for (const propriedade1 in gabriel) {
  console.log(`${propriedade1}: ${gabriel[propriedade1]}`);
}
