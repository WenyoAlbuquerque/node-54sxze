// Array dentro de Array ,ou seja, Colchetes dentro de Colchetes

const bandeiras = [
  ['Brasil', ['verde', 'amarelo', 'azul', 'branco']],
  ['Canadá', ['vermelho', 'brando']],
  ['México', ['verde', 'branco', 'vermelho']],
  ['EUA', ['azul', 'branco', 'vermelho']],
];
console.log(bandeiras[2][1][1]);
console.table(bandeiras);
