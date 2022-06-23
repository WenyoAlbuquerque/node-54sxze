const RedesSociais = [
  'Instagram',
  'Youtube',
  'Facebook',
  'TikTok',
  'Twitter',
  'Linkdin',
  'Pinterest',
];

//Para saber exatamente em que posição está qualquer coisa em nosso Array será adicionado o comando ".indexOf('valor que a gente quer procurar, que no caso em questão será o 'TikTok'')"
const TikTok = RedesSociais.indexOf('TikTok');
console.log(TikTok);

//Para saber SOMENTE se um item se encontra ou não no Array utilizaremos o comando ".includes('o item que quer saber se encontra-se no Array')"
//O Array seria no caso em questão "RedesSociais"
// Se o item pesquisado se encontrar no Array o resultado será "true"
//Se o item pesquisado NÃO se encontra no Array o resultado será "false"

console.log(RedesSociais.includes('Tumblr'));
