const nome = 'Rebeca';
const concatenacao = 'Óla ' + nome + '!';
const template = `
      Olá
      ${nome}!`;
console.log(concatenacao, template);

//expressões...
console.log(`1 + 1 = ${1 + 1}`);
console.log(`${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('Cuidado')}!`); // up transforma as letras em maiúsculo
