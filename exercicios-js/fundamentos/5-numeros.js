const peso1 = 1.0;
const peso2 = Number ('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // isInteger serve para identificar se o Nemero é inteiro ou não
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed para casas decimais
console.log(media.toFixed(4));
console.log(media.toString(2)); // toString para definir se é binário ...

console.log(typeof media);
console.log(typeof Number);

// próxima aula aula 41










