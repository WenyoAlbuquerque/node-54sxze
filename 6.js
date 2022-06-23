const RedesSociais = [
  'Instagram',
  'Youtube',
  'Facebook',
  'TikTok',
  'Twitter',
  'Linkdin',
  'Pinterest',
];

// i -> indice, no caso em questão o Loop começará com o indice "0", e vai continuar fazendo o Loop enquanto o  indice for menor que o Array "RedesSociais.length", que seria o tamanho/Length do Array
// então enquanto ela for menor que o tamanho do Array ela será executada
// e o ultimo parâmetro aqui seria o de INCREMENTAR essa variavel que é representado pelo comando "i++", ou seja, cada vez que eu fizer o loop essa variavelvai ser acrescida de +1

for (let i = 0; i < RedesSociais.length; i++) {
  console.log(RedesSociais[i]);
}
//Quando colocamos o console.log(RedesSociais[i]), estamos listando todos os itens dentro do Array

for (const i in RedesSociais){
  console.log(RedesSociais[i])
}