//const nome = 'Rebeca';
//const concatenacaoa = "Olá uqwieheiuqwheiuqwy  " + nome + "  isaojd  " + nome + "   oiasudoiuasiodu !"
//const concatenacaob = `Óla uqwieheiuqwheiuqwy  ${nome}  isaojd  ${nome}   oiasudoiuasiodu !`;

//console.log(concatenacaoa)
//console.log(concatenacaob)
// Template é uma outra forma de concatenar de uma forma mais organizada.

const nome = "Rebeca";
const concatenacao = "óla " + nome + "!";
const template = `
      Olá
      ${nome}!`;
console.log(concatenacao, template);

//expressões...
console.log(`1 + 1 = ${1 + 1}`);
console.log(`${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('Cuidado')}!`); // up transforma as letras em maiúsculo
